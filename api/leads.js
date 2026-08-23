function isAuthed(req) {
  var cookie = req.headers.cookie || "";
  var match = cookie.match(/(?:^|;\s*)cl_session=([^;]+)/);
  var token = match && match[1];
  return Boolean(token) && token === process.env.DASHBOARD_SESSION_TOKEN;
}

module.exports = async (req, res) => {
  if (!isAuthed(req)) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }

  var scriptUrl = process.env.LEADS_SCRIPT_URL;
  var secret = process.env.LEADS_SECRET_KEY;
  if (!scriptUrl || !secret) {
    res.status(500).json({ error: "Leads backend not configured. Missing environment variables." });
    return;
  }

  if (req.method === "GET") {
    try {
      var r = await fetch(scriptUrl + "?key=" + encodeURIComponent(secret));
      var data = await r.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(502).json({ error: "Could not reach the leads sheet." });
    }
    return;
  }

  if (req.method === "POST") {
    var body = req.body || {};
    if (!body.id || !body.status) {
      res.status(400).json({ error: "Missing id or status." });
      return;
    }
    try {
      var params = new URLSearchParams();
      params.set("action", "updateStatus");
      params.set("key", secret);
      params.set("id", body.id);
      params.set("status", body.status);
      var r2 = await fetch(scriptUrl, { method: "POST", body: params });
      var data2 = await r2.json();
      res.status(200).json(data2);
    } catch (err) {
      res.status(502).json({ error: "Could not update the lead." });
    }
    return;
  }

  res.status(405).json({ error: "Method not allowed" });
};

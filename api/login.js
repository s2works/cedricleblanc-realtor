module.exports = (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  var password = (req.body && req.body.password) || "";
  var expected = process.env.DASHBOARD_PASSWORD;
  var token = process.env.DASHBOARD_SESSION_TOKEN;

  if (!expected || !token) {
    res.status(500).json({ error: "Dashboard not configured. Missing environment variables." });
    return;
  }

  if (password !== expected) {
    res.status(401).json({ error: "Incorrect password." });
    return;
  }

  res.setHeader(
    "Set-Cookie",
    "cl_session=" + token + "; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=" + 60 * 60 * 24 * 7
  );
  res.status(200).json({ result: "ok" });
};

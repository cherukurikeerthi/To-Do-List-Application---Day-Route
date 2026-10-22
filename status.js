const { getAIStatus } = require('../lib/study-chat');

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'GET') {
    res.writeHead(405);
    return res.end(JSON.stringify({ error: 'Method not allowed.' }));
  }
  res.writeHead(200);
  res.end(JSON.stringify(getAIStatus()));
};

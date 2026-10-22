const { AI_NOT_CONFIGURED, getStudyAnswer } = require('../lib/study-chat');

function send(res, status, body) {
  res.writeHead(status, {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(JSON.stringify(body));
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') return send(res, 405, { error: 'Method not allowed.' });
  if (!process.env.OPENAI_API_KEY) {
    return send(res, 503, { available: false, error: AI_NOT_CONFIGURED });
  }
  if (!req.headers['content-type']?.includes('application/json')) {
    return send(res, 415, { error: 'This endpoint accepts JSON requests only.' });
  }

  let body;
  try {
    body = req.body;
    if (Buffer.isBuffer(body)) body = body.toString('utf8');
    if (typeof body === 'string') body = JSON.parse(body);
  } catch {
    return send(res, 400, { error: 'Send valid JSON.' });
  }

  const result = await getStudyAnswer(body);
  return send(res, result.status, result.body);
};

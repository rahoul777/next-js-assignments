const rateLimit = new Map();

export function rateLimiter(req) {
    const clientIP = req.ip || req.headers.get('x-forwarded-for');
    const now = Date.now();

    if (!rateLimit.has(clientIP)) {
        rateLimit.set(clientIP, []);
    }

    const timestamps = rateLimit.get(clientIP);
    timestamps.push(now);

    while (timestamps.length && timestamps[0] < now - 60000) {
        timestamps.shift();
    }

    if (timestamps.length > 10) {
        return new Response('Too many requests!', { status: 429 });
    }

    rateLimit.set(clientIP, timestamps);
    return null;
}

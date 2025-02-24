export function logger(req) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  }
  
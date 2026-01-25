import { Router } from "express";

export function healthRouter(serviceName) {
  const router = Router();
  router.get("/", (req, res) => {
    res.json({
      ok: true,
      service: serviceName,
      region: process.env.AWS_REGION || "us-east-1",
      timestamp: new Date().toISOString()
    });
  });
  return router;
}

import { Router } from "express";

export const statusRouter = Router();

statusRouter.get("/", (req, res) => {
  res.json({
    ok: true,
    service: "api",
    uptime: process.uptime(),
    deployment: process.env.DEPLOYMENT_STRATEGY || "rolling",
    commit: process.env.GIT_SHA || "local"
  });
});

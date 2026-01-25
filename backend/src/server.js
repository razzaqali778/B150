import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pinoHttp from "pino-http";
import { healthRouter } from "./routes/health.js";
import { statusRouter } from "./routes/status.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());
app.use(pinoHttp());

app.get("/", (req, res) => {
  res.json({
    name: "b150-api",
    environment: process.env.APP_ENV || "dev",
    version: process.env.APP_VERSION || "local"
  });
});

app.use("/api/status", statusRouter);
app.use("/api/auth/health", healthRouter("auth-service"));
app.use("/api/jobs/health", healthRouter("jobs-service"));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on port ${port}`);
});

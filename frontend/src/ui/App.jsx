import React, { useEffect, useState } from "react";
import { fetchStatus } from "../lib/api.js";
import "./app.css";

const services = [
  { name: "API", path: "/api/status" },
  { name: "Auth", path: "/api/auth/health" },
  { name: "Jobs", path: "/api/jobs/health" }
];

export default function App() {
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    Promise.all(
      services.map(async (service) => {
        const data = await fetchStatus(service.path);
        return { service: service.name, ...data };
      })
    ).then((results) => {
      if (!mounted) return;
      const next = results.reduce((acc, item) => {
        acc[item.service] = item;
        return acc;
      }, {});
      setStatus(next);
      setLoading(false);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="page">
      <header>
        <div>
          <p className="eyebrow">B150 Platform</p>
          <h1>Delivery Control Center</h1>
          <p className="subtitle">
            A production-style frontend wired to backend health endpoints and CI/CD metadata.
          </p>
        </div>
        <div className="chip">Environment: Dev</div>
      </header>

      <section className="grid">
        <article className="card">
          <h2>Release Overview</h2>
          <p>Current build: {import.meta.env.VITE_BUILD_ID || "local"}</p>
          <p>Region: {import.meta.env.VITE_AWS_REGION || "us-east-1"}</p>
          <p>Deployment: {import.meta.env.VITE_DEPLOY_STRATEGY || "rolling"}</p>
        </article>
        <article className="card">
          <h2>Service Health</h2>
          {loading ? (
            <p>Loading status...</p>
          ) : (
            <ul>
              {services.map((service) => {
                const data = status[service.name];
                return (
                  <li key={service.name}>
                    <span>{service.name}</span>
                    <span className={`pill ${data?.ok ? "ok" : "warn"}`}>
                      {data?.ok ? "Healthy" : "Degraded"}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </article>
        <article className="card">
          <h2>Ops Notes</h2>
          <ul>
            <li>Edge caching via CloudFront.</li>
            <li>Backend deployed on ECS Fargate.</li>
            <li>Metrics flowing into CloudWatch + X-Ray.</li>
            <li>Terraform manages infra with per-env workspaces.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

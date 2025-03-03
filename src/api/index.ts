import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "0.0.0.0" }));

app.get("*", (c) => {
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;

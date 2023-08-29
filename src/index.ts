import { Hono } from "hono";
import { Index } from "./handlers";
import { Health, Pong } from "./handlers/health";

const app = new Hono();

app.get("/", Index);
app.get("/health", Health);
app.get("/ping", Pong);

console.log(`Listening on http://localhost:${process.env.PORT}...`);

export default app;

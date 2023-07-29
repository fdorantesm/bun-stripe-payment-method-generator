import { Hono } from "hono";
import { Index } from "./handlers";

const app = new Hono();

app.get("/", Index);

console.log(`Listening on http://localhost:${process.env.PORT}...`);

export default app;

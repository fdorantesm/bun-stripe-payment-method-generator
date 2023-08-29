import { Context } from "hono";
import { text } from "stream/consumers";

export async function Health({ text }: Context) {
  console.log("Health check");
  return text("OK");
}

export async function Pong({ text }: Context) {
  console.log("Pong");
  return text("Pong");
}

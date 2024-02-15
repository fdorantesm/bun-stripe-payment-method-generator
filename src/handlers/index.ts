import { Context } from "hono";
import { createPaymentMethod } from "../methods/create-payment-method";

export async function Index({ req, json }: Context) {
  const pm = await createPaymentMethod({
    key: req.query("key")! || process.env.STRIPE_PUBLIC_KEY!,
    number: req.query("number") || "4242424242424242",
    exp_month: parseInt(req.query("exp_month")!) || 12,
    exp_year: parseInt("exp_year") || 2028,
    cvc: req.query("cvc") || "123",
  });
  return json({ token: pm.id });
}

import Stripe from "stripe";

export function getStripeClient(key: string, options = { apiVersion: "2022-11-15", typescript: true }) {
  return new Stripe(key, options as Stripe.StripeConfig)
}

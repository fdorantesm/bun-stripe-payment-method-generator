import Stripe from "stripe";

export function getStripeClient(key, apiVersion = "2022-11-15", typescript = true) {
  return new Stripe(key, { apiVersion, typescript })
}

export { getStripeClient };

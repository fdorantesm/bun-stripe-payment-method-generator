import Stripe from "stripe";

const client = new Stripe(process.env.STRIPE_PUBLIC_KEY!, {
  apiVersion: "2022-11-15",
  typescript: true,
});

export { client };

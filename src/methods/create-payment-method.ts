import { client } from "../lib/client";

export async function createPaymentMethod(data: PaymentMethodPayload) {
  const paymentMethod = await client.paymentMethods.create({
    type: "card",
    card: {
      number: data.number!,
      exp_month: data.exp_month,
      exp_year: data.exp_year,
      cvc: data.cvc,
    },
  });

  return paymentMethod;
}

export type PaymentMethodPayload = {
  number: string;
  exp_month: number;
  exp_year: number;
  cvc: string;
};

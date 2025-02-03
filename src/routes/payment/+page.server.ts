import Stripe from "stripe";
import type { Actions } from "./$types";
import { APP_URL, STRIPE_API_KEY, STRIPE_PRICE_ID } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async () => {
    const stripe = new Stripe(STRIPE_API_KEY);
    const session = await stripe.checkout.sessions.create({
      line_items: [
            {
              price: STRIPE_PRICE_ID,
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: `${APP_URL}/continent`,
          cancel_url: APP_URL,
          automatic_tax: {enabled: true},
    })

    redirect(303, session.url ?? "/");
  }
} satisfies Actions;

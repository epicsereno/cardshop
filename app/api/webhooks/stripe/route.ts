import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = (await headers()).get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !secret) {
    return NextResponse.json({ error: "Stripe webhook not configured." }, { status: 400 });
  }

  const stripe = getStripe();
  const event = stripe.webhooks.constructEvent(body, signature, secret);

  return NextResponse.json({ received: true, type: event.type });
}

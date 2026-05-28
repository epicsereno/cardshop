export default function OrdersPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Orders</h1>
      <div className="mt-6 rounded-lg border border-line bg-white p-6 text-sm text-stone-600">
        Stripe-backed order management will list payment state, tax, fulfillment,
        and insurance requirements.
      </div>
    </>
  );
}

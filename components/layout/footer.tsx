import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <p className="font-bold uppercase tracking-[0.18em]">Crown Club</p>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            Private-client grade sports collectibles storefront and inventory
            operations.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-stone-700">
          <Link href="/shop">Shop</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/auctions">Auctions</Link>
        </div>
        <div className="text-sm leading-6 text-stone-600">
          CA tax handling, Stripe checkout, and admin workflows are prepared for
          production integration.
        </div>
      </div>
    </footer>
  );
}

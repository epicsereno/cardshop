import { ProductGrid } from "@/components/product/product-grid";
import { featuredProducts } from "@/data/categories";

export default function AuctionsPage() {
  const auctionProducts = featuredProducts.filter((product) => product.isAuction);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Rare lots
      </p>
      <h1 className="mt-2 text-4xl font-semibold">Auctions</h1>
      <p className="mt-4 max-w-2xl leading-7 text-stone-700">
        Auction support is scaffolded for rare inventory, reserve pricing,
        bidder verification, and timed sale windows.
      </p>
      <div className="mt-8">
        <ProductGrid products={auctionProducts} />
      </div>
    </section>
  );
}

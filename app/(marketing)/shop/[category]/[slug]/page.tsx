import { notFound } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { GradingInfo } from "@/components/product/grading-info";
import { featuredProducts } from "@/data/categories";
import { formatPrice } from "@/lib/utils";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = featuredProducts.find(
    (item) => item.category === category && item.slug === slug,
  );

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-lg border border-line bg-white p-4">
        <div className="flex aspect-[3/4] items-center justify-center rounded-md bg-stone-100 text-center">
          <div>
            <p className="text-3xl font-semibold">{product.player}</p>
            <p className="mt-3 text-stone-600">
              {product.year} {product.brand}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {product.rarity}
        </p>
        <h1 className="mt-2 text-4xl font-semibold leading-tight">{product.title}</h1>
        <p className="mt-4 text-3xl font-bold">{formatPrice(product.price)}</p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-stone-700">
          Authenticated collectible prepared for private sale review. Production
          inventory records should include high-resolution scans, provenance,
          condition notes, and insurance values.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <GradingInfo grading={product.grading} />
          <div className="rounded-lg border border-line bg-white p-5 text-sm">
            <p className="font-semibold">Item details</p>
            <dl className="mt-4 grid gap-3">
              <div className="flex justify-between gap-4">
                <dt className="text-stone-600">Team</dt>
                <dd className="font-semibold">{product.team}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-600">Sport</dt>
                <dd className="font-semibold">{product.sport}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-600">Sale type</dt>
                <dd className="font-semibold">
                  {product.isAuction ? "Auction" : "Fixed price"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white">
          <ShoppingBag size={18} /> Add to cart
        </button>
      </div>
    </section>
  );
}

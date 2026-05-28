import Link from "next/link";
import { ArrowRight, ShieldCheck, SlidersHorizontal, Trophy } from "lucide-react";
import { ProductGrid } from "@/components/product/product-grid";
import { featuredProducts } from "@/data/categories";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-ink text-white">
        <div className="mx-auto grid min-h-[560px] max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">
              Authenticated premium inventory
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
              Crown Club Collectibles
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              Curated sports cards, signed jerseys, and rare memorabilia with
              grading data, provenance, private sale support, and auction-ready
              presentation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white"
              >
                Shop inventory <ArrowRight size={18} />
              </Link>
              <Link
                href="/auctions"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white"
              >
                View auctions
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featuredProducts.slice(0, 4).map((product) => (
              <div
                key={product.slug}
                className="rounded-lg border border-white/15 bg-white/8 p-4 shadow-2xl backdrop-blur"
              >
                <div className="flex aspect-[3/4] items-center justify-center rounded-md border border-white/15 bg-gradient-to-br from-stone-100 to-stone-300 text-center text-sm font-semibold text-ink">
                  {product.player}
                  <br />
                  {product.year}
                </div>
                <p className="mt-3 text-sm text-stone-200">{product.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Graded Confidence", ShieldCheck],
            ["Advanced Filtering", SlidersHorizontal],
            ["Auction Ready", Trophy],
          ].map(([label, Icon]) => (
            <div key={label as string} className="rounded-lg border border-line bg-white p-5">
              <Icon className="text-accent" size={24} />
              <h2 className="mt-4 text-lg font-semibold">{label as string}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Inventory views support player, sport, year, grade, rarity,
                and authentication metadata.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Featured
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Premium inventory</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-accent">
            Browse all
          </Link>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>
    </>
  );
}

import { SlidersHorizontal } from "lucide-react";
import { ProductGrid } from "@/components/product/product-grid";
import { categories, featuredProducts } from "@/data/categories";

export default function ShopPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Inventory
          </p>
          <h1 className="mt-2 text-4xl font-semibold">Shop collectibles</h1>
        </div>
        <button className="inline-flex items-center gap-2 self-start rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold">
          <SlidersHorizontal size={18} /> Filters
        </button>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <a
            key={category.slug}
            href={`/shop/${category.slug}`}
            className="rounded-md border border-line bg-white px-3 py-2 text-sm font-medium"
          >
            {category.name}
          </a>
        ))}
      </div>
      <ProductGrid products={featuredProducts} />
    </section>
  );
}

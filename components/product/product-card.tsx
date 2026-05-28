import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.category}/${product.slug}`}
      className="group rounded-lg border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex aspect-[3/4] items-center justify-center rounded-md border border-line bg-stone-100 px-5 text-center">
        <div>
          <p className="text-xl font-semibold">{product.player}</p>
          <p className="mt-2 text-sm text-stone-600">
            {product.year} {product.brand}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-accent">{product.sport}</p>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-600">
            <ShieldCheck size={14} /> {product.grading.company} {product.grading.grade}
          </span>
        </div>
        <h3 className="mt-2 min-h-12 text-base font-semibold leading-6">
          {product.title}
        </h3>
        <p className="mt-3 text-lg font-bold">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}

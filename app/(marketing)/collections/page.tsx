import Link from "next/link";
import { categories } from "@/data/categories";

export default function CollectionsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-4xl font-semibold">Collections</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/shop/${category.slug}`}
            className="rounded-lg border border-line bg-white p-6"
          >
            <p className="text-xl font-semibold">{category.name}</p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Curated authenticated inventory with grading metadata and private
              sale controls.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

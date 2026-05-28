import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product/product-grid";
import { categories, featuredProducts } from "@/data/categories";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryMeta = categories.find((item) => item.slug === category);

  if (!categoryMeta) {
    notFound();
  }

  const products = featuredProducts.filter((product) => product.category === category);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Category
      </p>
      <h1 className="mt-2 text-4xl font-semibold">{categoryMeta.name}</h1>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}

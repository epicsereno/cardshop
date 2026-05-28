import { featuredProducts } from "@/data/categories";
import { formatPrice } from "@/lib/utils";

export default function InventoryPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Inventory</h1>
      <div className="mt-6 overflow-hidden rounded-lg border border-line bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-field text-stone-600">
            <tr>
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Grade</th>
              <th className="px-4 py-3">Rarity</th>
              <th className="px-4 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {featuredProducts.map((product) => (
              <tr key={product.id} className="border-t border-line">
                <td className="px-4 py-3 font-medium">{product.title}</td>
                <td className="px-4 py-3">{product.grading.company} {product.grading.grade}</td>
                <td className="px-4 py-3">{product.rarity}</td>
                <td className="px-4 py-3">{formatPrice(product.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

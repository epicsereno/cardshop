import { ShoppingBag } from "lucide-react";

export function CartDrawer() {
  return (
    <aside className="rounded-lg border border-line bg-white p-5">
      <div className="flex items-center gap-2">
        <ShoppingBag size={18} />
        <p className="font-semibold">Cart</p>
      </div>
      <p className="mt-3 text-sm text-stone-600">Cart integration placeholder.</p>
    </aside>
  );
}

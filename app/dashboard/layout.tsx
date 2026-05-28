import Link from "next/link";

const nav = [
  ["Overview", "/dashboard"],
  ["Inventory", "/dashboard/inventory"],
  ["Orders", "/dashboard/orders"],
  ["Customers", "/dashboard/customers"],
  ["Analytics", "/dashboard/analytics"],
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-field">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-line bg-white p-6 lg:block">
        <p className="font-bold uppercase tracking-[0.18em]">Admin</p>
        <nav className="mt-8 grid gap-2">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-field">
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="lg:pl-64">
        <div className="mx-auto max-w-6xl px-6 py-8">{children}</div>
      </main>
    </div>
  );
}

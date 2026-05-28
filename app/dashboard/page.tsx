import { StatCard } from "@/components/admin/stat-card";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <StatCard label="Active listings" value="128" />
        <StatCard label="Auction lots" value="14" />
        <StatCard label="Pending orders" value="7" />
        <StatCard label="Inventory value" value="$2.4M" />
      </div>
    </>
  );
}

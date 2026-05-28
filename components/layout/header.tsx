import Link from "next/link";
import { ShoppingBag, UserRound } from "lucide-react";

const nav = [
  ["Shop", "/shop"],
  ["Collections", "/collections"],
  ["Auctions", "/auctions"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-field/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-base font-bold uppercase tracking-[0.18em]">
          Crown Club
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-medium text-stone-700">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            aria-label="Account"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-white"
          >
            <UserRound size={18} />
          </Link>
          <button
            aria-label="Cart"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-ink text-white"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

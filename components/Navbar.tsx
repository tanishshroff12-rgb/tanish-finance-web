"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavLink = ({ href, children }:{href:string;children:React.ReactNode}) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={clsx(
      "text-sm md:text-base px-3 py-2 rounded-xl",
      active ? "bg-ink text-cream" : "hover:bg-black/5"
    )}>
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-cream/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-lg">PostPilot</Link>
        <nav className="flex items-center gap-1">
          <NavLink href="#how">How it works</NavLink>
          <NavLink href="#integrations">Integrations</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <Link href="/signup" className="ml-3 rounded-xl bg-ink px-4 py-2 text-cream shadow-soft hover:opacity-95">
            Start free
          </Link>
        </nav>
      </div>
    </header>
  );
}

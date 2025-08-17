import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="container py-10 text-sm text-muted flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} PostPilot</p>
        <div className="flex gap-4">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/signup">Get started</Link>
        </div>
      </div>
    </footer>
  );
}

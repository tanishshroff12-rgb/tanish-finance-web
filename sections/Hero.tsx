import Link from "next/link";
export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-cream">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Your posts, done.<br/>4 weeks scheduled in 4 minutes.
          </h1>
          <p className="mt-4 text-lg text-muted">
            Auto-create and publish posts to Instagram & Google Business so you never go quiet again.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/signup" className="rounded-xl bg-ink px-5 py-3 text-cream shadow-soft">Start free</Link>
            <a href="#how" className="rounded-xl border border-black/15 px-5 py-3">See how it works</a>
          </div>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white shadow-soft p-6">
          <div className="h-64 bg-cream/70 rounded-xl grid place-items-center text-muted">
            <span>Preview area (scheduler mock)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

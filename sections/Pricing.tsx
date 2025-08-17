import Section from "@/components/Section";
import Link from "next/link";
const tiers = [
  { name: "Starter", price: "£29/mo", features: ["12 posts/mo", "1 channel"], cta: "Start free" },
  { name: "Pro", price: "£59/mo", features: ["Unlimited scheduler", "2–3 channels", "Review requests"], cta: "Start free" },
  { name: "Studio", price: "£99/mo", features: ["Human review", "Priority support"], cta: "Talk to us" },
];
export default function Pricing() {
  return (
    <Section id="pricing" title="Pricing" subtitle="Simple plans that grow with you.">
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="mt-1 text-2xl">{t.price}</p>
            <ul className="mt-4 space-y-2 text-muted">
              {t.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <Link href="/signup" className="mt-6 inline-block rounded-xl bg-ink px-4 py-2 text-cream">{t.cta}</Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

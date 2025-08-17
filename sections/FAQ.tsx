import Section from "@/components/Section";
const faqs = [
  { q: "Do I approve posts before publishing?", a: "Yes. You can edit/approve everything, or let autopilot run." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts." },
  { q: "Which channels are supported?", a: "Instagram & Google Business today; Facebook Pages next; LinkedIn soon." },
];
export default function FAQ() {
  return (
    <Section id="faq" title="FAQ">
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map(({q,a}) => (
          <div key={q} className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h3 className="font-semibold">{q}</h3>
            <p className="text-muted mt-2">{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

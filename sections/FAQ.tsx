import Section from "@/components/Section";
const faqs = [
  { 
    q: "Do I approve posts before publishing?", 
    a: "Yes. You can edit/approve everything, or let autopilot run." 
  },
  { 
    q: "Can I cancel anytime?", 
    a: "Yes. No contracts." 
  },
  { 
    q: "Which channels are supported?", 
    a: "Instagram & Google Business today; Facebook Pages next; LinkedIn soon." 
  },
  { 
    q: "How does the AI generate content?", 
    a: "Our AI analyzes your business type and creates relevant, engaging posts tailored to your industry." 
  },
  { 
    q: "What if I don't like the generated content?", 
    a: "You can edit any post before publishing, or regenerate new content with different prompts." 
  },
  { 
    q: "Is my data secure?", 
    a: "Absolutely. We use enterprise-grade security and never share your data with third parties." 
  },
];
export default function FAQ() {
  return (
    <Section id="faq" title="Frequently Asked Questions" subtitle="Everything you need to know about PostPilot.">
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map(({q,a}, index) => (
          <div 
            key={q} 
            className="group rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm p-6 shadow-soft hover:shadow-lg hover:scale-105 hover:border-accent/20 transition-all duration-300"
          >
            <h3 className="font-semibold text-ink mb-3 flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-accent/20 text-accent rounded-full text-sm font-bold mr-3 mt-0.5">
                {index + 1}
              </span>
              {q}
            </h3>
            <p className="text-muted leading-relaxed ml-9">{a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

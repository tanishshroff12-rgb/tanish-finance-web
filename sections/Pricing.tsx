import Section from "@/components/Section";
import Link from "next/link";
const tiers = [
  { 
    name: "Starter", 
    price: "£29", 
    period: "/mo",
    features: ["12 posts/mo", "1 channel", "Basic analytics"], 
    cta: "Start free",
    popular: false
  },
  { 
    name: "Pro", 
    price: "£59", 
    period: "/mo",
    features: ["Unlimited scheduler", "2–3 channels", "Review requests", "Advanced analytics"], 
    cta: "Start free",
    popular: true
  },
  { 
    name: "Studio", 
    price: "£99", 
    period: "/mo",
    features: ["Human review", "Priority support", "Custom branding", "API access"], 
    cta: "Talk to us",
    popular: false
  },
];
export default function Pricing() {
  return (
    <Section id="pricing" title="Pricing" subtitle="Simple plans that grow with you.">
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <div key={tier.name} className={`relative rounded-2xl border transition-all duration-300 hover:scale-105 ${
            tier.popular 
              ? 'border-accent/30 bg-gradient-to-br from-accent/5 to-white shadow-lg' 
              : 'border-black/10 bg-white/80 backdrop-blur-sm shadow-soft hover:shadow-lg'
          }`}>
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-cream px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
            )}
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-ink mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-ink">{tier.price}</span>
                <span className="text-muted ml-1">{tier.period}</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-center text-muted">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/signup" 
                className={`block w-full text-center py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  tier.popular
                    ? 'bg-accent text-cream hover:bg-accent/90 hover:scale-105'
                    : 'bg-ink text-cream hover:bg-black hover:scale-105'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

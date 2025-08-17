import Section from "@/components/Section";
import { Instagram, Facebook, Linkedin, Globe } from "lucide-react";

const integrations = [
  { name: "Instagram", icon: Instagram, available: true },
  { name: "Facebook Pages", icon: Facebook, available: true },
  { name: "Google Business", icon: Globe, available: true },
  { name: "LinkedIn", icon: Linkedin, available: false },
];

export default function Integrations() {
  return (
    <Section id="integrations" title="Integrations" subtitle="Connect your favorite social platforms.">
      <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm p-8 shadow-soft">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {integrations.map((integration) => (
            <div 
              key={integration.name} 
              className={`text-center group transition-all duration-300 ${
                integration.available 
                  ? 'hover:scale-105' 
                  : 'opacity-60'
              }`}
            >
              <div className={`p-4 rounded-xl mb-3 transition-all duration-300 ${
                integration.available 
                  ? 'bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 group-hover:shadow-lg' 
                  : 'bg-gray-100 border border-gray-200'
              }`}>
                <integration.icon className={`w-8 h-8 mx-auto ${
                  integration.available ? 'text-accent' : 'text-gray-400'
                }`} />
              </div>
              <h3 className="font-medium text-ink">{integration.name}</h3>
              {!integration.available && (
                <p className="text-xs text-muted mt-1">Coming soon</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

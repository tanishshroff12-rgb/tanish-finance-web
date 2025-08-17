import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { PlugZap, CalendarCheck2, Rocket } from "lucide-react";

export default function HowItWorks() {
  return (
    <Section id="how" title="How it works" subtitle="Connect accounts. Generate posts. Auto-publish & track.">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="group">
          <FeatureCard 
            icon={
              <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl border border-accent/30 group-hover:scale-110 transition-transform duration-300">
                <PlugZap className="w-6 h-6 text-accent" />
              </div>
            } 
            title="Connect"
          >
            Link Instagram & Google Business in ~3 minutes.
          </FeatureCard>
        </div>
        
        <div className="group">
          <FeatureCard 
            icon={
              <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl border border-accent/30 group-hover:scale-110 transition-transform duration-300">
                <CalendarCheck2 className="w-6 h-6 text-accent" />
              </div>
            } 
            title="Generate & Schedule"
          >
            Get 4 weeks of niche-specific posts. Drag onto the calendar.
          </FeatureCard>
        </div>
        
        <div className="group">
          <FeatureCard 
            icon={
              <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl border border-accent/30 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
            } 
            title="Publish & Track"
          >
            We post for you on schedule. See activity at a glance.
          </FeatureCard>
        </div>
      </div>
    </Section>
  );
}

import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { PlugZap, CalendarCheck2, Rocket } from "lucide-react";

export default function HowItWorks() {
  return (
    <Section id="how" title="How it works" subtitle="Connect accounts. Generate posts. Auto-publish & track.">
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard icon={<PlugZap />} title="Connect">
          Link Instagram & Google Business in ~3 minutes.
        </FeatureCard>
        <FeatureCard icon={<CalendarCheck2 />} title="Generate & Schedule">
          Get 4 weeks of niche-specific posts. Drag onto the calendar.
        </FeatureCard>
        <FeatureCard icon={<Rocket />} title="Publish & Track">
          We post for you on schedule. See activity at a glance.
        </FeatureCard>
      </div>
    </Section>
  );
}

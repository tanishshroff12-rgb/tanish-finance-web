import { type ReactNode } from "react";
export default function FeatureCard({ icon, title, children }:{
  icon: ReactNode; title: string; children: ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm p-8 shadow-soft hover:shadow-lg hover:scale-105 hover:border-accent/20 transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-ink mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{children}</p>
    </div>
  );
}

import { type ReactNode } from "react";
export default function FeatureCard({ icon, title, children }:{
  icon: ReactNode; title: string; children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
      <div className="mb-3">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted mt-2">{children}</p>
    </div>
  );
}

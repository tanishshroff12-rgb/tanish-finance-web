import Section from "@/components/Section";
export default function Integrations() {
  return (
    <Section id="integrations" title="Integrations">
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          <div className="text-center">Instagram</div>
          <div className="text-center">Facebook Pages</div>
          <div className="text-center">Google Business</div>
          <div className="text-center opacity-60">LinkedIn (soon)</div>
        </div>
      </div>
    </Section>
  );
}

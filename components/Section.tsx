export default function Section({
  id, title, subtitle, children
}:{id?:string; title:string; subtitle?:string; children:React.ReactNode}) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          {subtitle && <p className="text-muted mt-2 max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

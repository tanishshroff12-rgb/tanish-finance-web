import Link from "next/link";

export default function HelloPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-display font-bold text-ink">
            Hello from the Hello Page 👋
          </h1>
          <p className="text-xl text-ink/70 max-w-2xl mx-auto">
            This is a sample page demonstrating the structure for finance calculators. 
            Each calculator will have its own dedicated page with forms, outputs, and visualizations.
          </p>
          
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-ink text-cream hover:bg-black font-medium rounded-lg transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

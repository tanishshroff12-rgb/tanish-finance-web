import Link from "next/link";
import Button from "@/app/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm bg-ink/5 text-ink/70 rounded-full border border-ink/10">
            Finance tools
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6">
          Build, price, and explore markets.
        </h1>
        
        <p className="text-xl text-ink/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Professional financial calculators and tools for investors, traders, and analysts. 
          Get real-time data and powerful insights to make informed decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as="a" href="/stocks" variant="primary">
            Try Stocks
          </Button>
          <Button as="a" href="/hello" variant="outline">
            Say Hello
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="surface p-6 hover:scale-105">
            <h3 className="text-xl font-semibold text-ink mb-2">Black–Scholes</h3>
            <p className="text-ink/70 mb-4">Advanced options pricing model for derivatives trading.</p>
            <Link href="#" className="inline-flex items-center text-accent hover:opacity-80 transition">
              Coming soon ➝
            </Link>
          </div>
          
          <div className="surface p-6 hover:scale-105">
            <h3 className="text-xl font-semibold text-ink mb-2">Investment Calculator</h3>
            <p className="text-ink/70 mb-4">Calculate returns, compound interest, and portfolio metrics.</p>
            <Link href="#" className="inline-flex items-center text-accent hover:opacity-80 transition">
              Coming soon ➝
            </Link>
          </div>
          
          <div className="surface p-6 hover:scale-105">
            <h3 className="text-xl font-semibold text-ink mb-2">Strategy Visualizer</h3>
            <p className="text-ink/70 mb-4">Visualize trading strategies and risk-reward scenarios.</p>
            <Link href="#" className="inline-flex items-center text-accent hover:opacity-80 transition">
              Coming soon ➝
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-ink/50">
            Built with Next.js and Tailwind CSS. 
            <Link href="#" className="ml-1 text-accent hover:opacity-80 transition">
              View on GitHub
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}

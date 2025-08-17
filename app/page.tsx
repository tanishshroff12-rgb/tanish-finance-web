import Link from "next/link";
import Button from "@/app/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-cream/50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-ink/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
              ✨ Finance tools
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-ink to-ink/80 bg-clip-text text-transparent mb-6">
            Build, price, and explore markets.
          </h1>
          
          <p className="text-xl text-ink/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Professional financial calculators and tools for investors, traders, and analysts. 
            Get real-time data and powerful insights to make informed decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/stocks" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-ink text-cream rounded-xl shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Try Stocks
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/hello" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-ink/20 text-ink rounded-xl hover:bg-ink/5 hover:border-ink/30 transition-all duration-300 font-medium"
            >
              Say Hello
            </Link>
          </div>
          
          <div className="flex items-center gap-6 pt-8 justify-center">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-accent/70 border-2 border-cream"></div>
              ))}
            </div>
            <p className="text-sm text-ink/60">Join 500+ businesses already using our tools</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm p-8 shadow-soft hover:shadow-lg hover:scale-105 hover:border-accent/20 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl border border-accent/30 mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-3">Black–Scholes</h3>
            <p className="text-ink/70 leading-relaxed mb-4">Advanced options pricing model for derivatives trading.</p>
            <Link href="#" className="inline-flex items-center text-accent hover:opacity-80 transition">
              Coming soon ➝
            </Link>
          </div>
          
          <div className="group rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm p-8 shadow-soft hover:shadow-lg hover:scale-105 hover:border-accent/20 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl border border-accent/30 mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-3">Investment Calculator</h3>
            <p className="text-ink/70 leading-relaxed mb-4">Calculate returns, compound interest, and portfolio metrics.</p>
            <Link href="#" className="inline-flex items-center text-accent hover:opacity-80 transition">
              Coming soon ➝
            </Link>
          </div>
          
          <div className="group rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm p-8 shadow-soft hover:shadow-lg hover:scale-105 hover:border-accent/20 transition-all duration-300">
            <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl border border-accent/30 mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-ink mb-3">Strategy Visualizer</h3>
            <p className="text-ink/70 leading-relaxed mb-4">Visualize trading strategies and risk-reward scenarios.</p>
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

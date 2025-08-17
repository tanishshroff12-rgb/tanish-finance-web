import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-cream via-white to-cream/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ink/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
            ✨ Auto-generate & schedule posts
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-ink to-ink/80 bg-clip-text text-transparent">
            Your posts, done.<br/>
            <span className="text-accent">4 weeks scheduled</span><br/>
            in 4 minutes.
          </h1>
          
          <p className="text-xl text-muted leading-relaxed max-w-lg">
            Auto-create and publish posts to Instagram & Google Business so you never go quiet again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/signup" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-ink text-cream rounded-xl shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
            >
              Start free
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a 
              href="#how" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-ink/20 text-ink rounded-xl hover:bg-ink/5 hover:border-ink/30 transition-all duration-300 font-medium"
            >
              See how it works
            </a>
          </div>
          
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-accent/70 border-2 border-cream"></div>
              ))}
            </div>
            <p className="text-sm text-muted">Join 500+ businesses already using PostPilot</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm shadow-soft p-8 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-ink">Content Calendar</h3>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({length: 28}, (_, i) => (
                  <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 flex items-center justify-center text-xs font-medium text-accent">
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>28 posts scheduled</span>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-ink/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
}

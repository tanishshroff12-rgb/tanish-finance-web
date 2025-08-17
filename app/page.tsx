import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to My App
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            A simple app with two pages about different animals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
            <Link 
              href="/dogs" 
              className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                Dogs Page
              </h3>
              <p className="text-neutral-400 mt-2">
                Learn about dogs
              </p>
            </Link>
            
            <Link 
              href="/cats" 
              className="p-6 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                Cats Page
              </h3>
              <p className="text-neutral-400 mt-2">
                Learn about cats
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

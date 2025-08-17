import Link from "next/link";

export default function CatsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-purple-400">
            Cats Page 🐱
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            This is page 2 about cats. Cats are graceful and independent animals that make wonderful pets.
          </p>
          
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

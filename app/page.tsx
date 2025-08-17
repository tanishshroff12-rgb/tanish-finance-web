export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-neutral-950 text-neutral-100">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-semibold">Home</h1>
        <a className="underline" href="/hello">Go to Hello page →</a>
      </div>
    </main>
  );
}

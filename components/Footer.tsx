import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-gradient-to-b from-cream to-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg text-ink mb-4">PostPilot</h3>
            <p className="text-muted max-w-md">
              Automate your social media presence with AI-powered content generation and scheduling.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-ink mb-4">Product</h4>
            <div className="space-y-2">
              <Link href="#how" className="block text-muted hover:text-ink transition-colors">How it works</Link>
              <Link href="#integrations" className="block text-muted hover:text-ink transition-colors">Integrations</Link>
              <Link href="#pricing" className="block text-muted hover:text-ink transition-colors">Pricing</Link>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-ink mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/terms" className="block text-muted hover:text-ink transition-colors">Terms</Link>
              <Link href="/privacy" className="block text-muted hover:text-ink transition-colors">Privacy</Link>
              <Link href="/signup" className="block text-muted hover:text-ink transition-colors">Get started</Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">© {new Date().getFullYear()} PostPilot. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-sm text-muted hover:text-ink transition-colors">Terms</Link>
            <Link href="/privacy" className="text-sm text-muted hover:text-ink transition-colors">Privacy</Link>
            <Link href="/signup" className="text-sm text-muted hover:text-ink transition-colors">Get started</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

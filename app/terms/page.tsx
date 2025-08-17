export default function TermsPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>
      <div className="prose max-w-none">
        <p className="text-muted mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <div className="space-y-4 text-muted">
          <p>
            Welcome to PostPilot. By accessing our service, you agree to these terms of service.
          </p>
          <p>
            PostPilot provides automated social media posting services for businesses. We help you create, schedule, and publish content to your social media accounts.
          </p>
          <p>
            You are responsible for all content posted through our service. We reserve the right to suspend or terminate accounts that violate our content guidelines.
          </p>
          <p>
            Our service is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any damages arising from the use of our service.
          </p>
          <p>
            We may update these terms from time to time. Continued use of our service constitutes acceptance of any changes.
          </p>
        </div>
      </div>
    </div>
  );
}

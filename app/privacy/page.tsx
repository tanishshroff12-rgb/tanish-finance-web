export default function PrivacyPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-muted mb-4">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <div className="space-y-4 text-muted">
          <p>
            At PostPilot, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p>
            We collect information you provide directly to us, such as your name, email address, business information, and social media account credentials (with your permission).
          </p>
          <p>
            We use this information to provide our services, communicate with you, and improve our platform. We do not sell your personal information to third parties.
          </p>
          <p>
            We implement appropriate security measures to protect your data. However, no method of transmission over the internet is 100% secure.
          </p>
          <p>
            You have the right to access, update, or delete your personal information. Contact us if you have any questions about this privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}

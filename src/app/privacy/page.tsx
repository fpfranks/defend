import { Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Defend",
  description: "How Defend collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#060b14] text-white">
      {/* Nav */}
      <nav className="border-b border-white/5 bg-[#060b14]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-white">Defend</span>
          </Link>
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
            ← Back to site
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: June 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-white/65 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Who we are</h2>
            <p>
              Defend is a home security camera installation service based in Battle, East Sussex, UK (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). We are the data controller for personal information collected through this website and in the course of providing our services.
            </p>
            <p className="mt-3">
              To contact us about your data: <a href="tel:07387344112" className="text-blue-400 hover:text-blue-300">07387 344112</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. What data we collect</h2>
            <p>When you submit a survey enquiry or contact us, we collect:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-3">
              <li>Full name</li>
              <li>Phone number (including WhatsApp)</li>
              <li>Postcode / address (to assess service coverage and arrange the survey)</li>
              <li>Package preference and any notes you provide</li>
              <li>Date and time of enquiry</li>
            </ul>
            <p className="mt-3">
              We do not collect payment card details on this website. Payments are handled separately at the point of installation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Why we collect it and our legal basis</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-white/80">Arranging and delivering your installation</p>
                <p className="text-sm mt-1">Legal basis: <em>Contract performance</em> — we need your contact details and address to carry out the service you&apos;ve requested.</p>
              </div>
              <div>
                <p className="font-medium text-white/80">Following up on your enquiry</p>
                <p className="text-sm mt-1">Legal basis: <em>Legitimate interests</em> — we have a legitimate interest in responding to enquiries from potential customers.</p>
              </div>
              <div>
                <p className="font-medium text-white/80">Ongoing customer support</p>
                <p className="text-sm mt-1">Legal basis: <em>Contract performance / legitimate interests</em> — retaining details of completed installations allows us to provide warranty and aftercare support.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. How we use your data</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>To call or WhatsApp you to arrange your free survey</li>
              <li>To provide a written quote and carry out your installation</li>
              <li>To provide post-installation support and warranty assistance</li>
              <li>To send you occasional service reminders (e.g. annual solar panel clean reminder) — you can opt out at any time</li>
            </ul>
            <p className="mt-3">We will not use your data for unrelated marketing without your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Who we share your data with</h2>
            <p>We do not sell or rent your personal data. We may share it with:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-3">
              <li><strong className="text-white/80">eufy / Anker Innovations</strong> — only if needed to process a warranty claim on your behalf</li>
              <li><strong className="text-white/80">IT and software providers</strong> — any tools we use to store or manage enquiries (e.g. email, CRM) operate under data processing agreements</li>
            </ul>
            <p className="mt-3">We do not transfer your data outside the UK or EEA.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. How long we keep your data</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li><strong className="text-white/80">Enquiries that didn&apos;t lead to an installation:</strong> deleted within 6 months</li>
              <li><strong className="text-white/80">Completed installation records:</strong> retained for 6 years (standard UK business record-keeping requirement)</li>
              <li><strong className="text-white/80">Warranty records:</strong> retained for the duration of the warranty period plus 1 year</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your rights under UK GDPR</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1.5 mt-3">
              <li><strong className="text-white/80">Access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong className="text-white/80">Rectification</strong> — ask us to correct inaccurate data</li>
              <li><strong className="text-white/80">Erasure</strong> — ask us to delete your data (subject to legal retention obligations)</li>
              <li><strong className="text-white/80">Restriction</strong> — ask us to limit how we process your data</li>
              <li><strong className="text-white/80">Portability</strong> — receive your data in a machine-readable format</li>
              <li><strong className="text-white/80">Object</strong> — object to processing based on legitimate interests</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us on <a href="tel:07387344112" className="text-blue-400 hover:text-blue-300">07387 344112</a>. We will respond within 30 days.
            </p>
            <p className="mt-3">
              If you are unhappy with how we handle your data, you have the right to complain to the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">ico.org.uk</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Cookies</h2>
            <p>
              This website does not currently use tracking cookies or third-party analytics. If this changes, this policy will be updated and a cookie notice will be displayed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or disclosure. Enquiry data is accessible only to us and is not stored on publicly accessible servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top of this page will reflect any changes. Continued use of our services after a change constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Defend
          </Link>
          <div className="flex gap-6 text-xs text-white/30">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

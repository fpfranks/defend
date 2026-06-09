import { Shield } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — Defend",
  description: "Terms and conditions for Defend home security installation services.",
};

export default function Terms() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms &amp; Conditions</h1>
          <p className="text-white/40 text-sm">Last updated: June 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-white/65 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. About us</h2>
            <p>
              Defend is a home security camera installation service operated from Battle, East Sussex, UK (&ldquo;Defend&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). These terms govern the relationship between Defend and any person who requests or receives our services (&ldquo;you&rdquo;, &ldquo;the customer&rdquo;).
            </p>
            <p className="mt-3">Contact: <a href="tel:07387344112" className="text-blue-400 hover:text-blue-300">07387 344112</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Surveys</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Surveys are free of charge and carry no obligation to proceed.</li>
              <li>You must be the property owner or have the property owner&apos;s written permission before a survey or installation can take place.</li>
              <li>If you are a tenant, you are responsible for obtaining landlord permission for any permanent fixings.</li>
              <li>We will provide a written quote following the survey. The quote is valid for 30 days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Pricing and payment</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>All prices quoted are in British Pounds (£) and inclusive of VAT where applicable.</li>
              <li>The quoted price covers hardware, installation, app setup, and a demonstration of the system.</li>
              <li>Payment is due on the day of installation unless otherwise agreed in writing.</li>
              <li>We accept bank transfer, cash, or such other methods as agreed at the time of booking.</li>
              <li>No additional subscription or ongoing fees are charged by Defend. The eufy app and all camera features operate without a subscription.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Installation</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>You or an authorised adult (18+) must be present throughout the installation.</li>
              <li>We will select the most effective camera positions in consultation with you. Final positions are subject to structural suitability.</li>
              <li>Cameras are solar-powered and require a suitable south or west-facing surface with adequate daylight. We will assess this during the survey.</li>
              <li>We take reasonable care to avoid damage to your property. Any accidental damage must be reported to us on the same day.</li>
              <li>You are responsible for ensuring a stable Wi-Fi signal at the intended camera locations. We cannot guarantee performance where signal is insufficient.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Cancellation</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>You may cancel or reschedule a booked installation free of charge with at least 48 hours&apos; notice.</li>
              <li>Cancellations with less than 24 hours&apos; notice may incur a callout charge of up to £50 to cover travel and preparation costs.</li>
              <li>If you cancel after installation has begun, you will be charged for work completed and materials used up to that point.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Warranty and aftercare</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Every eufy SoloCam S340 camera carries a 12-month manufacturer warranty provided by eufy (Anker Innovations).</li>
              <li>Warranty covers manufacturing defects. It does not cover physical damage, water ingress from improper installation, theft, or damage caused by misuse.</li>
              <li>We will assist you in making a warranty claim with eufy at no additional charge during the warranty period.</li>
              <li>Our installation workmanship is guaranteed for 12 months. If a mounting or setup issue arises due to our installation, we will return to correct it free of charge.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of liability</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>We do not monitor your cameras or provide any alarm monitoring service. Defend is an installation and support service only.</li>
              <li>We are not liable for any loss, theft, or damage that occurs at your property before, during, or after installation.</li>
              <li>Our total liability to you in connection with any claim shall not exceed the amount you paid us for the installation in question.</li>
              <li>Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Your responsibilities</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>You are responsible for ensuring your camera system complies with UK GDPR if it captures images of public spaces or neighbouring properties. Cameras should be directed at your own property as far as practicable.</li>
              <li>The Information Commissioner&apos;s Office (ICO) provides guidance on domestic CCTV use at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">ico.org.uk</a>.</li>
              <li>You must not use footage obtained by the system for any unlawful purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Third-party products</h2>
            <p>
              eufy SoloCam S340 cameras are manufactured by Anker Innovations. Defend is an independent installation service and is not affiliated with or endorsed by eufy or Anker. Product warranties are subject to eufy&apos;s own terms. App functionality and cloud features (if any) are governed by eufy&apos;s privacy policy and terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The current version is always published on this page. Continued use of our services after an update constitutes acceptance of the revised terms.
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

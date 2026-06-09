import { Shield } from "lucide-react";

const areas = ["Battle", "Hastings", "Bexhill-on-Sea", "Eastbourne", "Rye", "Lewes", "Brighton", "Hove", "Tunbridge Wells", "Tonbridge"];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="font-bold text-white">Defend</span>
            </div>
            <p className="text-xs text-white/35 leading-relaxed mb-4">
              Professional home security installation. AI-powered solar cameras. No monthly fees.
            </p>
            <p className="text-xs text-white/50 font-medium">07387 344112</p>
            <p className="text-xs text-white/25">Mon–Sat · 8am–7pm</p>
          </div>

          {/* Service areas */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-3">
              Areas Served
            </p>
            <div className="grid grid-cols-2 gap-1">
              {areas.map((area) => (
                <p key={area} className="text-xs text-white/35">{area}</p>
              ))}
            </div>
            <p className="text-xs text-white/25 mt-2">& surrounding areas</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-3">
              Quick Links
            </p>
            <div className="space-y-2">
              {[
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Book a Survey", href: "#contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-xs text-white/35 hover:text-white/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Defend. All rights reserved. UK registered business.
          </p>
          <p className="text-xs text-white/20">
            eufy SoloCam S340 is a product of Anker Innovations. Defend is an independent installation service.
          </p>
        </div>
      </div>
    </footer>
  );
}

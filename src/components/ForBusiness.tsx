import { Building2, Home, Briefcase, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: Building2,
    label: "Landlords",
    headline: "Protect your property between tenants",
    points: [
      "Catch any damage before the next tenancy begins",
      "Deter squatting in vacant properties",
      "Evidence if a dispute ever goes to tribunal",
      "One-off cost — no subscription eating your yield",
    ],
  },
  {
    icon: Home,
    label: "Airbnb Hosts",
    headline: "See what&apos;s happening without being there",
    points: [
      "Monitor arrivals, departures and property condition",
      "AI alerts if someone unexpected turns up",
      "Protect outdoor furniture, bikes, and equipment",
      "Works entirely through the eufy app — no extra tech",
    ],
  },
  {
    icon: Briefcase,
    label: "Small Businesses",
    headline: "After-hours coverage without a contract",
    points: [
      "Protect stock, equipment, and vehicles overnight",
      "Colour night vision — full clarity in the dark",
      "Instant phone alert the moment someone appears",
      "No monthly monitoring contract required",
    ],
  },
];

export default function ForBusiness() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/4 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Not Just Homes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Landlords, hosts &amp; small businesses
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            The SoloCam S340 is solar powered, wireless, and subscription-free —
            which makes it equally useful for commercial properties and rentals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {segments.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-2xl border border-white/8 bg-white/3 p-7 hover:border-blue-500/25 hover:bg-blue-600/5 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white/50" />
                  </div>
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                    {s.label}
                  </span>
                </div>
                <h3
                  className="font-semibold text-white mb-4 text-sm leading-snug"
                  dangerouslySetInnerHTML={{ __html: s.headline }}
                />
                <ul className="space-y-2.5">
                  {s.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 shrink-0" />
                      <span
                        className="text-xs text-white/50 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: point }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/3 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white mb-0.5">
              Multi-property discount available
            </p>
            <p className="text-xs text-white/40">
              Installing across more than one property? Get in touch for a
              tailored quote — volume pricing applies from 2+ sites.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Get a Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

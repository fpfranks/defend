import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "£199",
    description: "Perfect for a flat or small house",
    items: [
      "1x outdoor solar AI camera",
      "Person & vehicle detection",
      "Motion-triggered floodlight",
      "Instant phone alerts",
      "14-day local recording",
      "30-min installation",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Home",
    price: "£399",
    description: "Most popular — full home coverage",
    items: [
      "2x outdoor solar AI cameras",
      "1x indoor plug-in camera",
      "AI video doorbell",
      "Face recognition setup",
      "Auto voice deterrence",
      "14-day local recording",
      "Full app setup",
      "1-hour installation",
    ],
    cta: "Book Now",
    highlighted: true,
  },
  {
    name: "Full Protection",
    price: "£699",
    description: "Maximum coverage for larger homes",
    items: [
      "4x outdoor solar AI cameras",
      "2x indoor cameras",
      "AI video doorbell",
      "Smart lock installation",
      "Door & window sensors x4",
      "Neighbourhood mesh access",
      "Behaviour threat scoring",
      "90-day local recording",
      "Priority support",
    ],
    cta: "Book Now",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Transparent Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            One price. No surprises.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Everything included — hardware, installation, setup. No monthly
            fees. No contracts. No hidden costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border flex flex-col ${
                pkg.highlighted
                  ? "border-blue-500/50 bg-gradient-to-b from-blue-600/15 to-blue-600/5"
                  : "border-white/8 bg-white/3"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  {pkg.name}
                </h3>
                <p className="text-white/40 text-sm mb-4">{pkg.description}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-white/40 text-sm mb-1.5">
                    one-time
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-white/60">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full py-3 rounded-xl font-semibold text-sm text-center transition-all ${
                  pkg.highlighted
                    ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    : "border border-white/10 bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/30 mt-8">
          All packages include a 12-month hardware warranty. Free survey before
          any commitment.
        </p>
      </div>
    </section>
  );
}

import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "£229",
    description: "Perfect for a flat or small house",
    items: [
      "1x eufy SoloCam S340",
      "360° pan & tilt — full front coverage",
      "8× zoom, 3K dual lens",
      "Solar powered — no cables ever",
      "8GB local storage, no subscription",
      "Person & vehicle AI detection",
      "Colour night vision + spotlight",
      "eufy app setup on your phone",
      "Installation included — usually a couple of hours",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Home",
    price: "£449",
    description: "Most popular — front and back covered",
    items: [
      "2x eufy SoloCam S340",
      "Front door + rear garden coverage",
      "360° per camera — no blind spots",
      "16GB total local storage",
      "Person & vehicle AI detection",
      "Colour night vision on both cameras",
      "Two-way audio on both cameras",
      "Full eufy app setup",
      "Installation included — usually a couple of hours",
    ],
    cta: "Book Now",
    highlighted: true,
  },
  {
    name: "Full Protection",
    price: "£749",
    description: "Complete coverage for larger homes",
    items: [
      "4x eufy SoloCam S340",
      "All sides of property covered",
      "32GB total local storage",
      "Person & vehicle AI on every camera",
      "Colour night vision on all cameras",
      "Two-way audio on all cameras",
      "Works with Alexa & Google Home",
      "Full eufy app setup + demo",
      "Installation included — usually a couple of hours",
      "12-month hardware warranty",
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
                <p className="text-xs text-white/30 mt-2">
                  vs £96–120/year forever with Ring or Nest
                </p>
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

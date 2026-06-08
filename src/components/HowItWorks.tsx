import { Package, Settings, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Package,
    step: "01",
    title: "Free Survey",
    description:
      "We visit your property, assess entry points, and design a camera layout. No obligation, no cost.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Install in Under 2 Hours",
    description:
      "Solar-powered cameras mounted, AI configured, phone app set up. No wires. No drilling through walls.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "AI Protects 24/7",
    description:
      "The system learns who belongs at your property. Strangers trigger lights, alerts and voice warnings automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Up and running in one visit
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            From booking to fully protected home in less than 48 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative group">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%+1px)] w-6 h-px bg-gradient-to-r from-blue-500/40 to-transparent z-10" />
                )}
                <div className="rounded-2xl border border-white/8 bg-white/3 p-8 h-full hover:border-blue-500/30 hover:bg-blue-500/5 transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-5xl font-bold text-white/5">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

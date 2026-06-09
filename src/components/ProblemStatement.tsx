import { X, AlertTriangle } from "lucide-react";

const problems = [
  {
    brand: "Ring & Nest",
    tagline: "The subscription trap",
    copy: "You pay £100–200 upfront for the hardware — then they charge £8–10 every month just to use the features you already bought. Miss a payment and your camera history disappears. Over 3 years you've paid £390+ in fees on top of the hardware.",
    cost: "£96–120/yr",
    costLabel: "just for basic functionality",
  },
  {
    brand: "DIY Installation",
    tagline: "Confidence with no real coverage",
    copy: "A camera in the wrong position gives a false sense of security. Wrong mounting angle, wrong sensitivity settings, no deterrent lighting — and you've spent £100 on a device that won't help when something actually happens.",
    cost: "False security",
    costLabel: "the most dangerous kind",
  },
  {
    brand: "Traditional Alarm Companies",
    tagline: "Long contracts, limited response",
    copy: "£40–60/month monitoring contracts that tie you in for 2–3 years. When the alarm triggers, the monitoring centre calls you — by the time anyone physically responds, the intruder is long gone. You're paying £600+/year for a phone call.",
    cost: "£500–720/yr",
    costLabel: "in ongoing monitoring fees",
  },
];

export default function ProblemStatement() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/25 bg-red-500/8 text-red-400 text-xs font-medium mb-6">
            <AlertTriangle className="w-3.5 h-3.5" />
            Why Most Security Systems Fail
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Three ways the industry is letting UK homeowners down
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Most security products are designed to generate recurring revenue — not to protect your home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {problems.map((p) => (
            <div
              key={p.brand}
              className="rounded-2xl border border-white/8 bg-white/3 p-7 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-white font-bold mb-1">{p.brand}</p>
                  <p className="text-red-400 text-xs font-medium">{p.tagline}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 ml-3">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed flex-1 mb-6">{p.copy}</p>
              <div className="border-t border-white/6 pt-4">
                <span className="text-lg font-bold text-red-400">{p.cost}</span>
                <p className="text-xs text-white/30 mt-0.5">{p.costLabel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-blue-600/5 p-7 sm:p-8 text-center">
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Defend is built on a different principle:{" "}
            <span className="text-white font-bold">
              you pay once, and that&apos;s it.
            </span>{" "}
            No subscriptions. No cloud access fees. No monitoring contracts. Professional installation and AI that works — permanently.
          </p>
        </div>
      </div>
    </section>
  );
}

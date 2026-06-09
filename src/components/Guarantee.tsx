import { ShieldCheck, RefreshCw, Phone, Clock } from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "12-Month Break-In Guarantee",
    description:
      "If your home is broken into within 12 months of installation while your cameras are online, we'll refund your full installation cost. No questions asked.",
    bold: true,
  },
  {
    icon: RefreshCw,
    title: "12-Month Hardware Warranty",
    description:
      "Every camera is covered for 12 months. If anything fails due to a manufacturing fault, we'll replace it free of charge.",
    bold: false,
  },
  {
    icon: Phone,
    title: "Local Support",
    description:
      "You get a direct number. Not a call centre. If something isn't working, a real person who fitted your cameras will pick up.",
    bold: false,
  },
  {
    icon: Clock,
    title: "Free Survey, No Commitment",
    description:
      "We visit, we assess, we quote. You decide. No pressure, no deposit, no obligation until you're happy to go ahead.",
    bold: false,
  },
];

export default function Guarantee() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/3 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Our Promises
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            We back it with a guarantee
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Ring and Nest don&apos;t offer this. Neither do most local
            installers. We do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {promises.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className={`rounded-2xl p-7 border flex gap-5 ${
                  p.bold
                    ? "border-blue-500/40 bg-gradient-to-br from-blue-600/15 to-blue-600/5"
                    : "border-white/8 bg-white/3"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    p.bold
                      ? "bg-blue-600/30 border border-blue-500/40"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      p.bold ? "text-blue-400" : "text-white/40"
                    }`}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-white text-sm">
                      {p.title}
                    </h3>
                    {p.bold && (
                      <span className="text-[10px] font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                        Industry first
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/3 px-6 py-5 text-center">
          <p className="text-xs text-white/30 max-w-2xl mx-auto leading-relaxed">
            The break-in guarantee applies when cameras are properly installed, powered, connected to Wi-Fi, and the eufy app is active on your phone. Full terms provided at point of installation.
          </p>
        </div>
      </div>
    </section>
  );
}

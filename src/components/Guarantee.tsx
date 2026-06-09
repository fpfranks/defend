import { RefreshCw, Phone, Clock } from "lucide-react";

const promises = [
  {
    icon: RefreshCw,
    title: "12-Month Manufacturer Warranty",
    description:
      "Every camera carries eufy's standard 12-month manufacturer warranty. If anything fails due to a manufacturing fault, we handle the return and replacement for you — no hassle.",
  },
  {
    icon: Phone,
    title: "Local Support",
    description:
      "You get a direct number. Not a call centre. If something isn't working, a real person who fitted your cameras will pick up.",
  },
  {
    icon: Clock,
    title: "Free Survey, No Commitment",
    description:
      "We visit, we assess, we quote. You decide. No pressure, no deposit, no obligation until you're happy to go ahead.",
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
            What you can count on
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Backed by eufy's manufacturer warranty and a personal service most installers won't offer.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {promises.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl p-7 border border-white/8 bg-white/3 flex gap-5"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-white/5 border border-white/10">
                  <Icon className="w-5 h-5 text-white/40" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {p.description}
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

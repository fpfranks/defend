import { RefreshCw, Phone, Clock, ShieldCheck } from "lucide-react";

const promises = [
  {
    icon: ShieldCheck,
    title: "12-Month Manufacturer Warranty",
    description:
      "Every camera carries eufy's 12-month manufacturer warranty. If anything fails due to a manufacturing fault, we handle the return and replacement for you — you don't need to contact eufy directly.",
  },
  {
    icon: Phone,
    title: "Direct Local Support",
    description:
      "You get a direct number. Not a call centre. A real person who fitted your cameras, knows your property, and will pick up when you call.",
  },
  {
    icon: Clock,
    title: "Free Survey, Zero Commitment",
    description:
      "We visit, assess, and quote — you decide. No deposit. No pressure. No obligation until you're ready to go ahead. If you don't like the quote, you owe us nothing.",
  },
  {
    icon: RefreshCw,
    title: "Satisfaction Guaranteed",
    description:
      "We won't leave until the system is working correctly, the app is set up on your phone, and you're confident using it. If something isn't right, we come back and fix it.",
  },
];

export default function Guarantee() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/3 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Risk Reversal
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            You&apos;re covered. Full stop.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Spending £500–£1,000 on home security is a real decision. We&apos;ve removed every reason not to go ahead.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {promises.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-2xl p-7 border border-blue-500/20 bg-blue-600/5 flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-blue-600/20 border border-blue-500/30">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-2">{p.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-white/8 bg-white/3 p-6 text-center">
          <p className="text-sm text-white/50 max-w-2xl mx-auto">
            Not happy after installation? We&apos;ll return and make it right at no charge.{" "}
            <span className="text-white/70 font-medium">
              We stand behind every install.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

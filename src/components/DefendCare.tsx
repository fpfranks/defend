import { CalendarCheck, Wrench, Shield, Phone } from "lucide-react";

const perks = [
  {
    icon: CalendarCheck,
    title: "Annual Camera Health Check",
    description:
      "We come out once a year, check everything is running, clean the solar panels, and verify your footage is saving correctly.",
  },
  {
    icon: Wrench,
    title: "Priority Fault Response",
    description:
      "If something goes wrong, Care customers jump the queue. We aim to attend within 48 hours — not weeks.",
  },
  {
    icon: Shield,
    title: "Warranty Claim Handling",
    description:
      "If a camera develops a fault, we deal with the eufy return process on your behalf. You don't have to touch it.",
  },
  {
    icon: Phone,
    title: "Dedicated Support Line",
    description:
      "Direct number to your installer. Not a call centre. A real person who knows your property and your setup.",
  },
];

export default function DefendCare() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/4 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Optional Add-On
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Defend Care
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Your cameras are built to run themselves. Care is for people who want
            someone looking after the whole thing for them — permanently.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Perks list */}
          <div className="grid sm:grid-cols-2 gap-4">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-white/8 bg-white/3 p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-white/45 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Pricing card */}
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-blue-600/3 p-8">
            <div className="mb-6">
              <p className="text-xs text-blue-400 font-medium uppercase tracking-widest mb-4">
                Defend Care Plan
              </p>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-bold text-white">£59</span>
                <span className="text-white/40 text-sm mb-2">/ year</span>
              </div>
              <p className="text-white/35 text-xs">
                That&apos;s £4.92/month — less than a takeaway coffee.
              </p>
            </div>

            <div className="border-t border-white/8 pt-6 mb-6">
              <p className="text-xs text-white/40 mb-4 uppercase tracking-widest">
                Compare to competition
              </p>
              <div className="space-y-2.5">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Ring Protect Plus</span>
                  <span className="text-white/70 font-medium">£100/yr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Google Nest Aware Plus</span>
                  <span className="text-white/70 font-medium">£96/yr</span>
                </div>
                <div className="flex justify-between text-sm border-t border-white/8 pt-2.5">
                  <span className="text-blue-400 font-medium">Defend Care</span>
                  <span className="text-blue-400 font-bold">£59/yr</span>
                </div>
              </div>
              <p className="text-xs text-white/30 mt-2">
                Ring and Nest&apos;s fees are just for cloud storage — you get
                nothing physical. Defend Care includes a real visit.
              </p>
            </div>

            <a
              href="#contact"
              className="block text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Add Defend Care — £59/yr
            </a>
            <p className="text-xs text-white/25 text-center mt-3">
              Available to add at point of installation or any time after.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Phone, MapPin, Shield, Star } from "lucide-react";

const cards = [
  {
    icon: Phone,
    title: "Answers the phone",
    description:
      "Not a call centre. A local person who fitted your cameras and knows your setup.",
  },
  {
    icon: MapPin,
    title: "Same-day response",
    description:
      "Something not working? We're local. We can be there the same day, not in a week.",
  },
  {
    icon: Shield,
    title: "Your data stays local",
    description:
      "Ring stores your footage on Amazon servers. Your Defend footage never leaves your home.",
  },
  {
    icon: Star,
    title: "Real reviews, real neighbours",
    description:
      "Check our Google reviews — they're from people in your area, not a call centre rating.",
  },
];

export default function WhyLocal() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Local Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why local beats the big brands
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            National companies can&apos;t give you this
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl p-6 border border-white/8 bg-white/3 transition-all hover:scale-[1.02] hover:border-white/15"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-white/5 border border-white/10">
                  <Icon className="w-4.5 h-4.5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

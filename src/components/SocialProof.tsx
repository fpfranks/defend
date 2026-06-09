import { Star, Clock, ShieldCheck, MapPin } from "lucide-react";

const stats = [
  { icon: Star, value: "5.0", label: "Customer rating", sub: "from verified installs" },
  { icon: Clock, value: "48hrs", label: "Booking to installed", sub: "same-week available" },
  { icon: ShieldCheck, value: "£0/mo", label: "Monthly fees — ever", sub: "not a penny after day one" },
  { icon: MapPin, value: "Local", label: "UK-based installer", sub: "answers the phone" },
];

const areas = ["Sheffield", "Leeds", "Manchester", "Barnsley", "Rotherham", "Doncaster"];

export default function SocialProof() {
  return (
    <section className="py-14 border-y border-white/5 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Star row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-12 text-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-white font-semibold text-sm">Rated 5.0 by customers across</span>
          <span className="text-white/35 text-sm">{areas.join(" · ")}</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label}>
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-2xl sm:text-3xl font-bold text-white">{s.value}</span>
                </div>
                <p className="text-sm text-white/55 font-medium">{s.label}</p>
                <p className="text-xs text-white/25 mt-0.5">{s.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

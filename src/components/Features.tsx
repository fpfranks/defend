import {
  Brain,
  Sun,
  HardDrive,
  Bell,
  Eye,
  Volume2,
  Users,
  Car,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Behaviour Detection",
    description:
      "AI scores every visitor by behaviour — loitering, checking windows, returning multiple times. Not just motion.",
    highlight: true,
  },
  {
    icon: Eye,
    title: "Face Recognition",
    description:
      "Learns your family, neighbours, and regular delivery drivers. Only alerts for genuine strangers.",
    highlight: false,
  },
  {
    icon: Volume2,
    title: "Auto Voice Deterrence",
    description:
      'When a threat is detected, lights activate and an AI voice plays: "You are being recorded." Before anything happens.',
    highlight: true,
  },
  {
    icon: Sun,
    title: "Solar Powered",
    description:
      "No wiring needed. Solar panels keep cameras charged year-round, including UK winters.",
    highlight: false,
  },
  {
    icon: HardDrive,
    title: "100% Local Storage",
    description:
      "All footage stored on-site. No cloud. No data sent to Amazon or Google. Your footage stays yours.",
    highlight: false,
  },
  {
    icon: Bell,
    title: "Instant Phone Alerts",
    description:
      "Real-time notifications with a photo clip the moment a person is detected. Works anywhere in the world.",
    highlight: false,
  },
  {
    icon: Car,
    title: "Vehicle Detection",
    description:
      "Detects and logs vehicles. Alerts when an unknown car stops outside or circles the street.",
    highlight: false,
  },
  {
    icon: Users,
    title: "Neighbourhood Mesh",
    description:
      "Connect with nearby Defend customers. A suspicious person near one home silently alerts all connected homes.",
    highlight: true,
  },
  {
    icon: TrendingUp,
    title: "Pays For Itself",
    description:
      "Ring costs £100+/year in subscriptions. Defend costs once. In 3 years you're £300 ahead and still fully protected.",
    highlight: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            AI Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Active defence, not passive recording
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Ring and Nest record what happened. Defend prevents it from
            happening.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`rounded-2xl p-6 border transition-all hover:scale-[1.02] ${
                  f.highlight
                    ? "border-blue-500/30 bg-blue-600/10 hover:bg-blue-600/15"
                    : "border-white/8 bg-white/3 hover:border-white/15"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    f.highlight
                      ? "bg-blue-600/30 border border-blue-500/40"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <Icon
                    className={`w-4.5 h-4.5 ${
                      f.highlight ? "text-blue-400" : "text-white/50"
                    }`}
                  />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-white/45 leading-relaxed">
                  {f.description}
                </p>
                {f.highlight && (
                  <span className="inline-block mt-3 text-[10px] font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                    Unique to Defend
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

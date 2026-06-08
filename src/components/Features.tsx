import {
  Sun,
  HardDrive,
  Bell,
  Eye,
  Volume2,
  ZoomIn,
  RotateCcw,
  Moon,
  TrendingUp,
  Mic,
} from "lucide-react";

const features = [
  {
    icon: RotateCcw,
    title: "360° No Blind Spots",
    description:
      "355° pan and 70° tilt. The SoloCam S340 covers your entire property from one mount point — no gaps, no hidden angles.",
    highlight: true,
  },
  {
    icon: ZoomIn,
    title: "8× Hybrid Zoom",
    description:
      "Dual lens — 3K wide angle and 2K telephoto simultaneously. Read a number plate or identify a face from 12 metres away.",
    highlight: true,
  },
  {
    icon: Sun,
    title: "Self-Sufficient Solar",
    description:
      "2.2W solar panel keeps the camera fully charged year-round. Completely self-sufficient — no cables, no charging, no intervention needed day to day.",
    highlight: false,
  },
  {
    icon: HardDrive,
    title: "Built-In 8GB Storage",
    description:
      "Footage stored directly on the camera. No SD card needed, no cloud, no monthly fee. Your recordings stay at your home.",
    highlight: false,
  },
  {
    icon: Eye,
    title: "Local AI Detection",
    description:
      "Person and vehicle detection runs on the camera itself — no internet required. Only alerts for what matters.",
    highlight: false,
  },
  {
    icon: Moon,
    title: "Colour Night Vision",
    description:
      "Built-in spotlight activates on detection, delivering full-colour footage in complete darkness — not just grey infrared.",
    highlight: false,
  },
  {
    icon: Bell,
    title: "Instant Phone Alerts",
    description:
      "Real-time notification with a video clip the moment a person or vehicle is detected — anywhere in the world.",
    highlight: false,
  },
  {
    icon: Mic,
    title: "Two-Way Audio",
    description:
      "Speak directly to whoever is at your property through the eufy app. Deter intruders or talk to delivery drivers.",
    highlight: false,
  },
  {
    icon: Volume2,
    title: "Works with Alexa & Google",
    description:
      "Ask Alexa or Google to show your camera feed on any smart display. Full smart home integration included.",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "Pays For Itself",
    description:
      "Ring costs £100+/year in subscriptions. The SoloCam S340 is one price, forever. In 3 years you're £300 ahead.",
    highlight: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            eufy SoloCam S340
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything in one camera
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            The SoloCam S340 is the only camera you need — dual lens, solar
            powered, AI detection, local storage. No subscriptions. Ever.
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
                    Standout feature
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

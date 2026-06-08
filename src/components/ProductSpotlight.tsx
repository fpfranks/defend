import { Check, ExternalLink } from "lucide-react";

const specs = [
  { label: "Resolution", value: "3K Wide + 2K Telephoto (dual lens)" },
  { label: "Zoom", value: "8× Hybrid Zoom" },
  { label: "Pan / Tilt", value: "355° horizontal · 70° vertical" },
  { label: "Field of View", value: "135°" },
  { label: "Night Vision", value: "Full colour with built-in spotlight" },
  { label: "Storage", value: "8GB built-in — no SD card, no cloud" },
  { label: "Power", value: "2.2W solar panel — forever charge in sunlight" },
  { label: "Battery backup", value: "3 months standalone without sun" },
  { label: "Detection", value: "Person & vehicle (runs locally on camera)" },
  { label: "Audio", value: "Two-way microphone + speaker" },
  { label: "Wi-Fi", value: "2.4GHz — connects to home router" },
  { label: "Monthly fee", value: "£0 — local storage, no subscription" },
];

const included = [
  "Full 360° property coverage from one mount",
  "Colour night vision — see clearly in the dark",
  "Solar charged — no cables, no maintenance",
  "AI detects people and vehicles, ignores animals",
  "8× zoom — identify faces and number plates",
  "Works with Alexa and Google Home",
  "No monthly fee, no cloud, your data stays home",
];

export default function ProductSpotlight() {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            The Camera We Use
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            eufy SoloCam S340
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            One camera. Dual lens. Full 360°. Solar powered. No subscription.
            We only install this — because it&apos;s the best.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Specs table */}
          <div className="rounded-2xl border border-white/8 overflow-hidden">
            <div className="bg-white/3 px-6 py-4 border-b border-white/8">
              <h3 className="font-semibold text-white text-sm">
                Full Specifications
              </h3>
            </div>
            <div className="divide-y divide-white/5">
              {specs.map((s) => (
                <div key={s.label} className="flex px-6 py-3 gap-4">
                  <span className="text-xs text-white/40 w-28 shrink-0 pt-0.5">
                    {s.label}
                  </span>
                  <span className="text-xs text-white/80 leading-relaxed">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-6">
            {/* What's included */}
            <div className="rounded-2xl border border-blue-500/30 bg-blue-600/5 p-6">
              <h3 className="font-semibold text-white mb-4 text-sm">
                What you get with every camera
              </h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-white/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price card */}
            <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-white/40 mb-1">
                    Camera retail price
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">£121</span>
                    <span className="text-white/40 text-sm mb-1">
                      per camera
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/40 mb-1">
                    Including installation
                  </p>
                  <p className="text-lg font-bold text-blue-400">
                    from £229 fitted
                  </p>
                </div>
              </div>
              <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                <p className="text-xs text-white/35">
                  Installation, setup + app configuration included
                </p>
                <a
                  href="#pricing"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  See packages
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Why only one product */}
            <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
              <h3 className="font-semibold text-white mb-2 text-sm">
                Why we only use this camera
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Most installers sell whatever earns the highest margin. We
                tested the market and chose the SoloCam S340 because it covers
                the whole property from one point, runs on solar, stores locally
                with no fees, and has the best AI detection without a
                subscription. One product, done right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

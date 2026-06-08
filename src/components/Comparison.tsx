import { Check, X } from "lucide-react";

const rows = [
  {
    feature: "Monthly subscription fee",
    defend: false,
    ring: true,
    nest: true,
  },
  {
    feature: "Solar powered — no cables",
    defend: true,
    ring: false,
    nest: false,
  },
  {
    feature: "Local storage (no cloud)",
    defend: true,
    ring: false,
    nest: false,
  },
  {
    feature: "Person & vehicle AI detection",
    defend: true,
    ring: true,
    nest: true,
  },
  {
    feature: "Colour night vision",
    defend: true,
    ring: false,
    nest: false,
  },
  {
    feature: "360° pan & tilt coverage",
    defend: true,
    ring: false,
    nest: false,
  },
  {
    feature: "8× zoom dual lens",
    defend: true,
    ring: false,
    nest: false,
  },
  {
    feature: "Your data stored on their servers",
    defend: false,
    ring: true,
    nest: true,
  },
  {
    feature: "Professional installation included",
    defend: true,
    ring: false,
    nest: false,
  },
  {
    feature: "Local installer, answers phone",
    defend: true,
    ring: false,
    nest: false,
  },
];

function Cell({
  value,
  isDefend = false,
}: {
  value: boolean;
  isDefend?: boolean;
}) {
  if (value) {
    return (
      <div className="flex justify-center">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center ${
            isDefend
              ? "bg-blue-600/30 border border-blue-500/50"
              : "bg-green-600/20 border border-green-500/30"
          }`}
        >
          <Check
            className={`w-3.5 h-3.5 ${
              isDefend ? "text-blue-400" : "text-green-400"
            }`}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-red-600/10 border border-red-500/20">
        <X className="w-3.5 h-3.5 text-red-400/60" />
      </div>
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Why Defend
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Not all cameras are equal
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            The big brands lock features behind subscriptions and store your
            footage on their servers. Defend doesn&apos;t.
          </p>
        </div>

        <div className="rounded-2xl border border-white/8 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 bg-white/3 border-b border-white/8">
            <div className="p-4 text-sm text-white/40 font-medium">
              Feature
            </div>
            <div className="p-4 text-center">
              <div className="text-sm font-bold text-blue-400">Defend</div>
              <div className="text-xs text-white/30">One-time price</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-sm font-medium text-white/60">Ring</div>
              <div className="text-xs text-white/30">£10/mo</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-sm font-medium text-white/60">Nest</div>
              <div className="text-xs text-white/30">£8/mo</div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 border-b border-white/5 last:border-0 ${
                i % 2 === 0 ? "bg-transparent" : "bg-white/[0.01]"
              }`}
            >
              <div className="p-4 text-sm text-white/60 flex items-center">
                {row.feature}
              </div>
              <div className="p-4 flex items-center justify-center">
                <Cell value={row.defend} isDefend />
              </div>
              <div className="p-4 flex items-center justify-center">
                <Cell value={row.ring} />
              </div>
              <div className="p-4 flex items-center justify-center">
                <Cell value={row.nest} />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/25 mt-4">
          Ring Protect Plus £100/yr. Google Nest Aware Plus £96/yr. Defend: £0/yr forever.
        </p>
      </div>
    </section>
  );
}

const stats = [
  {
    number: "245,284",
    label: "Burglaries in England & Wales last year",
    sub: "That's one every 2 minutes",
  },
  {
    number: "70%",
    label: "Enter through the front door",
    sub: "A visible camera deters most",
  },
  {
    number: "33%",
    label: "Happen while someone is home",
    sub: "Real-time alerts are critical",
  },
  {
    number: "£3,030",
    label: "Average cost of a burglary to the victim",
    sub: "Defend pays for itself after one incident",
  },
];

export default function CrimeStats() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            The Reality
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            UK burglary by the numbers
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Most people think &quot;it won&apos;t happen to me&quot; — until it
            does.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/8 bg-white/3 p-6 text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {s.number}
              </div>
              <div className="text-sm text-white/70 font-medium mb-1">
                {s.label}
              </div>
              <div className="text-xs text-white/35">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-600/5 p-6 sm:p-8 text-center">
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto">
            Ring and Nest record what happened.{" "}
            <span className="text-white font-semibold">
              Defend stops it before it starts.
            </span>{" "}
            AI behaviour detection, automatic deterrence, and instant alerts —
            all without a single monthly fee.
          </p>
        </div>
      </div>
    </section>
  );
}

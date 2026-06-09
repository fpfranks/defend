import { Sun, HardDrive, Shield, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-blue-600/8 blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        {/* Social proof badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium mb-8">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span>Rated 5.0 · Sheffield, Leeds &amp; Manchester</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
          Professional Home Security.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            No Monthly Fees.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto mb-4 leading-relaxed">
          AI-powered solar cameras installed by a local expert. One-time payment. Your footage stays at your home — not on Amazon or Google&apos;s servers.
        </p>

        <p className="text-sm text-white/35 mb-12">
          From{" "}
          <strong className="text-white/65 font-semibold">£229 fully fitted</strong>
          {" "}· Free home survey · Same-week installation available
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#contact"
            className="px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] active:scale-[0.98]"
          >
            Book a Free Survey →
          </a>
          <a
            href="#how-it-works"
            className="px-10 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-colors"
          >
            How It Works
          </a>
        </div>

        {/* Trust items */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            { icon: Shield, text: "Free survey — no obligation" },
            { icon: Sun, text: "Solar powered — zero running costs" },
            { icon: HardDrive, text: "Local storage — your data stays home" },
            { icon: Shield, text: "Fully insured" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-white/55">
              <Icon className="w-4 h-4 text-blue-400/70" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

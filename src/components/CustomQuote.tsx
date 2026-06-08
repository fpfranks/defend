"use client";

import { useState } from "react";
import { Minus, Plus, Camera, Clock, PoundSterling, TrendingDown } from "lucide-react";

const CAMERA_PRICE = 121;
const BASE_INSTALL = 108;
const EXTRA_INSTALL = 49;
const RING_MONTHLY = 10;

function calcTotal(n: number) {
  const hardware = CAMERA_PRICE * n;
  const install = BASE_INSTALL + (n - 1) * EXTRA_INSTALL;
  return { hardware, install, total: hardware + install };
}

function installTime(n: number) {
  const mins = 60 + (n - 1) * 30;
  if (mins < 60) return `${mins} mins`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}hr ${m}min` : `${h} hr`;
}

export default function CustomQuote() {
  const [count, setCount] = useState(2);
  const { hardware, install, total } = calcTotal(count);
  const ringYear1 = RING_MONTHLY * 12;
  const ringYear3 = RING_MONTHLY * 36;

  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/3 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Custom Quote
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How many cameras do you need?
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Pick your number and see your exact price — hardware and
            installation included. No hidden costs.
          </p>
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/3 p-8 sm:p-10">
          {/* Camera stepper */}
          <div className="flex flex-col items-center mb-10">
            <p className="text-xs text-white/40 mb-4 uppercase tracking-widest">
              Number of cameras
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setCount((c) => Math.max(1, c - 1))}
                className="w-12 h-12 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:border-white/30 disabled:opacity-30"
                disabled={count === 1}
                aria-label="Remove camera"
              >
                <Minus className="w-4 h-4 text-white" />
              </button>

              <div className="text-center">
                <span className="text-7xl font-bold text-white tabular-nums">
                  {count}
                </span>
                <p className="text-white/30 text-xs mt-1">
                  {count === 1 ? "camera" : "cameras"}
                </p>
              </div>

              <button
                onClick={() => setCount((c) => Math.min(8, c + 1))}
                className="w-12 h-12 rounded-full border border-blue-500/40 bg-blue-600/20 hover:bg-blue-600/30 flex items-center justify-center transition-all hover:border-blue-500/60 disabled:opacity-30"
                disabled={count === 8}
                aria-label="Add camera"
              >
                <Plus className="w-4 h-4 text-blue-400" />
              </button>
            </div>

            {/* Camera icons */}
            <div className="flex gap-2 mt-6 flex-wrap justify-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    i < count
                      ? "bg-blue-600/30 border border-blue-500/50"
                      : "bg-white/3 border border-white/8"
                  }`}
                >
                  <Camera
                    className={`w-3.5 h-3.5 ${
                      i < count ? "text-blue-400" : "text-white/15"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Price breakdown */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {/* Left: breakdown */}
            <div className="space-y-3">
              <h3 className="text-xs text-white/40 uppercase tracking-widest mb-4">
                Price breakdown
              </h3>

              <div className="flex items-center justify-between py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-white/30" />
                  <span className="text-sm text-white/60">
                    eufy SoloCam S340 × {count}
                  </span>
                </div>
                <span className="text-sm text-white font-medium">
                  £{hardware}
                </span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-white/30" />
                  <span className="text-sm text-white/60">
                    Installation & setup
                  </span>
                </div>
                <span className="text-sm text-white font-medium">
                  £{install}
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2">
                  <PoundSterling className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-sm font-semibold text-white">
                    Total (one-time)
                  </span>
                </div>
                <span className="text-xl font-bold text-blue-400">
                  £{total}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-white/25" />
                <span className="text-xs text-white/35">
                  Install time: approx {installTime(count)}
                </span>
              </div>
            </div>

            {/* Right: savings vs Ring */}
            <div className="rounded-xl border border-green-500/20 bg-green-600/5 p-5">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-4 h-4 text-green-400" />
                <h3 className="text-xs text-green-400 uppercase tracking-widest font-medium">
                  Vs Ring subscription
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-xs text-white/50">
                    Ring Protect Plus (year 1)
                  </span>
                  <span className="text-xs text-red-400">
                    +£{ringYear1}/yr
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-white/50">
                    Ring cost over 3 years
                  </span>
                  <span className="text-xs text-red-400">
                    +£{ringYear3} extra
                  </span>
                </div>
                <div className="border-t border-white/8 pt-3 flex justify-between">
                  <span className="text-xs text-white/70 font-medium">
                    You save over 3 years
                  </span>
                  <span className="text-sm font-bold text-green-400">
                    £{ringYear3}
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-white/25 mt-3 leading-relaxed">
                Ring Protect Plus at £{RING_MONTHLY}/mo. Defend has zero monthly
                fees — ever.
              </p>
            </div>
          </div>

          {/* Install cost context */}
          <div className="rounded-xl border border-white/8 bg-white/3 px-5 py-4 mb-8">
            <div className="flex flex-wrap gap-4 sm:gap-8 justify-center text-center">
              <div>
                <p className="text-xs text-white/35 mb-1">Hardware per camera</p>
                <p className="text-sm font-semibold text-white">£{CAMERA_PRICE}</p>
              </div>
              <div className="hidden sm:block w-px bg-white/8" />
              <div>
                <p className="text-xs text-white/35 mb-1">Installation (first camera)</p>
                <p className="text-sm font-semibold text-white">£{BASE_INSTALL}</p>
              </div>
              <div className="hidden sm:block w-px bg-white/8" />
              <div>
                <p className="text-xs text-white/35 mb-1">Each additional camera</p>
                <p className="text-sm font-semibold text-white">£{EXTRA_INSTALL} install</p>
              </div>
              <div className="hidden sm:block w-px bg-white/8" />
              <div>
                <p className="text-xs text-white/35 mb-1">UK average install rate</p>
                <p className="text-sm font-semibold text-white/40 line-through">£100–300/cam</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="flex-1 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm text-center transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Book Free Survey — {count} {count === 1 ? "Camera" : "Cameras"} · £{total}
            </a>
            <a
              href="#contact"
              className="flex-1 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm text-center transition-colors"
            >
              Not sure? Book a free survey first
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

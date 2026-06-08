"use client";

const months = ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"];

const worst  = [900,  900,  1800, 2700, 3600, 3600];
const expected = [1500, 2280, 4560, 4560, 5700, 5700];
const best   = [2400, 4800, 7200, 8400, 8400, 9600];

const MAX_VALUE = 9600;
const BAR_MAX_PX = 120;

function pct(val: number) {
  return Math.round((val / MAX_VALUE) * BAR_MAX_PX);
}

function fmt(val: number) {
  return `£${val.toLocaleString("en-GB")}`;
}

interface BarGroupProps {
  month: string;
  w: number;
  e: number;
  b: number;
}

function BarGroup({ month, w, e, b }: BarGroupProps) {
  return (
    <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
      {/* Labels above bars */}
      <div className="flex gap-1 items-end mb-1" style={{ height: `${BAR_MAX_PX + 40}px` }}>
        {/* Worst */}
        <div className="flex flex-col items-center justify-end gap-1" style={{ height: "100%" }}>
          <span className="text-[9px] text-red-400 font-medium leading-none rotate-0 whitespace-nowrap">
            {fmt(w)}
          </span>
          <div
            className="w-5 rounded-t bg-red-500/70"
            style={{ height: `${pct(w)}px` }}
          />
        </div>
        {/* Expected */}
        <div className="flex flex-col items-center justify-end gap-1" style={{ height: "100%" }}>
          <span className="text-[9px] text-blue-400 font-medium leading-none whitespace-nowrap">
            {fmt(e)}
          </span>
          <div
            className="w-5 rounded-t bg-blue-500/80"
            style={{ height: `${pct(e)}px` }}
          />
        </div>
        {/* Best */}
        <div className="flex flex-col items-center justify-end gap-1" style={{ height: "100%" }}>
          <span className="text-[9px] text-green-400 font-medium leading-none whitespace-nowrap">
            {fmt(b)}
          </span>
          <div
            className="w-5 rounded-t bg-green-500/70"
            style={{ height: `${pct(b)}px` }}
          />
        </div>
      </div>
      <p className="text-xs text-white/40 text-center leading-tight">{month}</p>
    </div>
  );
}

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
      <div className="mb-1">
        <h2 className="text-base font-semibold text-white">Monthly Revenue Forecast</h2>
        <p className="text-xs text-white/40 mt-0.5">
          Based on expected 12 jobs/month at £380 average
        </p>
      </div>

      <div className="mt-6 flex gap-2 sm:gap-4 items-end">
        {months.map((month, i) => (
          <BarGroup
            key={month}
            month={month}
            w={worst[i]}
            e={expected[i]}
            b={best[i]}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="mt-5 flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-red-500/70" />
          <span className="text-xs text-white/50">Worst Case</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500/80" />
          <span className="text-xs text-white/50">Expected</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500/70" />
          <span className="text-xs text-white/50">Best Case</span>
        </div>
      </div>
    </div>
  );
}

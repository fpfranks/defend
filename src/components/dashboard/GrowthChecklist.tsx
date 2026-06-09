"use client";

import { useState, useEffect } from "react";

interface CheckItem {
  id: string;
  label: string;
}

const thirtyDay: CheckItem[] = [
  { id: "30-1", label: "Register self-employed with HMRC" },
  { id: "30-2", label: "Get public liability insurance (Simply Business)" },
  { id: "30-3", label: "Buy starter kit — eufy SoloCam S340" },
  { id: "30-4", label: "Install at own home, film the process" },
  { id: "30-5", label: "Set up Google Business Profile" },
  { id: "30-6", label: "Post on local Facebook groups + Nextdoor" },
  { id: "30-7", label: "Get first paying customer" },
  { id: "30-8", label: "Leave 10 referral cards with first customer" },
];

const ninetyDay: CheckItem[] = [
  { id: "90-1", label: "Complete 15+ installs" },
  { id: "90-2", label: "Reach 10 Google reviews" },
  { id: "90-3", label: "List on Checkatrade or Bark.com" },
  { id: "90-4", label: "Add video doorbell as standard upsell" },
  { id: "90-5", label: "First landlord account (multiple properties)" },
  { id: "90-6", label: "Run first leaflet drop (500 leaflets)" },
  { id: "90-7", label: "Average job value at £380+" },
  { id: "90-8", label: "Set up bookings via website" },
];

const STORAGE_KEY = "defend-checklist-v1";

function ProgressBar({ done, total }: { done: number; total: number }) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div className="h-1 w-full rounded-full bg-white/8 mt-2 mb-4 overflow-hidden">
      <div
        className="h-full rounded-full bg-blue-500 transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function ChecklistSection({ title, items, checked, onToggle }: {
  title: string;
  items: CheckItem[];
  checked: Set<string>;
  onToggle: (id: string) => void;
}) {
  const doneCount = items.filter((i) => checked.has(i.id)).length;
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          {title}
        </h3>
        <span className="text-xs text-white/30">
          {doneCount}/{items.length}
        </span>
      </div>
      <ProgressBar done={doneCount} total={items.length} />
      <ul className="space-y-3">
        {items.map((item) => {
          const isChecked = checked.has(item.id);
          return (
            <li key={item.id} className="flex items-center gap-3">
              <button
                type="button"
                role="checkbox"
                aria-checked={isChecked}
                onClick={() => onToggle(item.id)}
                className={`h-4 w-4 flex-shrink-0 rounded border transition-colors cursor-pointer flex items-center justify-center ${
                  isChecked
                    ? "bg-blue-600 border-blue-500"
                    : "bg-white/5 border-white/20 hover:border-white/40"
                }`}
              >
                {isChecked && (
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <span
                onClick={() => onToggle(item.id)}
                className={`text-sm cursor-pointer transition-colors select-none ${
                  isChecked ? "text-white/30 line-through" : "text-white/70 hover:text-white/90"
                }`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function GrowthChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(new Set(JSON.parse(saved)));
    } catch {}
  }, []);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {}
      return next;
    });
  }

  return (
    <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
      <h2 className="text-base font-semibold text-white mb-6">Growth Roadmap</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ChecklistSection
          title="30-Day Actions"
          items={thirtyDay}
          checked={checked}
          onToggle={toggle}
        />
        <ChecklistSection
          title="90-Day Actions"
          items={ninetyDay}
          checked={checked}
          onToggle={toggle}
        />
      </div>
    </div>
  );
}

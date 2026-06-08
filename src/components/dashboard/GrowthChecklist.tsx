"use client";

import { useState } from "react";

interface CheckItem {
  id: string;
  label: string;
}

const thirtyDay: CheckItem[] = [
  { id: "30-1", label: "Register self-employed with HMRC" },
  { id: "30-2", label: "Get public liability insurance (Simply Business)" },
  { id: "30-3", label: "Buy starter kit — Eufy SoloCam + Raspberry Pi" },
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

function ChecklistSection({ title, items, checked, onToggle }: {
  title: string;
  items: CheckItem[];
  checked: Set<string>;
  onToggle: (id: string) => void;
}) {
  const doneCount = items.filter((i) => checked.has(i.id)).length;
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
          {title}
        </h3>
        <span className="text-xs text-white/30">
          {doneCount}/{items.length}
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item) => {
          const isChecked = checked.has(item.id);
          return (
            <li key={item.id} className="flex items-center gap-3">
              <input
                type="checkbox"
                id={item.id}
                checked={isChecked}
                onChange={() => onToggle(item.id)}
                className="h-4 w-4 flex-shrink-0 rounded border-white/20 bg-white/5 accent-blue-500 cursor-pointer"
              />
              <label
                htmlFor={item.id}
                className={`text-sm cursor-pointer transition-colors ${
                  isChecked
                    ? "text-white/30 line-through"
                    : "text-white/70"
                }`}
              >
                {item.label}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function GrowthChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
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

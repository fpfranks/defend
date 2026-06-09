"use client";

import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import type { StoredLead } from "@/lib/leads-store";

type LeadStage = "Enquiry" | "Survey Booked" | "Quoted" | "Won" | "Lost";

interface Lead {
  name: string;
  location: string;
  cameras: number;
  value: string;
  stage: LeadStage;
  source: string;
  date: string;
}

const PKG_MAP: Record<string, { cameras: number; value: string }> = {
  starter: { cameras: 1, value: "£199" },
  home: { cameras: 2, value: "£399" },
  full: { cameras: 4, value: "£699" },
};

function storedToLead(s: StoredLead): Lead {
  const pkg = PKG_MAP[s.package] ?? { cameras: 0, value: "TBC" };
  return {
    name: s.name,
    location: s.postcode || "—",
    cameras: pkg.cameras,
    value: pkg.value,
    stage: "Enquiry",
    source: "Website Form",
    date: new Date(s.createdAt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    }),
  };
}

const stageOrder: LeadStage[] = ["Enquiry", "Survey Booked", "Quoted", "Won", "Lost"];

const stageMeta: Record<LeadStage, { color: string; bg: string }> = {
  Enquiry: { color: "text-white/60", bg: "bg-white/8" },
  "Survey Booked": { color: "text-blue-400", bg: "bg-blue-500/15" },
  Quoted: { color: "text-yellow-400", bg: "bg-yellow-500/15" },
  Won: { color: "text-green-400", bg: "bg-green-500/15" },
  Lost: { color: "text-red-400/70", bg: "bg-red-500/10" },
};

function StageBadge({ stage }: { stage: LeadStage }) {
  const meta = stageMeta[stage];
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${meta.bg} ${meta.color}`}>
      {stage}
    </span>
  );
}

export default function Pipeline() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<LeadStage | "All">("All");

  useEffect(() => {
    fetch("/api/leads")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data.leads)) {
          setLeads(data.leads.map(storedToLead));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = filter === "All" ? leads : leads.filter((l) => l.stage === filter);

  const wonValue = leads
    .filter((l) => l.stage === "Won")
    .reduce((sum, l) => sum + (parseFloat(l.value.replace("£", "")) || 0), 0);

  const pipelineValue = leads
    .filter((l) => l.stage !== "Lost")
    .reduce((sum, l) => sum + (parseFloat(l.value.replace("£", "")) || 0), 0);

  return (
    <div className="rounded-2xl border border-white/8 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 bg-white/3 border-b border-white/8">
        <h2 className="text-base font-semibold text-white">Lead Pipeline</h2>
        <button className="rounded-lg bg-blue-600 hover:bg-blue-500 px-3 py-1.5 text-xs font-medium text-white transition-colors">
          + Add Lead
        </button>
      </div>

      {/* Stage filter tabs */}
      <div className="flex gap-1 px-5 py-3 border-b border-white/8 overflow-x-auto">
        {(["All", ...stageOrder] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`shrink-0 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              filter === s
                ? "bg-blue-600 text-white"
                : "text-white/40 hover:text-white/70 hover:bg-white/5"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-14">
          <div className="w-5 h-5 border-2 border-white/15 border-t-blue-400 rounded-full animate-spin" />
        </div>
      ) : leads.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-4">
            <Users className="w-5 h-5 text-white/30" />
          </div>
          <p className="text-sm font-medium text-white/50 mb-1">No leads yet</p>
          <p className="text-xs text-white/30">
            Website enquiries will appear here automatically once the storage is connected.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Name</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Location</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Cameras</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Value</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Stage</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Source</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead, i) => (
                <tr
                  key={i}
                  className={`hover:bg-white/5 transition-colors ${i % 2 === 0 ? "bg-white/1" : "bg-transparent"}`}
                >
                  <td className="px-4 py-3 text-white/80 whitespace-nowrap font-medium">{lead.name}</td>
                  <td className="px-4 py-3 text-white/50 whitespace-nowrap">{lead.location}</td>
                  <td className="px-4 py-3 text-white/60">{lead.cameras || "—"}</td>
                  <td className="px-4 py-3 text-white/70 font-medium">{lead.value}</td>
                  <td className="px-4 py-3"><StageBadge stage={lead.stage} /></td>
                  <td className="px-4 py-3 text-white/40 text-xs">{lead.source}</td>
                  <td className="px-4 py-3 text-white/40 text-xs whitespace-nowrap">{lead.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="border-t border-white/8 bg-white/3 px-5 py-3">
        <p className="text-xs text-white/40">
          Pipeline value:{" "}
          <span className="text-white/70 font-medium">
            {pipelineValue > 0 ? `£${pipelineValue}` : "£0"}
          </span>
          {" "}|{" "}Won:{" "}
          <span className="text-white/70 font-medium">
            {wonValue > 0 ? `£${wonValue}` : "£0"}
          </span>
          {" "}|{" "}Leads:{" "}
          <span className="text-white/70 font-medium">{leads.length}</span>
        </p>
      </div>
    </div>
  );
}

"use client";

import { ClipboardList } from "lucide-react";

type Status = "Completed" | "Pending" | "Booked";

interface Job {
  date: string;
  customer: string;
  postcode: string;
  pkg: string;
  value: string;
  status: Status;
  profit: string;
}

const jobs: Job[] = [];

function StatusBadge({ status }: { status: Status }) {
  if (status === "Completed") {
    return (
      <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-400">
        Completed
      </span>
    );
  }
  if (status === "Booked") {
    return (
      <span className="rounded-full bg-blue-500/15 px-2 py-0.5 text-xs font-medium text-blue-400">
        Booked
      </span>
    );
  }
  return (
    <span className="rounded-full bg-yellow-500/15 px-2 py-0.5 text-xs font-medium text-yellow-400">
      Pending
    </span>
  );
}

export default function JobTracker() {
  const completed = jobs.filter((j) => j.status === "Completed");
  const totalRevenue = completed.reduce((sum, j) => {
    const n = parseFloat(j.value.replace("£", "")) || 0;
    return sum + n;
  }, 0);
  const totalProfit = completed.reduce((sum, j) => {
    const n = parseFloat(j.profit.replace("£", "")) || 0;
    return sum + n;
  }, 0);

  return (
    <div className="rounded-2xl border border-white/8 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-white/3 border-b border-white/8">
        <h2 className="text-base font-semibold text-white">Job Tracker</h2>
        <button className="rounded-lg bg-blue-600 hover:bg-blue-500 px-3 py-1.5 text-xs font-medium text-white transition-colors">
          + Add Job
        </button>
      </div>

      {jobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center mb-4">
            <ClipboardList className="w-5 h-5 text-white/30" />
          </div>
          <p className="text-sm font-medium text-white/50 mb-1">No jobs yet</p>
          <p className="text-xs text-white/30 mb-4">
            Log your first install to start tracking revenue and profit.
          </p>
          <button
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
            onClick={() => alert("Add job modal coming soon — use the + Add Job button above")}
          >
            + Log your first job
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-left">
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Date</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Customer</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Postcode</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Package</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Value</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Status</th>
                <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Profit</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => (
                <tr key={i} className={`hover:bg-white/5 transition-colors ${i % 2 === 0 ? "bg-white/1" : "bg-transparent"}`}>
                  <td className="px-4 py-3 text-white/60 whitespace-nowrap">{job.date || "—"}</td>
                  <td className="px-4 py-3 text-white/80 whitespace-nowrap">{job.customer}</td>
                  <td className="px-4 py-3 text-white/50">{job.postcode}</td>
                  <td className="px-4 py-3 text-white/50">{job.pkg}</td>
                  <td className="px-4 py-3 text-white/70 font-medium">{job.value}</td>
                  <td className="px-4 py-3"><StatusBadge status={job.status} /></td>
                  <td className="px-4 py-3 text-white/70 font-medium">{job.profit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Footer summary */}
      <div className="border-t border-white/8 bg-white/3 px-5 py-3">
        <p className="text-xs text-white/40">
          Total this month:{" "}
          <span className="text-white/70 font-medium">
            {totalRevenue > 0 ? `£${totalRevenue}` : "£0"}
          </span>
          {" "}|{" "}Profit:{" "}
          <span className="text-white/70 font-medium">
            {totalProfit > 0 ? `£${totalProfit}` : "£0"}
          </span>
          {" "}|{" "}Jobs:{" "}
          <span className="text-white/70 font-medium">{completed.length}</span>
        </p>
      </div>
    </div>
  );
}

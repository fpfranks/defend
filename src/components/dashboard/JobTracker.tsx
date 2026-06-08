"use client";

const TODAY = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

type Status = "Completed" | "Pending";

interface Job {
  date: string;
  customer: string;
  postcode: string;
  pkg: string;
  value: string;
  status: Status;
  profit: string;
}

const jobs: Job[] = [
  {
    date: TODAY,
    customer: "Demo Install",
    postcode: "Your postcode",
    pkg: "Starter",
    value: "£229",
    status: "Completed",
    profit: "£159",
  },
  {
    date: "",
    customer: "— Book via website —",
    postcode: "—",
    pkg: "—",
    value: "—",
    status: "Pending",
    profit: "—",
  },
  {
    date: "",
    customer: "— Book via website —",
    postcode: "—",
    pkg: "—",
    value: "—",
    status: "Pending",
    profit: "—",
  },
];

function StatusBadge({ status }: { status: Status }) {
  if (status === "Completed") {
    return (
      <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-400">
        Completed
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
  return (
    <div className="rounded-2xl border border-white/8 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-white/3 border-b border-white/8">
        <h2 className="text-base font-semibold text-white">Job Tracker</h2>
        <button className="rounded-lg bg-blue-600 hover:bg-blue-500 px-3 py-1.5 text-xs font-medium text-white transition-colors">
          + Add Job
        </button>
      </div>

      {/* Table */}
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
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white/1" : "bg-transparent"}
              >
                <td className="px-4 py-3 text-white/60 whitespace-nowrap">{job.date || "—"}</td>
                <td className="px-4 py-3 text-white/80 whitespace-nowrap">{job.customer}</td>
                <td className="px-4 py-3 text-white/50">{job.postcode}</td>
                <td className="px-4 py-3 text-white/50">{job.pkg}</td>
                <td className="px-4 py-3 text-white/70 font-medium">{job.value}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={job.status} />
                </td>
                <td className="px-4 py-3 text-white/70 font-medium">{job.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer summary */}
      <div className="border-t border-white/8 bg-white/3 px-5 py-3">
        <p className="text-xs text-white/40">
          Total this month:{" "}
          <span className="text-white/70 font-medium">£229</span>
          {" "}|{" "}Profit:{" "}
          <span className="text-white/70 font-medium">£159</span>
          {" "}|{" "}Jobs:{" "}
          <span className="text-white/70 font-medium">1</span>
        </p>
      </div>
    </div>
  );
}

"use client";

interface MatrixRow {
  rank: number;
  opportunity: string;
  revenueImpact: string;
  revenueLevel: "high" | "medium" | "specific";
  difficulty: string;
  difficultyLevel: "very-easy" | "easy" | "medium" | "hard";
  time: string;
  priority: string;
}

const rows: MatrixRow[] = [
  {
    rank: 1,
    opportunity: "Google Business Profile + reviews",
    revenueImpact: "High",
    revenueLevel: "high",
    difficulty: "Very Easy",
    difficultyLevel: "very-easy",
    time: "1 day",
    priority: "⭐⭐⭐⭐⭐",
  },
  {
    rank: 2,
    opportunity: "First 5 installs + photos",
    revenueImpact: "High",
    revenueLevel: "high",
    difficulty: "Easy",
    difficultyLevel: "easy",
    time: "2 weeks",
    priority: "⭐⭐⭐⭐⭐",
  },
  {
    rank: 3,
    opportunity: "Doorbell upsell on every job",
    revenueImpact: "+£65/job",
    revenueLevel: "specific",
    difficulty: "Very Easy",
    difficultyLevel: "very-easy",
    time: "Immediate",
    priority: "⭐⭐⭐⭐⭐",
  },
  {
    rank: 4,
    opportunity: "Checkatrade profile",
    revenueImpact: "Medium",
    revenueLevel: "medium",
    difficulty: "Easy",
    difficultyLevel: "easy",
    time: "1 day",
    priority: "⭐⭐⭐⭐",
  },
  {
    rank: 5,
    opportunity: "Landlord outreach",
    revenueImpact: "High",
    revenueLevel: "high",
    difficulty: "Medium",
    difficultyLevel: "medium",
    time: "Month 2",
    priority: "⭐⭐⭐⭐",
  },
  {
    rank: 6,
    opportunity: "Leaflet drop 500 homes",
    revenueImpact: "Medium",
    revenueLevel: "medium",
    difficulty: "Easy",
    difficultyLevel: "easy",
    time: "Week 2",
    priority: "⭐⭐⭐⭐",
  },
  {
    rank: 7,
    opportunity: "Google Ads £5/day",
    revenueImpact: "High",
    revenueLevel: "high",
    difficulty: "Medium",
    difficultyLevel: "medium",
    time: "Month 3",
    priority: "⭐⭐⭐",
  },
  {
    rank: 8,
    opportunity: "Referral scheme launch",
    revenueImpact: "High",
    revenueLevel: "high",
    difficulty: "Easy",
    difficultyLevel: "easy",
    time: "Month 2",
    priority: "⭐⭐⭐⭐",
  },
  {
    rank: 9,
    opportunity: "Floodlight camera add-on",
    revenueImpact: "Medium",
    revenueLevel: "medium",
    difficulty: "Easy",
    difficultyLevel: "easy",
    time: "Month 3",
    priority: "⭐⭐⭐",
  },
  {
    rank: 10,
    opportunity: "Premium Pi AI install tier",
    revenueImpact: "High",
    revenueLevel: "high",
    difficulty: "Hard",
    difficultyLevel: "hard",
    time: "Month 6",
    priority: "⭐⭐⭐",
  },
];

function revenueColor(level: MatrixRow["revenueLevel"]) {
  if (level === "high") return "text-green-400";
  if (level === "medium") return "text-yellow-400";
  return "text-blue-400";
}

function difficultyColor(level: MatrixRow["difficultyLevel"]) {
  if (level === "very-easy" || level === "easy") return "text-green-400";
  if (level === "medium") return "text-yellow-400";
  return "text-red-400";
}

export default function ActionMatrix() {
  return (
    <div className="rounded-2xl border border-white/8 overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 bg-white/3 border-b border-white/8">
        <h2 className="text-base font-semibold text-white">Action Matrix — Ranked by Priority</h2>
        <p className="text-xs text-white/40 mt-0.5">Focus on highest priority first</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr className="bg-white/5 text-left border-b border-white/5">
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40 w-10">#</th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Opportunity</th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Revenue Impact</th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Difficulty</th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Time</th>
              <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-white/40">Priority</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.rank}
                className={`border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? "bg-transparent" : "bg-white/2"}`}
              >
                <td className="px-4 py-3 text-white/30 font-medium">{row.rank}</td>
                <td className="px-4 py-3 text-white/80">{row.opportunity}</td>
                <td className={`px-4 py-3 font-medium ${revenueColor(row.revenueLevel)}`}>
                  {row.revenueImpact}
                </td>
                <td className={`px-4 py-3 ${difficultyColor(row.difficultyLevel)}`}>
                  {row.difficulty}
                </td>
                <td className="px-4 py-3 text-white/50">{row.time}</td>
                <td className="px-4 py-3 tracking-tight">{row.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

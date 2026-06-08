"use client";

import { Briefcase, PoundSterling, TrendingUp, Star } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "blue" | "green" | "purple" | "yellow";
}

const colorMap = {
  blue: {
    ring: "bg-blue-500/20",
    icon: "text-blue-400",
  },
  green: {
    ring: "bg-green-500/20",
    icon: "text-green-400",
  },
  purple: {
    ring: "bg-purple-500/20",
    icon: "text-purple-400",
  },
  yellow: {
    ring: "bg-yellow-500/20",
    icon: "text-yellow-400",
  },
};

function StatCard({ label, value, subtext, icon: Icon, color }: StatCardProps) {
  const colors = colorMap[color];
  return (
    <div className="relative rounded-2xl border border-white/8 bg-white/3 p-6">
      <div className={`absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full ${colors.ring}`}>
        <Icon className={`h-4 w-4 ${colors.icon}`} />
      </div>
      <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-3">{label}</p>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-xs text-white/40">{subtext}</p>
    </div>
  );
}

export default function StatsRow() {
  const stats: StatCardProps[] = [
    {
      label: "Jobs This Month",
      value: 0,
      subtext: "Target: 12",
      icon: Briefcase,
      color: "blue",
    },
    {
      label: "Revenue This Month",
      value: "£0",
      subtext: "Target: £4,560",
      icon: PoundSterling,
      color: "green",
    },
    {
      label: "Profit This Month",
      value: "£0",
      subtext: "Target: £3,360",
      icon: TrendingUp,
      color: "purple",
    },
    {
      label: "Google Reviews",
      value: 0,
      subtext: "Target: 10 by month 3",
      icon: Star,
      color: "yellow",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}

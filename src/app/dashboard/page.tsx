"use client";

import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import StatsRow from "@/components/dashboard/StatsRow";
import RevenueChart from "@/components/dashboard/RevenueChart";
import JobTracker from "@/components/dashboard/JobTracker";
import Pipeline from "@/components/dashboard/Pipeline";
import GrowthChecklist from "@/components/dashboard/GrowthChecklist";
import ActionMatrix from "@/components/dashboard/ActionMatrix";

const TODAY = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function DashboardPage() {
  return (
    <div className="bg-[#060b14] min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-6 space-y-6">

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to website
          </Link>
          <a
            href="/api/logout"
            className="text-xs text-white/25 hover:text-white/60 transition-colors"
          >
            Log out
          </a>
        </div>

        {/* Header */}
        <div className="pb-5 border-b border-white/8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20">
                <Shield className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">Defend</h1>
                <p className="text-xs text-white/40 leading-none mt-0.5">Business Dashboard</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-white/70 font-medium">{TODAY}</p>
              <p className="text-xs text-white/30 mt-0.5">Self Employed · UK</p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <StatsRow />

        {/* Revenue chart */}
        <RevenueChart />

        {/* Pipeline */}
        <Pipeline />

        {/* Jobs + Checklist side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <JobTracker />
          </div>
          <div className="lg:col-span-2">
            <GrowthChecklist />
          </div>
        </div>

        {/* Action matrix */}
        <ActionMatrix />

      </div>
    </div>
  );
}

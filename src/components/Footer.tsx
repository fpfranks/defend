import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-500" />
          <span className="font-bold text-white">Defend</span>
        </div>

        <p className="text-xs text-white/25 text-center">
          AI Home Security · UK Based · Solar Powered · No Monthly Fees
        </p>

        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} Defend. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

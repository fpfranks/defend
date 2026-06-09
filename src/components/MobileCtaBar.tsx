export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-white/10 bg-[#060b14]/95 backdrop-blur-md px-4 py-3 safe-area-pb">
      <div className="flex gap-3">
        <a
          href="tel:07387344112"
          className="flex-1 py-3 rounded-xl border border-white/15 bg-white/8 text-white font-semibold text-sm text-center transition-colors hover:bg-white/12 active:bg-white/20"
        >
          📞 Call Now
        </a>
        <a
          href="#contact"
          className="flex-[2] py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm text-center transition-colors"
        >
          Book Free Survey →
        </a>
      </div>
    </div>
  );
}

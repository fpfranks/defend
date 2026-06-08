"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    postcode: "",
    package: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Request received
          </h2>
          <p className="text-white/50">
            We&apos;ll be in touch within 24 hours to arrange your free survey.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
              Get Protected
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Book your free survey
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              We visit your property, walk through the best camera positions,
              and give you a firm quote. No pressure. No cost.
            </p>

            <div className="space-y-4">
              {[
                "Free property assessment",
                "Same-week installation available",
                "One-time price, no contracts",
                "12-month hardware warranty",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-xl border border-white/8 bg-white/3">
              <p className="text-sm text-white/50 mb-1">
                Prefer to call or WhatsApp?
              </p>
              <p className="text-white font-semibold">07700 000000</p>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/8 bg-white/3 p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="07700 000000"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  Postcode *
                </label>
                <input
                  type="text"
                  required
                  value={form.postcode}
                  onChange={(e) =>
                    setForm({ ...form, postcode: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                  placeholder="SW1A 1AA"
                />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  Package Interest
                </label>
                <select
                  value={form.package}
                  onChange={(e) =>
                    setForm({ ...form, package: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                >
                  <option value="" className="bg-[#060b14]">
                    Not sure yet
                  </option>
                  <option value="starter" className="bg-[#060b14]">
                    Starter — £199
                  </option>
                  <option value="home" className="bg-[#060b14]">
                    Home — £399
                  </option>
                  <option value="full" className="bg-[#060b14]">
                    Full Protection — £699
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-white/50 mb-1.5">
                Anything else?
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                placeholder="Tell us about your property or any concerns..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Request Free Survey
                </>
              )}
            </button>

            <p className="text-xs text-white/25 text-center">
              We&apos;ll call or WhatsApp within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

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
            <p className="text-white/50 leading-relaxed mb-2">
              We visit your property, walk through the best camera positions, and give you a firm written quote. No pressure. No cost. No obligation.
            </p>
            <p className="text-sm text-blue-400 font-medium mb-8">
              Survey slots available this week — book now to secure yours.
            </p>

            <div className="space-y-4">
              {[
                "Free property walkthrough — no obligation",
                "Same-week installation available",
                "One-time price, no contracts, no hidden costs",
                "12-month hardware warranty on every camera",
                "Local installer — answers the phone, not a call centre",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl border border-white/8 bg-white/3">
              <p className="text-xs text-white/40 mb-2 uppercase tracking-widest">Prefer to call or WhatsApp?</p>
              <a href="tel:07387344112" className="block text-white font-semibold text-lg hover:text-blue-300 transition-colors mb-1">07387 344112</a>
              <p className="text-xs text-white/30 mb-3">Mon–Sat · 8am–7pm</p>
              <a
                href="https://wa.me/447387344112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600/20 border border-green-500/30 text-green-400 text-sm font-medium hover:bg-green-600/30 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Message on WhatsApp
              </a>
            </div>

            <div className="mt-4 p-5 rounded-xl border border-blue-500/20 bg-blue-600/5">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-xs text-white/60 italic leading-relaxed">
                &ldquo;Had everything fitted quickly and with no mess. The app is brilliant — I can see my whole drive and back garden from one camera.&rdquo;
              </p>
              <p className="text-xs text-white/35 mt-2">Mark T. · Hastings · 2 cameras</p>
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
                  placeholder="07387 344112"
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

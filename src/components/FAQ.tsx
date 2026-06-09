"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is there really no monthly fee — ever?",
    a: "Correct. The eufy SoloCam S340 stores footage directly on built-in 8GB storage. There is no cloud subscription required for any feature — AI detection, colour night vision, two-way audio, and instant phone alerts all work without paying anything monthly. Ring and Nest charge for cloud storage; we don't use cloud storage.",
  },
  {
    q: "What does the free survey include?",
    a: "We visit your property, walk the perimeter, identify the best camera positions to eliminate blind spots, and give you a firm written quote. There's no obligation to proceed and no charge — before, during, or after. We won't pressure you.",
  },
  {
    q: "How long does installation take?",
    a: "Most installs take between 1–3 hours depending on the number of cameras and access to the mounting positions. We'll give you a more accurate estimate after the free survey once we've seen the property.",
  },
  {
    q: "Do I need to be home during the survey and installation?",
    a: "Yes — you'll need to be in for both. The survey takes 20–30 minutes. During installation we'll also set up the eufy app on your phone and walk you through using it before we leave.",
  },
  {
    q: "What happens if my WiFi goes down?",
    a: "Your cameras continue recording to built-in local storage regardless of internet connectivity. You'll lose remote viewing via the app while offline, but footage keeps saving to the camera itself — nothing is lost. Once WiFi is restored, remote access returns automatically.",
  },
  {
    q: "How does the solar charging work in UK winters?",
    a: "The 2.2W solar panel keeps the camera charged throughout the year. In winter the charging rate is lower but the camera also uses less power in cooler temperatures. eufy rates the battery at 3 months of standby with zero solar input — in practice the panel keeps it topped up year-round in the UK.",
  },
  {
    q: "What's covered under warranty?",
    a: "Every camera carries eufy's standard 12-month manufacturer warranty against manufacturing faults. If a camera develops a fault, we handle the return and replacement process with eufy on your behalf — you don't need to deal with them directly. The Defend Care plan extends this support annually.",
  },
  {
    q: "Can I add more cameras later?",
    a: "Yes, easily. Additional cameras can be added at any time with a separate installation visit. Pricing is the same: hardware cost plus a short installation callout. All cameras connect through the same eufy app.",
  },
  {
    q: "What area do you cover?",
    a: "We're based in Battle, East Sussex and cover the surrounding area including Hastings, Bexhill-on-Sea, Eastbourne, Rye, Lewes, Heathfield, Crowborough, Brighton, Hove, Tunbridge Wells, Tonbridge, and most of East Sussex and the Kent/West Sussex borders. Enter your postcode in the survey form and we'll confirm — if you're on the edge we'll be honest with you.",
  },
  {
    q: "What if I move house?",
    a: "Cameras can be uninstalled and reinstalled at your new property. We offer a discounted reinstall service for existing customers — just get in touch and we'll sort it around your move date.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to know
          </h2>
          <p className="text-white/50">
            Still have a question? Call or WhatsApp us on{" "}
            <a href="tel:07387344112" className="text-blue-400 hover:text-blue-300 transition-colors">
              07387 344112
            </a>
            .
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/8 bg-white/3 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-white/90 font-medium text-sm pr-4 leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-white/35 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-white/5">
                  <p className="text-sm text-white/55 leading-relaxed pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/8 bg-white/3 p-6 text-center">
          <p className="text-sm text-white/50">
            Question not answered here?{" "}
            <a
              href="#contact"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
            >
              Send us a message
            </a>{" "}
            or call and we&apos;ll answer straight away.
          </p>
        </div>
      </div>
    </section>
  );
}

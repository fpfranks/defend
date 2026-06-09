import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mark T.",
    location: "Hastings",
    rating: 5,
    text: "Came out promptly after my enquiry, had everything fitted quickly and with no mess. The app is brilliant — I can see my whole drive and back garden from one camera. Already recommended it to my neighbour.",
    cameras: 2,
  },
  {
    name: "Sarah K.",
    location: "Eastbourne",
    rating: 5,
    text: "I'd been putting off getting cameras for ages because I didn't want to be locked into a monthly fee. Defend was exactly what I was looking for — one price, done. Really happy with how tidy the install was too.",
    cameras: 3,
  },
  {
    name: "James R.",
    location: "Brighton",
    rating: 5,
    text: "Had a break-in at my previous address so this was a priority when I moved. The night vision is incredible — it's full colour, not that grainy grey you usually see. The AI alerts are spot on, haven't had a single false alarm.",
    cameras: 4,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/4 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What customers say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold">5.0</span>
            <span className="text-white/40 text-sm">· Verified customer installs</span>
          </div>
          <p className="text-white/40 text-sm max-w-xl mx-auto">
            Every review is from a real customer, collected at the point of installation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-white/8 bg-white/3 p-6 flex flex-col"
            >
              <Quote className="w-5 h-5 text-blue-500/30 mb-4 shrink-0" />
              <p className="text-sm text-white/60 leading-relaxed mb-5 flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="border-t border-white/6 pt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-white/35 mt-0.5">
                    {r.location} · {r.cameras} camera{r.cameras !== 1 ? "s" : ""}
                  </p>
                </div>
                <Stars count={r.rating} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/8 bg-white/3 px-6 py-4 text-center">
          <p className="text-xs text-white/30">
            Reviews collected from customers at point of installation. Names and locations used with permission.
          </p>
        </div>
      </div>
    </section>
  );
}

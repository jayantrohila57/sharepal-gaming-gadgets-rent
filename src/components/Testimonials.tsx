const REVIEWS = [
  {
    text: "I am a regular customer of SharePal. The PS5 rental was seamless and the console was in great condition.",
    name: "Amal",
    meta: "Bangalore • Gaming Console",
    initials: "AA",
  },
  {
    text: "Excellent service! Got Xbox Series S delivered on time. Pricing is very reasonable for gaming rentals.",
    name: "Pankaj",
    meta: "Mumbai • Action Cameras",
    initials: "PS",
  },
  {
    text: "VR headset worked perfectly for our weekend party. Highly recommend SharePal for gaming gear.",
    name: "Jitesh",
    meta: "Bangalore • VR",
    initials: "JS",
  },
  {
    text: "Fast delivery and easy returns. FC26 combo was a hit with my friends!",
    name: "Riya",
    meta: "Bangalore • Gaming Console",
    initials: "RS",
  },
];

export function Testimonials() {
  return (
    <section className="py-8">
      <h2 className="text-center text-xl font-bold text-gray-900 md:text-2xl">
        Served more than{" "}
        <span className="text-orange-500">1 Lakh Orders</span>
      </h2>
      <div className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
        {REVIEWS.map((r) => (
          <article
            key={r.name}
            className="min-w-[280px] max-w-[320px] shrink-0 snap-start rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-blue-600">G</span>
              <div className="flex text-amber-400">★★★★★</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-800">&ldquo;{r.text}&rdquo;</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                {r.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                <p className="text-xs text-gray-500">{r.meta}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { SharePalImage } from "@/components/SharePalImage";

export function HeroBanner() {
  return (
    <section
      className="relative min-h-[200px] overflow-hidden rounded-2xl bg-gradient-to-r from-[#5b21b6] via-[#4B1E8F] to-[#312e81] px-6 py-8 text-white md:min-h-[240px] md:px-10 md:py-10"
    >
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h1 className="text-2xl font-bold tracking-tight md:text-4xl">Gaming Consoles</h1>
        <p className="mt-2 text-sm text-white/90 md:text-base">
          Rent the latest gaming gadgets from SharePal PS5, Xbox, Oculus VR, Racing Wheel on rent.
        </p>
        <div className="mt-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-white/80">
          <span>Xbox</span>
          <span className="text-white/40">•</span>
          <span>PlayStation</span>
          <span className="text-white/40">•</span>
          <span>Meta VR</span>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-between px-2 md:px-6">
        <div className="relative h-28 w-28 shrink-0 md:h-40 md:w-40">
          <SharePalImage
            src="https://images.sharepal.in/categories/gaming-consoles/xbox/xbox-series-s/xbox-series-s-on-rent-sharepal-1.webp"
            alt=""
            fill
            className="object-contain object-left"
            sizes="160px"
          />
        </div>
        <div className="relative h-32 w-32 shrink-0 md:h-44 md:w-44">
          <SharePalImage
            src="https://images.sharepal.in/categories/gaming-consoles/ps5/ps5-with-1-controller/ps5-console-with-1-controller-on-rent-sharepal-1.webp"
            alt=""
            fill
            className="object-contain object-right"
            sizes="176px"
          />
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Calendar, Gift, Percent, RefreshCw, Tag } from "lucide-react";

export function AssetPartnerBanner() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 py-8 text-white md:px-10"
    >
      <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-xl font-bold md:text-2xl">
            Become an{" "}
            <span className="text-[#A3E635]">Asset Partner.</span> Earn Monthly.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Earning Benefits
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#A3E635]" />
                  Monthly Earnings
                </li>
                <li className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-[#A3E635]" />
                  Upto ₹10,000 Instant Wallet credits
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Rental Benefits
              </p>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-[#A3E635]" />
                  10% Off
                </li>
                <li className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-[#A3E635]" />
                  Get 10% Cashback
                </li>
              </ul>
            </div>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#A3E635] px-6 py-2.5 text-sm font-bold text-gray-900 transition hover:bg-[#bef264]"
          >
            Know More
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="hidden h-40 w-48 items-center justify-center rounded-xl bg-white/5 md:flex">
          <span className="text-6xl opacity-40">🎮</span>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-4 top-4 h-24 w-24 rounded-full bg-[#A3E635]/10 blur-2xl" />
    </section>
  );
}

export function RentOutGearBanner() {
  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#4B1E8F] to-[#312e81] px-6 py-10 text-center text-white md:px-12"
    >
      <h2 className="mx-auto max-w-2xl text-xl font-bold leading-snug md:text-3xl">
        Got gear you don&apos;t use anymore?{" "}
        <span className="text-[#A3E635]">Rent Out Your Gear on SharePal</span>
      </h2>
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#A3E635] px-8 py-3 text-sm font-bold text-gray-900 transition hover:bg-[#bef264]"
      >
        Earn With Us
        <ArrowUpRight className="h-4 w-4" />
      </button>
    </section>
  );
}

export function SavingsPromoCard() {
  return (
    <div className="rounded-xl bg-[#0f172a] p-4 text-sm text-white">
      <div className="flex gap-3">
        <Percent className="h-8 w-8 shrink-0 text-[#A3E635]" />
        <p>
          <span className="font-semibold text-[#A3E635]">Save more with us!</span> Longer rental
          periods mean bigger savings—enjoy discounts of up to 12%. We don&apos;t charge you for
          delivery and pickup days!
        </p>
      </div>
    </div>
  );
}

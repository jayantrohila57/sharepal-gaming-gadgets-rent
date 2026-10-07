"use client";

import {
  Calendar,
  Check,
  ChevronDown,
  MapPin,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { SharePalLogo } from "@/components/SharePalLogo";
import { useRentalDates } from "@/context/RentalDatesContext";
import { formatShortDate } from "@/lib/rental";

export function Header() {
  const { dates, setModalOpen } = useRentalDates();

  return (
    <header className="sticky top-0 z-50 bg-[#4B1E8F] text-white shadow-md">
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-4 py-3 md:gap-4 md:px-6">
        <a href="/bangalore/gaming-gadgets-on-rent" className="shrink-0">
          <div className="rounded-md bg-white px-3 py-1.5">
            <SharePalLogo className="text-lg" />
          </div>
        </a>

        <div className="hidden min-w-0 flex-1 md:block">
          <div className="mx-auto flex max-w-3xl items-center gap-2 rounded-full bg-white px-3 py-2 text-sm text-gray-800 shadow-sm">
            <button
              type="button"
              className="flex items-center gap-1 border-r border-gray-200 pr-3 font-medium text-gray-900"
            >
              <MapPin className="h-4 w-4 text-[#4B1E8F]" />
              Bangalore
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="flex flex-1 items-center gap-2 px-2 text-gray-600 hover:text-gray-900"
            >
              <Calendar className="h-4 w-4 shrink-0 text-gray-500" />
              <span className="truncate">
                {dates ? formatShortDate(dates.delivery) : "Delivery Date"}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="flex flex-1 items-center gap-2 border-l border-gray-200 pl-3 text-gray-600 hover:text-gray-900"
            >
              <Calendar className="h-4 w-4 shrink-0 text-gray-500" />
              <span className="truncate">
                {dates ? formatShortDate(dates.pickup) : "Pickup Date"}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="flex shrink-0 items-center gap-1 rounded-full bg-[#1e3a5f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#152a45]"
            >
              <Check className="h-4 w-4" />
              Select
            </button>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3 md:gap-4">
          <button type="button" className="rounded-full p-2 hover:bg-white/10" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="rounded-full p-2 hover:bg-white/10" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-sm sm:flex hover:bg-white/10"
          >
            <User className="h-4 w-4" />
            Hi, Login
          </button>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="rounded-full bg-white/15 p-2 md:hidden"
            aria-label="Select dates"
          >
            <Calendar className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

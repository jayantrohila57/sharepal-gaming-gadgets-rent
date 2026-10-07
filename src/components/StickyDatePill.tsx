"use client";

import { Calendar } from "lucide-react";
import { useRentalDates } from "@/context/RentalDatesContext";

export function StickyDatePill() {
  const { hasValidDates, setModalOpen } = useRentalDates();

  if (hasValidDates) return null;

  return (
    <button
      type="button"
      onClick={() => setModalOpen(true)}
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border-2 border-[#A3E635] bg-[#0f172a] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02] active:scale-[0.98]"
    >
      <Calendar className="h-4 w-4 text-[#A3E635]" />
      Select rental dates to view prices
    </button>
  );
}

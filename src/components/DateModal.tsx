"use client";

import { useEffect, useMemo, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Info, X } from "lucide-react";
import { useRentalDates } from "@/context/RentalDatesContext";
import {
  daysBetween,
  formatDisplayDate,
  getChargeableDays,
  isAfterDay,
  isBeforeDay,
  isSameDay,
  startOfDay,
} from "@/lib/rental";
import { SavingsPromoCard } from "@/components/PromoBanners";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function getMonthMatrix(year: number, month: number): (Date | null)[][] {
  const first = new Date(year, month, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  const rows: (Date | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  return rows;
}

function monthLabel(date: Date): string {
  return date.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

export function DateModal() {
  const { isModalOpen, setModalOpen, dates, setDates } = useRentalDates();
  const today = startOfDay(new Date());
  const [viewMonth, setViewMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [delivery, setDelivery] = useState<Date | null>(dates?.delivery ?? null);
  const [pickup, setPickup] = useState<Date | null>(dates?.pickup ?? null);
  const [selecting, setSelecting] = useState<"delivery" | "pickup">("delivery");

  useEffect(() => {
    if (isModalOpen && dates) {
      setDelivery(dates.delivery);
      setPickup(dates.pickup);
    }
  }, [isModalOpen, dates]);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, setModalOpen]);

  const monthA = viewMonth;
  const monthB = useMemo(
    () => new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1),
    [viewMonth],
  );

  const chargeable = delivery && pickup ? getChargeableDays(delivery, pickup) : 0;
  const rentalDays = delivery && pickup ? Math.max(0, daysBetween(delivery, pickup)) : 0;
  const canContinue = delivery && pickup && chargeable > 0 && isAfterDay(pickup, delivery);

  const handleDayClick = (day: Date) => {
    if (isBeforeDay(day, today)) return;
    if (selecting === "delivery" || !delivery) {
      setDelivery(day);
      setPickup(null);
      setSelecting("pickup");
      return;
    }
    if (isBeforeDay(day, delivery)) {
      setDelivery(day);
      setPickup(null);
      setSelecting("pickup");
      return;
    }
    setPickup(day);
  };

  const renderMonth = (anchor: Date) => {
    const matrix = getMonthMatrix(anchor.getFullYear(), anchor.getMonth());
    return (
      <div className="min-w-[260px] flex-1">
        <p className="mb-3 text-center text-sm font-semibold text-gray-900">{monthLabel(anchor)}</p>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500">
          {WEEKDAYS.map((w) => (
            <div key={w} className="py-1 font-medium">{w}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {matrix.flat().map((day, idx) => {
            if (!day) return <div key={`e-${idx}`} className="aspect-square" />;
            const disabled = isBeforeDay(day, today);
            const isDelivery = delivery && isSameDay(day, delivery);
            const isPickup = pickup && isSameDay(day, pickup);
            const inRange =
              delivery &&
              pickup &&
              !isBeforeDay(day, delivery) &&
              !isAfterDay(day, pickup);
            return (
              <button
                key={day.toISOString()}
                type="button"
                disabled={disabled}
                onClick={() => handleDayClick(day)}
                className={`aspect-square rounded-lg text-sm font-medium transition ${
                  disabled
                    ? "cursor-not-allowed text-gray-300"
                    : "text-gray-800 hover:bg-violet-50"
                } ${
                  isDelivery || isPickup
                    ? "bg-[#4B1E8F] text-white hover:bg-[#4B1E8F]"
                    : inRange
                      ? "bg-violet-100 text-[#4B1E8F]"
                      : ""
                }`}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="date-modal-title"
      onClick={() => setModalOpen(false)}
    >
      <div
        className="relative max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setModalOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid lg:grid-cols-[340px_1fr]">
          <div className="space-y-4 border-b border-gray-100 p-6 lg:border-b-0 lg:border-r">
            <h2 id="date-modal-title" className="text-xl font-bold text-gray-900">
              Select your Dates
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-medium text-gray-700">Delivery Date *</span>
                <button
                  type="button"
                  onClick={() => setSelecting("delivery")}
                  className={`mt-1 flex w-full items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm ${
                    selecting === "delivery" ? "border-[#4B1E8F] ring-1 ring-[#4B1E8F]" : "border-gray-200"
                  }`}
                >
                  <Calendar className="h-4 w-4 shrink-0 text-gray-400" />
                  <span className="truncate text-gray-600">
                    {delivery ? formatDisplayDate(delivery) : "Select delivery date"}
                  </span>
                </button>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-gray-700">Pickup Date *</span>
                <button
                  type="button"
                  onClick={() => setSelecting("pickup")}
                  className={`mt-1 flex w-full items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm ${
                    selecting === "pickup" ? "border-[#4B1E8F] ring-1 ring-[#4B1E8F]" : "border-gray-200"
                  }`}
                >
                  <Calendar className="h-4 w-4 shrink-0 text-gray-400" />
                  <span className="truncate text-gray-600">
                    {pickup ? formatDisplayDate(pickup) : "Select pickup date"}
                  </span>
                </button>
              </label>
            </div>

            <div className="flex gap-2 rounded-xl bg-sky-50 p-3 text-xs leading-relaxed text-sky-900">
              <Info className="h-4 w-4 shrink-0 text-sky-600" />
              <p>
                Same-day delivery between 5PM and 11PM. For future dates, you can select a specific
                time slot available at checkout. We pickup between 9AM to 1PM.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600">Your Rental Period:</p>
              <p className="mt-1 text-3xl font-bold text-gray-900">
                {String(rentalDays).padStart(2, "0")}{" "}
                <span className="text-lg font-semibold">Day{rentalDays !== 1 ? "s" : ""}</span>
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 bg-white px-3 py-2 text-sm">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Chargeable Period:</span>
                <span className="font-semibold text-gray-900">
                  {chargeable > 0 ? `${chargeable} day${chargeable !== 1 ? "s" : ""}` : "--"}
                </span>
              </div>
            </div>

            <SavingsPromoCard />

            <button
              type="button"
              disabled={!canContinue}
              onClick={() => {
                if (delivery && pickup && canContinue) {
                  setDates({ delivery, pickup });
                }
              }}
              className="w-full rounded-xl py-3.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-gray-300 enabled:bg-[#4B1E8F] enabled:hover:bg-[#3d1773]"
            >
              Continue
            </button>
          </div>

          <div className="p-6">
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setViewMonth(
                    new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1),
                  )
                }
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label="Previous month"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setViewMonth(
                    new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1),
                  )
                }
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label="Next month"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
              {renderMonth(monthA)}
              {renderMonth(monthB)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getChargeableDays } from "@/lib/rental";

export interface RentalDates {
  delivery: Date;
  pickup: Date;
}

interface RentalDatesContextValue {
  dates: RentalDates | null;
  chargeableDays: number;
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  setDates: (dates: RentalDates) => void;
  clearDates: () => void;
  hasValidDates: boolean;
}

const RentalDatesContext = createContext<RentalDatesContextValue | null>(null);

export function RentalDatesProvider({ children }: { children: ReactNode }) {
  const [dates, setDatesState] = useState<RentalDates | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const chargeableDays = useMemo(() => {
    if (!dates) return 0;
    return getChargeableDays(dates.delivery, dates.pickup);
  }, [dates]);

  const hasValidDates = chargeableDays > 0;

  const setDates = useCallback((next: RentalDates) => {
    setDatesState(next);
    setModalOpen(false);
  }, []);

  const clearDates = useCallback(() => setDatesState(null), []);

  const value = useMemo(
    () => ({
      dates,
      chargeableDays,
      isModalOpen,
      setModalOpen,
      setDates,
      clearDates,
      hasValidDates,
    }),
    [dates, chargeableDays, isModalOpen, setDates, clearDates, hasValidDates],
  );

  return (
    <RentalDatesContext.Provider value={value}>{children}</RentalDatesContext.Provider>
  );
}

export function useRentalDates() {
  const ctx = useContext(RentalDatesContext);
  if (!ctx) {
    throw new Error("useRentalDates must be used within RentalDatesProvider");
  }
  return ctx;
}

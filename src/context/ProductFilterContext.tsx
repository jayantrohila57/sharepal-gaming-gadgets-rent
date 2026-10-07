"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ProductFilterId } from "@/lib/product-filters";

interface ProductFilterContextValue {
  activeFilter: ProductFilterId;
  setActiveFilter: (filter: ProductFilterId) => void;
}

const ProductFilterContext = createContext<ProductFilterContextValue | null>(null);

export function ProductFilterProvider({ children }: { children: ReactNode }) {
  const [activeFilter, setActiveFilter] = useState<ProductFilterId>("all");

  const value = useMemo(
    () => ({ activeFilter, setActiveFilter }),
    [activeFilter],
  );

  return (
    <ProductFilterContext.Provider value={value}>{children}</ProductFilterContext.Provider>
  );
}

export function useProductFilter() {
  const ctx = useContext(ProductFilterContext);
  if (!ctx) {
    throw new Error("useProductFilter must be used within ProductFilterProvider");
  }
  return ctx;
}

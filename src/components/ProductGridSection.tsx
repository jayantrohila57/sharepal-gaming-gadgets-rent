"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";
import { AssetPartnerBanner, RentOutGearBanner } from "@/components/PromoBanners";

const INITIAL_COUNT = 12;

interface ProductGridSectionProps {
  products: Product[];
}

export function ProductGridSection({ products }: ProductGridSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visible = useMemo(() => products.slice(0, visibleCount), [products, visibleCount]);
  const canShowMore = visibleCount < products.length;

  const firstRow = visible.slice(0, 4);
  const secondRow = visible.slice(4, 8);
  const rest = visible.slice(8);

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Gaming Gadgets On Rent</h2>
        <p className="text-sm text-gray-500">Total items: {products.length} items</p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {firstRow.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {secondRow.length > 0 && (
        <>
          <AssetPartnerBanner />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {secondRow.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}

      {rest.length > 0 && (
        <>
          <RentOutGearBanner />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {rest.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}

      <div className="flex flex-col items-center gap-4 pt-4">
        <p className="text-sm text-gray-500">
          Showing {Math.min(visibleCount, products.length)} of {products.length} results
        </p>
        {canShowMore && (
          <button
            type="button"
            onClick={() => setVisibleCount(products.length)}
            className="w-full max-w-md rounded-full border-2 border-gray-900 bg-white py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import type { Product } from "@/types/product";
import { useRentalDates } from "@/context/RentalDatesContext";
import { calculateRentalPrice } from "@/lib/rental";

function tagStyles(tag: string): string {
  if (tag === "Trending") return "border-orange-400 text-orange-500 bg-orange-50";
  if (tag === "New") return "border-sky-400 text-sky-600 bg-sky-50";
  if (tag === "Vote to Launch") return "border-violet-400 text-violet-600 bg-violet-50";
  return "";
}

export function ProductCard({ product }: { product: Product }) {
  const { hasValidDates, chargeableDays, setModalOpen } = useRentalDates();
  const price = calculateRentalPrice(product.per_day_rent, chargeableDays);

  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md"
    >
      {product.tag ? (
        <span
          className={`absolute left-3 top-3 z-10 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${tagStyles(product.tag)}`}
        >
          {product.tag}
        </span>
      ) : null}
      <div className="relative mx-auto mb-3 aspect-square w-full max-w-[200px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition group-hover:scale-[1.02]"
          sizes="(max-width:768px) 50vw, 25vw"
        />
      </div>
      <h3 className="mb-2 line-clamp-2 min-h-[2.5rem] text-sm font-semibold leading-snug text-gray-900">
        {product.name}
      </h3>
      <div className="mt-auto">
        <p className="text-[11px] text-gray-500">Select Dates to view price</p>
        <div className="mt-1 flex items-end justify-between gap-2">
          {hasValidDates ? (
            <p className="text-lg font-bold text-gray-900">
              ₹ {price.toLocaleString("en-IN")}
              <span className="text-xs font-normal text-gray-500"> /total</span>
            </p>
          ) : (
            <p className="text-lg font-bold text-gray-900">
              ₹{" "}
              <span
                className="select-none blur-[6px]"
                aria-hidden
              >
                {Math.round(product.per_day_rent * 3)}
              </span>
            </p>
          )}
          <button
            type="button"
            onClick={() => !hasValidDates && setModalOpen(true)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-gray-900 text-gray-900 transition hover:bg-gray-900 hover:text-white"
            aria-label={`Add ${product.name}`}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  );
}

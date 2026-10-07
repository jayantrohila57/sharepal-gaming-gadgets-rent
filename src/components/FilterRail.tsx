"use client";

import { Smile } from "lucide-react";
import type { GamingSubcategory } from "@/types/product";
import type { Product } from "@/types/product";
import { filterProducts, type ProductFilterId } from "@/lib/product-filters";
import { useProductFilter } from "@/context/ProductFilterContext";
import { SharePalImage } from "@/components/SharePalImage";

const RAIL_ORDER: ProductFilterId[] = [
  "GTA VI",
  "PS5 Console",
  "Xbox Console",
  "VR",
  "Racing Wheel",
  "Big Screen Gaming",
];

function pickSubcategories(items: GamingSubcategory[]): GamingSubcategory[] {
  const seen = new Set<string>();
  const picked: GamingSubcategory[] = [];
  for (const name of RAIL_ORDER) {
    const match = items.find(
      (s) => s.sc_name === name && s.sc_image && !seen.has(name),
    );
    if (match) {
      seen.add(name);
      picked.push(match);
    }
  }
  return picked;
}

interface FilterRailProps {
  subcategories: GamingSubcategory[];
  products: Product[];
}

export function FilterRail({ subcategories, products }: FilterRailProps) {
  const { activeFilter, setActiveFilter } = useProductFilter();
  const tiles = pickSubcategories(subcategories).filter((tile) => {
    const filterId = tile.sc_name as ProductFilterId;
    return filterProducts(products, filterId).length > 0;
  });

  const tileClass = (id: ProductFilterId) =>
    `flex flex-col items-center gap-1 rounded-xl p-2 transition ${
      activeFilter === id
        ? "ring-2 ring-[#2563eb] bg-blue-50/50"
        : "hover:bg-gray-50"
    }`;

  return (
    <aside className="hidden w-[88px] shrink-0 lg:block">
      <div className="sticky top-[140px] flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-100">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={tileClass("all")}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
            <Smile className="h-7 w-7 text-[#2563eb]" strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-medium text-gray-700">All</span>
        </button>
        {tiles.map((tile) => {
          const filterId = tile.sc_name as ProductFilterId;
          return (
            <button
              key={tile.url + tile.sc_name}
              type="button"
              onClick={() => setActiveFilter(filterId)}
              className={tileClass(filterId)}
            >
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-gray-50">
                {tile.sc_image && (
                  <SharePalImage
                    src={tile.sc_image}
                    alt={tile.sc_name}
                    fill
                    className="object-contain p-0.5"
                    sizes="48px"
                  />
                )}
              </div>
              <span className="text-center text-[9px] leading-tight font-medium text-gray-700">
                {tile.sc_name}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

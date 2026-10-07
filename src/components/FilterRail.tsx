"use client";

import Image from "next/image";
import { Smile } from "lucide-react";
import { useState } from "react";
import type { GamingSubcategory } from "@/types/product";

const RAIL_ORDER = [
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
}

export function FilterRail({ subcategories }: FilterRailProps) {
  const [active, setActive] = useState<string>("all");
  const tiles = pickSubcategories(subcategories);

  return (
    <aside className="hidden w-[88px] shrink-0 lg:block">
      <div className="sticky top-[140px] flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-gray-100">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`flex flex-col items-center gap-1 rounded-xl p-2 transition ${
            active === "all"
              ? "ring-2 ring-[#2563eb] bg-blue-50/50"
              : "hover:bg-gray-50"
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
            <Smile className="h-7 w-7 text-[#2563eb]" strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-medium text-gray-700">All</span>
        </button>
        {tiles.map((tile) => (
          <button
            key={tile.url + tile.sc_name}
            type="button"
            onClick={() => setActive(tile.sc_name)}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition ${
              active === tile.sc_name
                ? "ring-2 ring-[#2563eb] bg-blue-50/30"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gray-50">
              {tile.sc_image && (
                <Image
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
        ))}
      </div>
    </aside>
  );
}

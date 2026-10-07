import type { Product } from "@/types/product";

export type ProductFilterId =
  | "all"
  | "GTA VI"
  | "PS5 Console"
  | "Xbox Console"
  | "VR"
  | "Racing Wheel"
  | "Big Screen Gaming";

export function filterProducts(products: Product[], filter: ProductFilterId): Product[] {
  if (filter === "all") return products;
  return products.filter((product) => matchesFilter(product, filter));
}

function matchesFilter(product: Product, filter: ProductFilterId): boolean {
  const name = product.name.toLowerCase();
  const image = product.image.toLowerCase();

  switch (filter) {
    case "GTA VI":
      return /gta\s*(v|vi|5)?/i.test(product.name);
    case "PS5 Console":
      return (
        name.includes("ps5") ||
        name.includes("playstation") ||
        image.includes("/ps5/") ||
        image.includes("ps-portal")
      );
    case "Xbox Console":
      return name.includes("xbox") || image.includes("/xbox/");
    case "VR":
      return (
        /\bvr\b|oculus|quest|ps vr|virtual reality/i.test(product.name) ||
        image.includes("/vr/") ||
        image.includes("oculus")
      );
    case "Racing Wheel":
      return (
        /wheel|racing|g29|logitech/i.test(product.name) ||
        image.includes("racing-wheel") ||
        image.includes("g29")
      );
    case "Big Screen Gaming":
      return (
        /projector|big screen|mega racing/i.test(product.name) ||
        image.includes("big-screen") ||
        image.includes("projector")
      );
    default:
      return true;
  }
}

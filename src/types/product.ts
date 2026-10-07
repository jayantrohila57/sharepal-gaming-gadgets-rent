export interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  booked_count: number;
  tag: string;
  per_day_rent: number;
  out_of_stock: boolean;
}

export interface ProductsData {
  products: Product[];
}

export interface GamingSubcategory {
  id?: number;
  sc_name: string;
  sc_image?: string;
  url: string;
  admin_only?: boolean;
}

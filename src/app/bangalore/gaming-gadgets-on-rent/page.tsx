import productsData from "@/data/products.json";
import subcategoriesData from "@/data/gaming-subcategories.json";
import type { ProductsData, GamingSubcategory } from "@/types/product";
import { Header } from "@/components/Header";
import { CategoryTabs } from "@/components/CategoryTabs";
import { FilterRail } from "@/components/FilterRail";
import { HeroBanner } from "@/components/HeroBanner";
import { ProductGridSection } from "@/components/ProductGridSection";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { DateModal } from "@/components/DateModal";
import { StickyDatePill } from "@/components/StickyDatePill";
import { ChatWidget } from "@/components/ChatWidget";
import { RentalDatesProvider } from "@/context/RentalDatesContext";

const { products } = productsData as ProductsData;
const subcategories = subcategoriesData as GamingSubcategory[];

export const metadata = {
  title: "Gaming Gadgets on Rent in Bangalore | SharePal",
  description:
    "Rent PS5, Xbox, VR headsets, racing wheels and more gaming gadgets in Bangalore with SharePal.",
};

export default function GamingGadgetsPage() {
  return (
    <RentalDatesProvider>
      <Header />
      <CategoryTabs />
      <main className="min-h-screen bg-[#F3F4F6] pb-24">
        <div className="mx-auto flex max-w-[1400px] gap-4 px-4 py-6 md:px-6">
          <FilterRail subcategories={subcategories} />
          <div className="min-w-0 flex-1 space-y-8">
            <HeroBanner />
            <ProductGridSection products={products} />
            <FAQ />
            <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
              Bangalore &gt;{" "}
              <span className="font-medium text-gray-800">Gaming gadgets on rent</span>
            </nav>
            <Testimonials />
            <Stats />
          </div>
        </div>
        <Footer />
      </main>
      <DateModal />
      <StickyDatePill />
      <ChatWidget />
    </RentalDatesProvider>
  );
}

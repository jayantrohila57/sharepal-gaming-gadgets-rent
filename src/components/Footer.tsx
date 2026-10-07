import { SharePalLogo } from "@/components/SharePalLogo";

const LINK_COLUMNS = [
  {
    title: "Action Cameras",
    links: [
      "Action Cameras",
      "Pocket Cameras",
      "GoPro Cameras",
      "DJI Cameras",
      "DJI Drones",
      "360 Cameras",
    ],
  },
  {
    title: "Cameras",
    links: [
      "DSLR Cameras",
      "Cameras",
      "iPhones",
      "DSLR Gimbal Combos",
      "Wildlife Photography",
      "Tripod and camera accessories",
    ],
  },
  {
    title: "Trekking Gear",
    links: [
      "Trekking Gear",
      "Trekking Jackets",
      "Trek/Snow Pants",
      "Trekking Shoes",
      "Trek Accessories",
    ],
  },
  {
    title: "Riding Gear",
    links: [
      "Riding Gear",
      "Riding Luggage",
      "Riding Jackets",
      "Riding Essentials",
      "Riding Boots",
      "Binoculars",
    ],
  },
  {
    title: "Creator Gear",
    links: [
      "Wireless & Collar Mics",
      "Professional Cameras",
      "Mirrorless Cameras",
      "UNLMTD Vlogging",
      "Mobile Gimbals",
      "Vlogging",
    ],
  },
];

const SECOND_ROW = [
  {
    title: "Gaming Console",
    links: ["PS5 Console", "VR", "Racing Wheel", "Big Screen Gaming", "Xbox Console"],
  },
  {
    title: "Winter Wear",
    links: ["Snow Boots", "Winter Jackets", "Backpacks"],
  },
  {
    title: "Camping Gear",
    links: ["Camping Gear", "Camping Stools & Tables", "Camping Tents", "Sleeping Bags & Mats"],
  },
  {
    title: "Audio Visual Equipment",
    links: ["Projectors", "VR", "Mics", "Speakers"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0B1221] text-gray-300">
      <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-bold text-white">{col.title}</h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SECOND_ROW.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-bold text-white">{col.title}</h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6 border-t border-white/10 pt-10 text-sm">
          <div>
            <h3 className="text-base font-semibold text-white underline">
              Renting from SharePal in Bangalore
            </h3>
            <p className="mt-2 max-w-3xl leading-relaxed text-gray-400">
              SharePal delivers gaming consoles, VR headsets, and accessories across Bangalore
              including Koramangala, Indiranagar, Whitefield, HSR Layout, and more. Choose your
              dates, verify once, and enjoy doorstep delivery with flexible rental periods.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Categories on Rent</h3>
            <h4 className="mt-3 font-semibold text-white underline">Gaming gadgets on Rent</h4>
            <p className="mt-2 max-w-2xl text-gray-400">
              Rent PS5, Xbox, VR, racing wheels, and big-screen gaming combos at affordable daily
              rates in Bangalore.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-start md:justify-between">
          <div className="inline-block rounded-md bg-white px-4 py-2">
            <SharePalLogo className="text-xl" />
          </div>
          <div className="grid gap-6 sm:grid-cols-4 text-sm">
            <div>
              <p className="mb-2 font-bold text-white">Sharepal</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Sharepal for Creators</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-bold text-white">Become a Pal</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">How it works?</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-bold text-white">Policies</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Terms & Condition</a></li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-bold text-white">Need Help</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Contact Support</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

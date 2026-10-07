const CATEGORIES = [
  { label: "Photography", href: "#", active: false },
  { label: "Gaming", href: "/bangalore/gaming-gadgets-on-rent", active: true },
  { label: "Outdoor", href: "#", active: false },
  { label: "Entertainment", href: "#", active: false },
];

export function CategoryTabs() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1400px] justify-center gap-8 overflow-x-auto px-4 md:gap-16">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.label}
            href={cat.href}
            className={`relative shrink-0 py-4 text-sm font-medium transition-colors md:text-base ${
              cat.active
                ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-full after:bg-[#4B1E8F]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {cat.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

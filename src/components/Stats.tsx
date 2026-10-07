export function Stats() {
  const items = [
    { main: "250Cr", accent: "+", label: "Saved Together" },
    { main: "4.5M ", accent: "Kg", label: "CO2E Emissions Saved" },
    { main: "100K", accent: "+", label: "Products In Circulation" },
  ];

  return (
    <section className="grid grid-cols-1 gap-8 py-12 text-center sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label}>
          <p className="text-3xl font-bold md:text-4xl">
            <span className="text-[#2563eb]">{item.main}</span>
            <span className="text-[#A3E635]">{item.accent}</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">{item.label}</p>
        </div>
      ))}
    </section>
  );
}

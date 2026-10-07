export function SharePalLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-bold tracking-tight ${className}`}
      aria-label="SharePal"
    >
      <span className="text-[#2563eb]">Share</span>
      <span className="text-[#84cc16]">Pal</span>
    </span>
  );
}

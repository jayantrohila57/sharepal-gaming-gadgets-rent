export function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function daysBetween(start: Date, end: Date): number {
  const ms = startOfDay(end).getTime() - startOfDay(start).getTime();
  return Math.round(ms / (1000 * 60 * 60 * 24));
}

/**
 * SharePal does not charge for delivery or pickup days — only the calendar days
 * strictly between delivery and pickup (e.g. deliver 10 Oct, pickup 14 Oct → 3 days).
 */
export function getChargeableDays(delivery: Date, pickup: Date): number {
  const span = daysBetween(delivery, pickup);
  if (span < 2) return 0;
  return span - 1;
}

export function formatDisplayDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatShortDate(date: Date): string {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}

export function calculateRentalPrice(perDayRent: number, chargeableDays: number): number {
  return Math.round(perDayRent * chargeableDays);
}

export function isSameDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() === startOfDay(b).getTime();
}

export function isBeforeDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

export function isAfterDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() > startOfDay(b).getTime();
}

export function CalculationOfDiscounts(price: number, label: number): number {
  return Math.round(price - ((price * label) / 100));
  }
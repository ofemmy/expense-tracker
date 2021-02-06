export function formatDate(date: Date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("de-DE", options).format(new Date(date));
}
export function formatNumberToCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency }).format(
    +amount
  );
}

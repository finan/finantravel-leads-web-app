export function calculateDuration(startDate, endDate, unit = 'days') {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return `${days} ${unit}`;
}

export function calculateDuration(startDate, endDate, unit = 'days') {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Menghitung selisih dalam hari dengan konversi dari milidetik ke hari
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  return `${days} ${unit}`;
}

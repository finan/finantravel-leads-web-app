// Fungsi untuk menghitung durasi antara dua tanggal dalam satuan tertentu (default: 'days').
export function calculateDuration(startDate, endDate, unit = 'days') {
  // Konversi string tanggal ke objek Date
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Hitung selisih hari antara dua tanggal
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  // Kembalikan durasi dengan unit yang diinginkan
  return `${days} ${unit}`;
}

import { useParams } from 'react-router-dom';
import trips from '@/data/trips.json';

function LeadDetailsPage() {
  const { id } = useParams(); // Mengambil parameter `id` dari URL

  // Mencari trip berdasarkan `id`, pastikan tipe `id` sama dengan `trip.id`
  const trip = trips.find((trip) => String(trip.id) === id);

  if (!trip) {
    return <div className="p-6">Trip not found.</div>; // Menampilkan pesan jika trip tidak ditemukan
  }

  return (
    <div className="p-6">
      {/* Menampilkan nama trip sebagai judul */}
      <h1 className="text-3xl font-bold">{trip.name}</h1>

      {/* Menampilkan detail trip menggunakan definition list (dl) */}
      <dl className="mt-4">
        <dt className="font-semibold">Destination:</dt>
        <dd>{trip.destination}</dd>

        <dt className="font-semibold">Start Date:</dt>
        <dd>{trip.startDate}</dd>

        <dt className="font-semibold">End Date:</dt>
        <dd>{trip.endDate}</dd>

        <dt className="font-semibold">Status:</dt>
        <dd>{trip.status}</dd>

        <dt className="font-semibold">Priority:</dt>
        <dd>{trip.priority}</dd>

        <dt className="font-semibold">Assigned To:</dt>
        <dd>{trip.assignedTo}</dd>
      </dl>
    </div>
  );
}

export default LeadDetailsPage;

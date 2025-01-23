import { useParams } from 'react-router-dom';
import trips from '@/data/trips.json';

function LeadDetailsPage() {
  const { id } = useParams(); // Mengambil parameter `id` dari URL
  const trip = trips.find((trip) => trip.id === id); // Cari data trip berdasarkan `id`

  if (!trip) {
    return <div className="p-6">Trip not found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{trip.name}</h1>
      <p>Destination: {trip.destination}</p>
      <p>Start Date: {trip.startDate}</p>
      <p>End Date: {trip.endDate}</p>
      <p>Status: {trip.status}</p>
      <p>Priority: {trip.priority}</p>
      <p>Assigned To: {trip.assignedTo}</p>
    </div>
  );
}

export default LeadDetailsPage;

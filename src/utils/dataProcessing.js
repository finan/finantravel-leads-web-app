// Impor fungsi untuk menghitung durasi perjalanan
import { calculateDuration } from '@/utils/dateUtils';

// Fungsi untuk memproses data leads berdasarkan data trip, relations, admins, dan members
export function processLeads(trips, relations, admins, members) {
  // Validasi apakah data yang diperlukan tersedia
  if (!trips || !relations || !admins || !members) {
    console.error('Required data is missing');
    return [];
  }

  // Membuat peta untuk anggota (members) dengan ID sebagai kunci dan nama sebagai nilai
  const membersMap = Object.fromEntries(members.map((m) => [m.id, m.name]));

  // Membuat peta untuk admin dengan ID sebagai kunci dan nama sebagai nilai
  const adminsMap = Object.fromEntries(admins.map((a) => [a.id, a.name]));

  // Memproses setiap trip untuk menghasilkan data leads
  return trips.map((trip) => {
    // Filter relasi yang sesuai dengan trip saat ini
    const tripRelations = relations.filter((rel) => rel.tripId === trip.id);

    // Cari relasi organizer (penyelenggara) dari trip
    const organizerRelation = tripRelations.find((rel) => rel.isOrganizer);
    const organizerName = membersMap[organizerRelation?.memberId] || 'Unknown';

    // Cari nama admin yang bertanggung jawab untuk trip ini
    const assignedAdmins = adminsMap[trip.assignedTo] || 'Unknown';

    // Kembalikan data lead yang diproses
    return {
      id: trip.id,
      name: trip.name,
      organizer: organizerName,
      destination: trip.destination,
      startDate: trip.startDate,
      duration: calculateDuration(trip.startDate, trip.endDate),
      status: trip.status,
      priority: trip.priority,
      assignedTo: assignedAdmins,
    };
  });
}

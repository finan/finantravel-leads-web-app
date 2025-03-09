import { calculateDuration } from '@/utils/dateUtils';

export function processLeads(trips, relations, admins, members) {
  if (!trips || !relations || !admins || !members) {
    console.error('Required data is missing');
    return [];
  }

  // Membuat mapping ID ke nama untuk members dan admins
  const membersMap = Object.fromEntries(members.map((m) => [m.id, m.name]));
  const adminsMap = Object.fromEntries(admins.map((a) => [a.id, a.name]));

  return trips.map((trip) => {
    // Ambil semua relasi yang terkait dengan trip ini
    const tripRelations = relations.filter((rel) => rel.tripId === trip.id);

    // Cari penyelenggara trip berdasarkan relasi
    const organizerRelation = tripRelations.find((rel) => rel.isOrganizer);
    const organizerName = membersMap[organizerRelation?.memberId] || 'Unknown';

    // Ambil admin yang bertanggung jawab
    const assignedAdmins = adminsMap[trip.assignedTo] || 'Unknown';

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

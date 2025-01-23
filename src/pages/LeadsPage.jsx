// Impor dari pustaka eksternal (npm modules)
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

// Impor dari alias atau path absolut
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '@/components/dropdown';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/pagination';
import { Badge } from '@/components/badge';
import { Button } from '@/components/button';

// Impor dari path relatif (data atau file JSON)
import trips from '@/data/trips.json';
import admins from '@/data/admins.json';
import relations from '@/data/relations.json';
import members from '@/data/members.json';

// Konstanta untuk warna prioritas
const PRIORITY_COLORS = {
  High: 'rose',
  Medium: 'amber',
  Low: 'lime',
};

// Komponen untuk menampilkan badge dengan warna sesuai prioritas
function PriorityBadge({ priority }) {
  return <Badge color={PRIORITY_COLORS[priority]}>{priority}</Badge>;
}

PriorityBadge.propTypes = {
  priority: PropTypes.oneOf(['High', 'Medium', 'Low']).isRequired,
};

// Fungsi untuk menghitung durasi trip dalam hari
function calculateDuration(startDate, endDate, unit = 'days') {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return `${days} ${unit}`;
}

// Komponen tabel untuk Leads
function LeadsTable({ leads }) {
  return (
    <div>
      <Table striped>
        <TableHead>
          <TableRow>
            <TableHeader>Trip Name</TableHeader>
            <TableHeader>Client</TableHeader>
            <TableHeader>Destination</TableHeader>
            <TableHeader>Start Date</TableHeader>
            <TableHeader>Duration</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Priority</TableHeader>
            <TableHeader>Assigned To</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {leads.map((lead, index) => (
            <TableRow key={index}>
              <TableCell className="max-w-32 truncate hover:whitespace-normal">
                <Link to={`/details/${lead.id}`} className="hover:underline">
                  {lead.name}
                </Link>
              </TableCell>
              <TableCell className="max-w-32 truncate hover:whitespace-normal">
                {lead.organizer}
              </TableCell>
              <TableCell>{lead.destination}</TableCell>
              <TableCell>{lead.startDate}</TableCell>
              <TableCell>{lead.duration}</TableCell>
              <TableCell>{lead.status}</TableCell>
              <TableCell>
                <PriorityBadge priority={lead.priority} />
              </TableCell>
              <TableCell>{lead.assignedTo}</TableCell>
              <TableCell>
                <Dropdown>
                  <DropdownButton outline className="cursor-pointer">
                    Options
                    <ChevronDownIcon />
                  </DropdownButton>
                  <DropdownMenu className="min-w-48">
                    <DropdownItem className="cursor-pointer">
                      <Link to={`/details/${lead.id}`}>Open</Link>
                    </DropdownItem>
                    <DropdownItem href="/" disabled>
                      Remove
                    </DropdownItem>
                    <DropdownItem href="/" className="cursor-pointer">
                      Transfer
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="mt-6">
        <PaginationPrevious href="?page=2" />
        <PaginationList>
          <PaginationPage href="?page=1">1</PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3" current>
            3
          </PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
          <PaginationGap />
          <PaginationPage href="?page=65">85</PaginationPage>
          <PaginationPage href="?page=66">86</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=4" />
      </Pagination>
    </div>
  );
}

LeadsTable.propTypes = {
  leads: PropTypes.array.isRequired,
};

// Komponen utama LeadsPage
function LeadsPage() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Validasi jika data JSON hilang
    if (!trips || !relations || !admins || !members) {
      console.error('Required data is missing');
      return;
    }

    // Optimasi pencarian dengan membuat peta data
    const membersMap = Object.fromEntries(members.map((m) => [m.id, m.name]));
    const adminsMap = Object.fromEntries(admins.map((a) => [a.id, a.name]));

    // Proses data leads
    const processedLeads = trips.map((trip) => {
      // Cari semua relasi untuk trip ini
      const tripRelations = relations.filter((rel) => rel.tripId === trip.id);

      // Dapatkan nama organizer
      const organizerRelation = tripRelations.find((rel) => rel.isOrganizer);
      const organizerName =
        membersMap[organizerRelation?.memberId] || 'Unknown';

      // Dapatkan nama admin berdasarkan assignedTo
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

    setLeads(processedLeads);
  }, []);

  return (
    <div className="mx-auto flex flex-col gap-10 py-11">
      {/* Header */}
      <div className="flex justify-between">
        <h1>Leads</h1>
        <Button href="/" color="green" className="max-h-fit">
          <PlusIcon />
          Add lead
        </Button>
      </div>

      {/* Tabel Data */}
      <LeadsTable leads={leads} />
    </div>
  );
}

export default LeadsPage;

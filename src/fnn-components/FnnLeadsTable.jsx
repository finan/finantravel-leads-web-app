// Impor PropTypes untuk validasi tipe properti
import PropTypes from 'prop-types';

// Impor pustaka React Router untuk navigasi
import { Link } from 'react-router-dom';

// Impor komponen Dropdown dari Catalyst
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from '@/components/dropdown';

// Impor komponen Table dari Catalyst
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';

// Impor komponen Pagination dari Catalyst
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from '@/components/pagination';

// Impor komponen khusus untuk badge prioritas
import FnnPriorityBadge from './FnnPriorityBadge';

// Impor ikon ChevronDown dari Heroicons
import { ChevronDownIcon } from '@heroicons/react/16/solid';

// Komponen untuk menampilkan tabel data leads
function FnnLeadsTable({ leads }) {
  return (
    <div>
      {/* Tabel untuk menampilkan informasi leads */}
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
              {/* Nama trip dengan tautan ke halaman detail */}
              <TableCell className="max-w-32 truncate hover:whitespace-normal">
                <Link to={`/details/${lead.id}`} className="hover:underline">
                  {lead.name}
                </Link>
              </TableCell>
              {/* Informasi organizer */}
              <TableCell className="max-w-32 truncate hover:whitespace-normal">
                {lead.organizer}
              </TableCell>
              <TableCell>{lead.destination}</TableCell>
              <TableCell>{lead.startDate}</TableCell>
              <TableCell>{lead.duration}</TableCell>
              <TableCell>{lead.status}</TableCell>
              {/* Badge prioritas */}
              <TableCell>
                <FnnPriorityBadge priority={lead.priority} />
              </TableCell>
              <TableCell>{lead.assignedTo}</TableCell>
              {/* Dropdown untuk aksi */}
              <TableCell>
                <Dropdown>
                  <DropdownButton outline className="cursor-pointer">
                    Options <ChevronDownIcon />
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

      {/* Navigasi pagination */}
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

// Validasi tipe properti untuk komponen ini
FnnLeadsTable.propTypes = {
  leads: PropTypes.array.isRequired,
};

// Ekspor komponen untuk digunakan di tempat lain
export default FnnLeadsTable;

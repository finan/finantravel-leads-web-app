import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

import FnnPriorityBadge from './FnnPriorityBadge';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

function FnnLeadsTable({ leads }) {
  return (
    <div>
      <Table striped>
        <TableHead>
          <TableRow>
            {/* Header tabel untuk setiap kolom */}
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
              {/* Nama client yang mengorganisir trip */}
              <TableCell className="max-w-32 truncate hover:whitespace-normal">
                {lead.organizer}
              </TableCell>
              <TableCell>{lead.destination}</TableCell>
              <TableCell>{lead.startDate}</TableCell>
              <TableCell>{lead.duration}</TableCell>
              <TableCell>{lead.status}</TableCell>
              {/* Menampilkan priority badge dengan warna sesuai level prioritas */}
              <TableCell>
                <FnnPriorityBadge priority={lead.priority} />
              </TableCell>
              {/* Menampilkan orang yang ditugaskan ke lead */}
              <TableCell>{lead.assignedTo}</TableCell>
              {/* Dropdown untuk opsi tindakan (Open, Remove, Transfer) */}
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

      {/* Navigasi Pagination untuk berpindah halaman data */}
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

FnnLeadsTable.propTypes = {
  leads: PropTypes.array.isRequired,
};

export default FnnLeadsTable;

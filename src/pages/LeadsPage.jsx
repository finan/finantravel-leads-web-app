// Impor React hooks untuk state dan efek
import { useState, useEffect } from 'react';

// Impor ikon dari Heroicons untuk tombol
import { PlusIcon } from '@heroicons/react/16/solid';

// Impor komponen Button dari Catalyst
import { Button } from '@/components/button';

// Impor komponen tabel leads dari folder fnn-components
import FnnLeadsTable from '@/fnn-components/FnnLeadsTable';

// Impor data JSON untuk trips, admins, relations, dan members
import trips from '@/data/trips.json';
import admins from '@/data/admins.json';
import relations from '@/data/relations.json';
import members from '@/data/members.json';

// Impor fungsi untuk memproses data leads
import { processLeads } from '@/utils/dataProcessing';

// Komponen utama untuk halaman Leads
function LeadsPage() {
  // State untuk menyimpan data leads
  const [leads, setLeads] = useState([]);

  // Efek untuk memproses data leads saat komponen pertama kali dimuat
  useEffect(() => {
    const processedLeads = processLeads(trips, relations, admins, members);
    setLeads(processedLeads);
  }, []);

  return (
    <div className="mx-auto flex flex-col gap-10 py-11">
      {/* Header halaman */}
      <div className="flex justify-between">
        <h1>Leads</h1>
        <Button href="/" color="green" className="max-h-fit">
          <PlusIcon />
          Add lead
        </Button>
      </div>

      {/* Tabel data leads */}
      <FnnLeadsTable leads={leads} />
    </div>
  );
}

// Ekspor komponen LeadsPage untuk digunakan dalam routing atau tempat lain
export default LeadsPage;

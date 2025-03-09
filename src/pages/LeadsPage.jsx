import { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/16/solid';
import { Button } from '@/components/button';
import FnnLeadsTable from '@/fnn-components/FnnLeadsTable';
import FnnDialogNewLead from '@/fnn-components/FnnDialogNewLead';
import trips from '@/data/trips.json';
import admins from '@/data/admins.json';
import relations from '@/data/relations.json';
import members from '@/data/members.json';
import { processLeads } from '@/utils/dataProcessing';

function LeadsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const processedLeads = processLeads(trips, relations, admins, members);
    setLeads(processedLeads);
  }, []);

  return (
    <div className="mx-auto flex flex-col gap-10 py-11">
      <div className="flex justify-between">
        <h1>Leads</h1>
        <Button
          onClick={() => setIsDialogOpen(true)}
          color="green"
          className="max-h-fit cursor-pointer"
        >
          <PlusIcon />
          Add new lead
        </Button>
      </div>
      <FnnLeadsTable leads={leads} />
      <FnnDialogNewLead
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}

export default LeadsPage;

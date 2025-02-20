import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';

import announcements from '@/data/announcements.json';

function AnnouncementsPage() {
  return (
    <>
      <div className="mx-auto max-w-xl py-11 text-center">
        <div className="mb-9">
          <h1>Announcements</h1>
        </div>

        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Date</TableHeader>
                <TableHeader>Subject</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {announcements.map((item) => (
                <TableRow key={item.id} href={item.url}>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <span className="text-base">{item.title}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default AnnouncementsPage;

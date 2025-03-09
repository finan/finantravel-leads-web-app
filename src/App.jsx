import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeadsPage from '@/pages/LeadsPage';
import LeadDetailsPage from '@/pages/LeadDetailsPage';
import AnnouncementsPage from '@/pages/AnnouncementsPage';
import { SidebarLayout } from '@/components/sidebar-layout';
import { FnnSidebar, FnnNavbar } from '@/fnn-components';

function App() {
  return (
    <Router>
      <SidebarLayout navbar={<FnnNavbar />} sidebar={<FnnSidebar />}>
        <Routes>
          <Route path="/" element={<LeadsPage />} />
          <Route path="/details/:id" element={<LeadDetailsPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
        </Routes>
      </SidebarLayout>
    </Router>
  );
}

export default App;

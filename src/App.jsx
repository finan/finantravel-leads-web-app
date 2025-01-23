import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeadsPage from '@/pages/LeadsPage';
import LeadDetailsPage from '@/pages/LeadDetailsPage'; // Halaman baru untuk detail trip
import { SidebarLayout } from '@/components/sidebar-layout';
import { FnnSidebar, FnnNavbar } from '@/fnn-components';

function App() {
  return (
    <Router>
      <SidebarLayout navbar={<FnnNavbar />} sidebar={<FnnSidebar />}>
        <Routes>
          <Route path="/" element={<LeadsPage />} />
          <Route path="/details/:id" element={<LeadDetailsPage />} />
        </Routes>
      </SidebarLayout>
    </Router>
  );
}

export default App;

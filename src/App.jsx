// Impor komponen React Router untuk routing aplikasi
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Impor halaman untuk Leads dan Detail Leads
import LeadsPage from '@/pages/LeadsPage';
import LeadDetailsPage from '@/pages/LeadDetailsPage'; // Halaman baru untuk detail trip

// Impor layout dan komponen sidebar serta navbar
import { SidebarLayout } from '@/components/sidebar-layout';
import { FnnSidebar, FnnNavbar } from '@/fnn-components';

// Komponen utama aplikasi
function App() {
  return (
    <Router>
      {/* Gunakan SidebarLayout dengan Navbar dan Sidebar */}
      <SidebarLayout navbar={<FnnNavbar />} sidebar={<FnnSidebar />}>
        {/* Definisikan rute aplikasi */}
        <Routes>
          {/* Rute untuk halaman utama Leads */}
          <Route path="/" element={<LeadsPage />} />

          {/* Rute untuk halaman detail Leads */}
          <Route path="/details/:id" element={<LeadDetailsPage />} />
        </Routes>
      </SidebarLayout>
    </Router>
  );
}

// Ekspor komponen App untuk dirender ke DOM utama
export default App;

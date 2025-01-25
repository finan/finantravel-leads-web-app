// Impor PropTypes untuk validasi tipe properti
import PropTypes from 'prop-types';

// Impor komponen Badge dari Catalyst
import { Badge } from '@/components/badge';

// Peta warna untuk setiap tingkat prioritas
const PRIORITY_COLORS = {
  High: 'rose', // Prioritas tinggi (merah)
  Medium: 'amber', // Prioritas sedang (kuning)
  Low: 'lime', // Prioritas rendah (hijau)
};

// Komponen untuk menampilkan badge prioritas dengan warna yang sesuai
function FnnPriorityBadge({ priority }) {
  return <Badge color={PRIORITY_COLORS[priority]}>{priority}</Badge>;
}

// Validasi tipe properti komponen menggunakan PropTypes
FnnPriorityBadge.propTypes = {
  priority: PropTypes.oneOf(['High', 'Medium', 'Low']).isRequired,
};

// Ekspor komponen untuk digunakan di tempat lain
export default FnnPriorityBadge;

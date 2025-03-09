import PropTypes from 'prop-types';
import { Badge } from '@/components/badge';

const PRIORITY_COLORS = {
  High: 'rose',
  Medium: 'amber',
  Low: 'lime',
};

function FnnPriorityBadge({ priority }) {
  return <Badge color={PRIORITY_COLORS[priority]}>{priority}</Badge>;
}

FnnPriorityBadge.propTypes = {
  priority: PropTypes.oneOf(['High', 'Medium', 'Low']).isRequired,
};

export default FnnPriorityBadge;

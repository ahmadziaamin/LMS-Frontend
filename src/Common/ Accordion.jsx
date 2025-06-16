import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  IconButton,
  Collapse,
  styled
} from '@mui/material';
import { 
  Add as AddIcon,
  Remove as RemoveIcon
} from '@mui/icons-material';

const ExpandableHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#5f9ea0', // cadetblue
  color: 'white',
  padding: '12px 16px',
  cursor: 'pointer',
  borderRadius: '4px 4px 0 0',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#4d7e80'
  }
});

const Accordion = ({ title, children, defaultExpanded = true }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <ExpandableHeader onClick={toggleExpand}>
        <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <IconButton 
          size="small" 
          sx={{ color: 'white' }}
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand();
          }}
        >
          {expanded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </ExpandableHeader>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ p: 3, border: '1px solid #ddd', borderTop: 0, borderRadius: '0 0 4px 4px' }}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Accordion;
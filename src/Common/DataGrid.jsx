import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  IconButton,
  Tooltip,
  Chip,
  Typography
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';

const DataGrid = ({
  columns,
  data,
  page,
  rowsPerPage,
  totalRows,
  sortBy,
  sortDirection,
  onPageChange,
  onRowsPerPageChange,
  onSort,
  onEdit,
  onDelete,
  onView,
  actions = true
}) => {
  return (
    <Paper sx={{ 
      border: '1px solid #e0e0e0', 
      borderRadius: '4px',
      boxShadow: 'none',
      overflow: 'hidden'
    }}>
      <TableContainer>
        <Table stickyHeader aria-label="data grid" sx={{
          '& .MuiTableCell-root': {
            borderRight: '1px solid #e0e0e0',
            '&:last-child': {
              borderRight: 'none'
            }
          }
        }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  sx={{ 
                    minWidth: column.minWidth,
                    backgroundColor: '#f5f5f5',
                    fontWeight: 'bold',
                    borderBottom: '1px solid #e0e0e0',
                    py: 1.5
                  }}
                >
                  {column.sortable ? (
                    <TableSortLabel
                      active={sortBy === column.id}
                      direction={sortBy === column.id ? sortDirection : 'asc'}
                      onClick={() => onSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
              {actions && (
                <TableCell 
                  align="center" 
                  sx={{ 
                    minWidth: 150,
                    backgroundColor: '#f5f5f5',
                    fontWeight: 'bold',
                    borderBottom: '1px solid #e0e0e0',
                    py: 1.5
                  }}
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <TableRow 
                  hover 
                  key={row.id || index}
                  sx={{ '&:last-child td': { borderBottom: 0 } }}
                >
                  {columns.map((column) => (
                    <TableCell 
                      key={column.id} 
                      align={column.align || 'left'}
                      sx={{ 
                        borderBottom: '1px solid #e0e0e0',
                        py: 1.5
                      }}
                    >
                      {column.render ? column.render(row) : row[column.id]}
                    </TableCell>
                  ))}
                  {actions && (
                    <TableCell 
                      align="center"
                      sx={{ 
                        borderBottom: '1px solid #e0e0e0',
                        py: 1.5
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        {onView && (
                          <Tooltip title="View">
                            <IconButton 
                              size="small"
                              onClick={() => onView(row)}
                              sx={{ color: '#1976d2' }}
                            >
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {onEdit && (
                          <Tooltip title="Edit">
                            <IconButton 
                              size="small"
                              onClick={() => onEdit(row)}
                              sx={{ color: '#1976d2' }}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {onDelete && (
                          <Tooltip title="Delete">
                            <IconButton 
                              size="small"
                              onClick={() => onDelete(row)}
                              sx={{ color: '#d32f2f' }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        )}
                      </Box>
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell 
                  colSpan={columns.length + (actions ? 1 : 0)} 
                  align="center"
                  sx={{ 
                    borderBottom: '1px solid #e0e0e0',
                    py: 3
                  }}
                >
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[4, 10, 25]}
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        sx={{
          borderTop: '1px solid #e0e0e0',
          '& .MuiTablePagination-toolbar': {
            paddingRight: 2
          }
        }}
        labelRowsPerPage="Show:"
        labelDisplayedRows={({ from, to, count }) => (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Showing {from} to {to} of {count} entries
          </Typography>
        )}
      />
    </Paper>
  );
};

export default DataGrid;
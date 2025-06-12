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
  Chip
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  ToggleOn as ActiveIcon,
  ToggleOff as InactiveIcon
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
  onToggleStatus,
  actions = true
}) => {
  return (
    <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden',boxShadow:"none", }}>
      <TableContainer>
        <Table stickyHeader aria-label="data grid">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || 'left'}
                  style={{ minWidth: column.minWidth }}
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
                <TableCell align="center" style={{ minWidth: 150 }}>
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <TableRow hover key={row.id || index}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align || 'left'}>
                      {column.render ? column.render(row) : row[column.id]}
                    </TableCell>
                  ))}
                  {actions && (
                    <TableCell align="center">
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        {onView && (
                          <Tooltip title="View">
                            <IconButton onClick={() => onView(row)}>
                              <VisibilityIcon color="info" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {onEdit && (
                          <Tooltip title="Edit">
                            <IconButton onClick={() => onEdit(row)}>
                              <EditIcon color="primary" />
                            </IconButton>
                          </Tooltip>
                        )}
                        {onToggleStatus && (
                          <Tooltip title={row.status === 'Active' ? 'Deactivate' : 'Activate'}>
                            <IconButton onClick={() => onToggleStatus(row)}>
                              {row.status === 'Active' ? (
                                <ActiveIcon color="success" />
                              ) : (
                                <InactiveIcon color="error" />
                              )}
                            </IconButton>
                          </Tooltip>
                        )}
                        {onDelete && (
                          <Tooltip title="Delete">
                            <IconButton onClick={() => onDelete(row)}>
                              <DeleteIcon color="error" />
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
                <TableCell colSpan={columns.length + (actions ? 1 : 0)} align="center">
                  No data available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={totalRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        labelRowsPerPage="Rows per page:"
        labelDisplayedRows={({ from, to, count }) =>
          `Showing ${from} to ${to} of ${count} entries`
        }
      />
    </Paper>
  );
};

export default DataGrid;
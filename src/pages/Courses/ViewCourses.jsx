import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Chip, 
  Button, 
  IconButton, 
  TextField,
  InputAdornment,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import {
  FileCopy as CopyIcon,
  PictureAsPdf as PdfIcon,
  Print as PrintIcon,
  GridOn as ExcelIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
  Search as SearchIcon,
  ViewColumn as ViewColumnIcon
} from '@mui/icons-material';
import DataGrid from '../../Common/DataGrid';

const ViewCourses = () => {
  const coursesData = [
    {
      id: 1,
      courseId: 'OQACSR1004',
      name: 'Hifz e Quran with Tajweed',
      category: 'Level IV',
      duration: '1',
      teacher: 'Usman Mehboob',
      status: 'Deactive'
    },
    {
      id: 2,
      courseId: 'OQACSR1003',
      name: 'Learn Quran with Tajweed',
      category: 'Level-III',
      duration: '1',
      teacher: 'Muhammad Junaid',
      status: 'Active'
    },
    {
      id: 3,
      courseId: 'OQACSR1002',
      name: 'Learn Recitation of Quran',
      category: 'Level-II',
      duration: '1',
      teacher: 'Abdur Rehman',
      status: 'Active'
    },
    {
      id: 4,
      courseId: 'OQACSR1001',
      name: 'Learn Quranic Studies for beginner',
      category: 'Level-I',
      duration: '1',
      teacher: 'Hafiz Muhammad Usman',
      status: 'Active'
    }
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchText, setSearchText] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [columnVisibilityAnchor, setColumnVisibilityAnchor] = useState(null);
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    courseId: true,
    name: true,
    category: true,
    duration: true,
    teacher: true,
    status: true,
    actions: true
  });

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setPage(0); // Reset to first page when searching
  };

  const filteredData = coursesData.filter(course => 
    course.courseId.toLowerCase().includes(searchText.toLowerCase()) ||
    course.name.toLowerCase().includes(searchText.toLowerCase()) ||
    course.category.toLowerCase().includes(searchText.toLowerCase()) ||
    course.teacher.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleColumnVisibilityOpen = (event) => {
    setColumnVisibilityAnchor(event.currentTarget);
  };

  const handleColumnVisibilityClose = () => {
    setColumnVisibilityAnchor(null);
  };

  const toggleColumnVisibility = (columnId) => {
    setVisibleColumns(prev => ({
      ...prev,
      [columnId]: !prev[columnId]
    }));
  };

  const columns = [
    {
      id: 'id',
      label: 'Sr. No',
      align: 'left',
      minWidth: 80,
      render: (row) => `${row.id}.`,
      visible: visibleColumns.id
    },
    {
      id: 'courseId',
      label: 'Course ID',
      align: 'left',
      minWidth: 120,
      sortable: true,
      visible: visibleColumns.courseId
    },
    {
      id: 'name',
      label: 'Course Name',
      align: 'left',
      minWidth: 200,
      sortable: true,
      visible: visibleColumns.name
    },
    {
      id: 'category',
      label: 'Category',
      align: 'left',
      minWidth: 100,
      sortable: true,
      visible: visibleColumns.category
    },
    {
      id: 'duration',
      label: 'Duration',
      align: 'left',
      minWidth: 80,
      render: (row) => `${row.duration} year`,
      visible: visibleColumns.duration
    },
    {
      id: 'teacher',
      label: 'Assign Teachers',
      align: 'left',
      minWidth: 150,
      sortable: true,
      visible: visibleColumns.teacher
    },
    {
      id: 'status',
      label: 'Status(Live)',
      align: 'left',
      minWidth: 100,
      sortable: true,
      render: (row) => (
        <Chip
          label={row.status}
          color={row.status === 'Active' ? 'success' : 'error'}
          size="small"
          variant="outlined"
        />
      ),
      visible: visibleColumns.status
    },
    {
      id: 'actions',
      label: 'Actions',
      align: 'center',
      minWidth: 120,
      render: (row) => (
        <Box display="flex" justifyContent="center">
          <IconButton size="small" onClick={() => handleView(row)}>
            <VisibilityIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => handleEdit(row)}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => handleDelete(row)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      ),
      visible: visibleColumns.actions
    }
  ].filter(column => column.visible);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (columnId) => {
    const isAsc = sortBy === columnId && sortDirection === 'asc';
    setSortDirection(isAsc ? 'desc' : 'asc');
    setSortBy(columnId);
  };

  const handleEdit = (course) => {
    console.log('Edit course:', course);
  };

  const handleDelete = (course) => {
    console.log('Delete course:', course);
  };

  const handleView = (course) => {
    console.log('View course:', course);
  };

  const handleExport = (type) => {
    console.log(`Export as ${type}`);
    handleMenuClose();
  };

  const sortedData = [...filteredData].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">All Courses</Typography>
        <Box>
          <Button 
            variant="outlined" 
            startIcon={<CopyIcon />} 
            onClick={() => handleExport('copy')} 
            sx={{ mr: 1 }}
          >
            Copy
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<ExcelIcon />} 
            onClick={() => handleExport('csv')} 
            sx={{ mr: 1 }}
          >
            CSV
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<ExcelIcon />} 
            onClick={() => handleExport('excel')} 
            sx={{ mr: 1 }}
          >
            Excel
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<PdfIcon />} 
            onClick={() => handleExport('pdf')} 
            sx={{ mr: 1 }}
          >
            PDF
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<PrintIcon />} 
            onClick={() => handleExport('print')}
            sx={{ mr: 1 }}
          >
            Print
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<ViewColumnIcon />} 
            onClick={handleColumnVisibilityOpen}
          >
            Column visibility
          </Button>
        </Box>
      </Box>
      
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="subtitle1">
          Total Courses {filteredData.length}
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: 300 }}
        />
      </Box>
      
      <DataGrid
        columns={columns}
        data={paginatedData}
        page={page}
        rowsPerPage={rowsPerPage}
        totalRows={filteredData.length}
        sortBy={sortBy}
        sortDirection={sortDirection}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        onSort={handleSort}
        actions={false}
      />
    </Box>
  );
};

export default ViewCourses;
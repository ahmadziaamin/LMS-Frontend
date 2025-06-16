import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  IconButton, 
  TextField,
  InputAdornment,
  Chip
} from '@mui/material';
import {
  FileCopy as CopyIcon,
  PictureAsPdf as PdfIcon,
  Print as PrintIcon,
  GridOn as ExcelIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  ViewColumn as ViewColumnIcon
} from '@mui/icons-material';
import DataGrid from '../../Common/DataGrid';

const PendingPayment = () => {
  // Generate 30 dummy student records
  const generateStudents = () => {
    const countries = ['USA', 'Canada', 'UK', 'Australia', 'Pakistan', 'India', 'UAE'];
    const cities = ['New York', 'Toronto', 'London', 'Sydney', 'Karachi', 'Mumbai', 'Dubai'];
    const genders = ['Male', 'Female', 'Other'];
    const statuses = ['Active', 'Pending', 'Rejected'];
    
    return Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      courseId: `STU${1000 + i}`,
      fullName: `Student ${i + 1}`,
      gender: genders[Math.floor(Math.random() * genders.length)],
      country: countries[Math.floor(Math.random() * countries.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
      phoneNo: `+1${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      email: `student${i + 1}@example.com`,
      password: `pass${1000 + i}`,
      status: statuses[Math.floor(Math.random() * statuses.length)]
    }));
  };

  const [studentsData] = useState(generateStudents());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('fullName');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchText, setSearchText] = useState('');
  const [columnVisibilityAnchor, setColumnVisibilityAnchor] = useState(null);
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    courseId: true,
    fullName: true,
    gender: true,
    country: true,
    city: true,
    phoneNo: true,
    email: true,
    password: true,
    status: true,
    actions: true
  });

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setPage(0);
  };

  const filteredData = studentsData.filter(student => 
    student.courseId.toLowerCase().includes(searchText.toLowerCase()) ||
    student.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
    student.email.toLowerCase().includes(searchText.toLowerCase()) ||
    student.phoneNo.includes(searchText)
  );

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
      id: 'fullName',
      label: 'Full Name',
      align: 'left',
      minWidth: 180,
      sortable: true,
      visible: visibleColumns.fullName
    },
    {
      id: 'gender',
      label: 'Gender',
      align: 'left',
      minWidth: 100,
      sortable: true,
      visible: visibleColumns.gender
    },
    {
      id: 'country',
      label: 'Country',
      align: 'left',
      minWidth: 120,
      sortable: true,
      visible: visibleColumns.country
    },
    {
      id: 'city',
      label: 'City',
      align: 'left',
      minWidth: 120,
      sortable: true,
      visible: visibleColumns.city
    },
    {
      id: 'phoneNo',
      label: 'Phone No',
      align: 'left',
      minWidth: 150,
      sortable: true,
      visible: visibleColumns.phoneNo
    },
    {
      id: 'email',
      label: 'Email',
      align: 'left',
      minWidth: 200,
      sortable: true,
      visible: visibleColumns.email
    },
    {
      id: 'password',
      label: 'Password',
      align: 'left',
      minWidth: 150,
      render: (row) => '••••••••', // Masked password
      visible: visibleColumns.password
    },
    {
      id: 'actions',
      label: 'Actions',
      align: 'center',
      minWidth: 150,
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

  const handleView = (student) => {
    console.log('View student:', student);
  };

  const handleEdit = (student) => {
    console.log('Edit student:', student);
  };

  const handleDelete = (student) => {
    console.log('Delete student:', student);
  };

  const handleExport = (type) => {
    console.log(`Export as ${type}`);
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
        <Typography variant="h4">Pending Payment</Typography>
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
          Total Paymet {filteredData.length}
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search students..."
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

export default PendingPayment;
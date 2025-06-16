import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField,
  Button,
  Alert,
  MenuItem,
  InputAdornment,
  IconButton,
   Chip, 
  Menu,
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon,
  Save as SaveIcon,
  CloudUpload as CloudUploadIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
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
import Accordion from '../../Common/ Accordion';
import DataGrid from '../../Common/DataGrid';
const CreateLinks = () => {

 const navigate = useNavigate();
  const [book, setBook] = useState({
    coupanid: 'QQABOK1045',
    coupanName: '',
    discpountType: '',
    status: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (field, value) => {
    setBook(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

   const couponsData = [
      {
        id: 1,
        couponId: 'CPN001',
        couponName: 'Summer Sale',
        couponType: 'Percentage',
        status: 'Active'
      },
      {
        id: 2,
        couponId: 'CPN002',
        couponName: 'New User',
        couponType: 'Fixed Amount',
        status: 'Active'
      },
      {
        id: 3,
        couponId: 'CPN003',
        couponName: 'Holiday Special',
        couponType: 'Free Shipping',
        status: 'Inactive'
      },
      {
        id: 4,
        couponId: 'CPN004',
        couponName: 'Clearance',
        couponType: 'Percentage',
        status: 'Active'
      },
      {
        id: 5,
        couponId: 'CPN005',
        couponName: 'Member Exclusive',
        couponType: 'Fixed Amount',
        status: 'Active'
      }
    ];
  
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortBy, setSortBy] = useState('couponName');
    const [sortDirection, setSortDirection] = useState('asc');
    const [searchText, setSearchText] = useState('');
    const [columnVisibilityAnchor, setColumnVisibilityAnchor] = useState(null);
    const [visibleColumns, setVisibleColumns] = useState({
      id: true,
      couponId: true,
      couponName: true,
      couponType: true,
      status: true,
      actions: true
    });
  
    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
      setPage(0);
    };
  
    const filteredData = couponsData.filter(coupon => 
      coupon.couponId.toLowerCase().includes(searchText.toLowerCase()) ||
      coupon.couponName.toLowerCase().includes(searchText.toLowerCase()) ||
      coupon.couponType.toLowerCase().includes(searchText.toLowerCase())
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
        id: 'couponId',
        label: 'Coupon ID',
        align: 'left',
        minWidth: 120,
        sortable: true,
        visible: visibleColumns.couponId
      },
      {
        id: 'couponName',
        label: 'Coupon Name',
        align: 'left',
        minWidth: 200,
        sortable: true,
        visible: visibleColumns.couponName
      },
      {
        id: 'couponType',
        label: 'Coupon Type',
        align: 'left',
        minWidth: 150,
        sortable: true,
        visible: visibleColumns.couponType
      },
      {
        id: 'status',
        label: 'Status',
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
  
    const handleEdit = (coupon) => {
      console.log('Edit coupon:', coupon);
    };
  
    const handleDelete = (coupon) => {
      console.log('Delete coupon:', coupon);
    };
  
    const handleView = (coupon) => {
      console.log('View coupon:', coupon);
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
   <>
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#333', mb: 3 }}>
      Create Zoom Link
      </Typography>

      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Zoom Link added successfully!
        </Alert>
      )}

      <Paper elevation={3} sx={{ mb: 4, borderRadius: 1, p: 0 }}>
        <Accordion title="Book Information">
          {/* First Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book ID
              </Typography>
              <TextField
                value={book.coupanid}
                onChange={(e) => handleChange('bookId', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Name
              </Typography>
              <TextField
                value={book.coupanName}
                onChange={(e) => handleChange('bookName', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Book Name"
              />
            </Box>
          </Box>
            <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Discount Type
              </Typography>
               <TextField
              select
              value={book.discpountType}
              onChange={(e) => handleChange('discpountType', e.target.value)}
              variant="outlined"
              fullWidth
              size="small"
            >
              <MenuItem value="">Choose Status</MenuItem>
              <MenuItem value="Active">5%</MenuItem>
              <MenuItem value="Inactive">10%</MenuItem>
              <MenuItem value="Inactive">20%</MenuItem>
              <MenuItem value="Inactive">30%</MenuItem>
            </TextField>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
              Status
            </Typography>
            <TextField
              select
              value={book.status}
              onChange={(e) => handleChange('status', e.target.value)}
              variant="outlined"
              fullWidth
              size="small"
            >
              <MenuItem value="">Choose Status</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </TextField>
            </Box>
          </Box>

        
      

    
        
        </Accordion>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'end', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<SaveIcon />}
          onClick={handleSubmit}
          sx={{
            px: 3,
            py: 1,
            fontWeight: 600,
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none'
            }
          }}
        >
          Save  Zoom Link
        </Button>
      </Box>
    </Box>
        <Box sx={{ p: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <Typography variant="h4">All Coupons</Typography>
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
              Total Zoom Link {filteredData.length}
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
   </>
  )
}

export default CreateLinks

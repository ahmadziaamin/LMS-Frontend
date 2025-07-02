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
import Accordion from '../../Common/ Accordion';

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
const UploadsBooks = () => {
    const navigate = useNavigate();
  const [book, setBook] = useState({
    bookId: 'QQABOK1045',
    bookName: '',
    bookStatus: '',
    uploadBookName: '',
    bookAuthor: '',
    bookPrice: 0,
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




    const booksData = [
      {
        id: 1,
        bookId: 'QQABOK1045',
        bookName: 'The Great Gatsby',
        bookAuthor: 'F. Scott Fitzgerald',
        bookPrice: 12.99,
        status: 'Active'
      },
      {
        id: 2,
        bookId: 'QQABOK1046',
        bookName: 'To Kill a Mockingbird',
        bookAuthor: 'Harper Lee',
        bookPrice: 10.50,
        status: 'Active'
      },
      {
        id: 3,
        bookId: 'QQABOK1047',
        bookName: '1984',
        bookAuthor: 'George Orwell',
        bookPrice: 8.75,
        status: 'Inactive'
      },
      {
        id: 4,
        bookId: 'QQABOK1048',
        bookName: 'Pride and Prejudice',
        bookAuthor: 'Jane Austen',
        bookPrice: 9.99,
        status: 'Active'
      },
      {
        id: 5,
        bookId: 'QQABOK1049',
        bookName: 'The Hobbit',
        bookAuthor: 'J.R.R. Tolkien',
        bookPrice: 14.25,
        status: 'Active'
      }
    ];
  
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortBy, setSortBy] = useState('bookName');
    const [sortDirection, setSortDirection] = useState('asc');
    const [searchText, setSearchText] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [columnVisibilityAnchor, setColumnVisibilityAnchor] = useState(null);
    const [visibleColumns, setVisibleColumns] = useState({
      id: true,
      bookId: true,
      bookName: true,
      bookAuthor: true,
      bookPrice: true,
      status: true,
      actions: true
    });
  
    const handleSearchChange = (event) => {
      setSearchText(event.target.value);
      setPage(0);
    };
  
    const filteredData = booksData.filter(book => 
      book.bookId.toLowerCase().includes(searchText.toLowerCase()) ||
      book.bookName.toLowerCase().includes(searchText.toLowerCase()) ||
      book.bookAuthor.toLowerCase().includes(searchText.toLowerCase())
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
        id: 'bookId',
        label: 'Book ID',
        align: 'left',
        minWidth: 120,
        sortable: true,
        visible: visibleColumns.bookId
      },
      {
        id: 'bookName',
        label: 'Book Name',
        align: 'left',
        minWidth: 200,
        sortable: true,
        visible: visibleColumns.bookName
      },
      {
        id: 'bookAuthor',
        label: 'Book Author',
        align: 'left',
        minWidth: 150,
        sortable: true,
        visible: visibleColumns.bookAuthor
      },
      {
        id: 'bookPrice',
        label: 'Book Price',
        align: 'left',
        minWidth: 100,
        sortable: true,
        render: (row) => `$${row.bookPrice.toFixed(2)}`,
        visible: visibleColumns.bookPrice
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
  
    const handleEdit = (book) => {
      console.log('Edit book:', book);
    };
  
    const handleDelete = (book) => {
      console.log('Delete book:', book);
    };
  
    const handleView = (book) => {
      console.log('View book:', book);
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
   <>
     <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#333', mb: 3 }}>
        Add Books
      </Typography>

      {submitSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Book added successfully!
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
                value={book.bookId}
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
                value={book.bookName}
                onChange={(e) => handleChange('bookName', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
                placeholder="Book Name"
              />
            </Box>
          </Box>

          {/* Second Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Image (215x285)
              </Typography>
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start', height: '40px' }}
              >
                Choose file
                <input type="file" hidden />
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Status
              </Typography>
              <TextField
                select
                value={book.bookStatus}
                onChange={(e) => handleChange('bookStatus', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="">Choose Status</MenuItem>
                <MenuItem value="Available">Available</MenuItem>
                <MenuItem value="Unavailable">Unavailable</MenuItem>
              </TextField>
            </Box>
          </Box>

          {/* Third Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Upload Free Book Name
              </Typography>
              <TextField
                select
                value={book.uploadBookName}
                onChange={(e) => handleChange('uploadBookName', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="">Upload Book Name</MenuItem>
                {/* Additional options would go here */}
              </TextField>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Author
              </Typography>
              <TextField
                select
                value={book.bookAuthor}
                onChange={(e) => handleChange('bookAuthor', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
              >
                <MenuItem value="">Book Author</MenuItem>
                {/* Additional options would go here */}
              </TextField>
            </Box>
          </Box>

          {/* Fourth Row */}
          <Box sx={{ display: 'flex', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Related Book Image (310x135)
              </Typography>
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                fullWidth
                sx={{ justifyContent: 'flex-start', height: '40px' }}
              >
                Choose file
                <input type="file" hidden />
              </Button>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                Book Price
              </Typography>
              <TextField
                type="number"
                value={book.bookPrice}
                onChange={(e) => handleChange('bookPrice', e.target.value)}
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Box>
          </Box>

          {/* Fifth Row */}
          <Box sx={{ mb: 2 }}>
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
          Save Book
        </Button>
      </Box>
    </Box>
      <Box sx={{ p: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">All Books</Typography>
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
          Total Books {filteredData.length}
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

      {/* Column Visibility Menu */}
      <Menu
        anchorEl={columnVisibilityAnchor}
        open={Boolean(columnVisibilityAnchor)}
        onClose={handleColumnVisibilityClose}
      >
        {Object.keys(visibleColumns).map((columnId) => (
          <MenuItem key={columnId} onClick={() => toggleColumnVisibility(columnId)}>
            <Box display="flex" alignItems="center">
              {visibleColumns[columnId] ? (
                <Box sx={{ width: 24, height: 24, mr: 1 }}>✓</Box>
              ) : (
                <Box sx={{ width: 24, height: 24, mr: 1 }} />
              )}
              {columnId === 'id' && 'Sr. No'}
              {columnId === 'bookId' && 'Book ID'}
              {columnId === 'bookName' && 'Book Name'}
              {columnId === 'bookAuthor' && 'Book Author'}
              {columnId === 'bookPrice' && 'Book Price'}
              {columnId === 'status' && 'Status'}
              {columnId === 'actions' && 'Actions'}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
   </>
  )
}

export default UploadsBooks

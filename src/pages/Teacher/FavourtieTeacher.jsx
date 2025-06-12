import React, { useState } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import DataGrid from '../../Common/DataGrid';

const FavourtieTeacher = () => {
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
      teacher: 'Haifz Muhammad Usman',
      status: 'Active'
    }
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');


  const columns = [
    {
      id: 'id',
      label: 'Sr. No',
      align: 'left',
      minWidth: 80,
      render: (row) => `${row.id}.`
    },
    {
      id: 'courseId',
      label: 'Course ID',
      align: 'left',
      minWidth: 120,
      sortable: true
    },
    {
      id: 'name',
      label: 'Course Name',
      align: 'left',
      minWidth: 200,
      sortable: true
    },
    {
      id: 'category',
      label: 'Category',
      align: 'left',
      minWidth: 100,
      sortable: true
    },
    {
      id: 'duration',
      label: 'Duration',
      align: 'left',
      minWidth: 80,
      render: (row) => `${row.duration} year`
    },
    {
      id: 'teacher',
      label: 'Assign Teachers',
      align: 'left',
      minWidth: 150,
      sortable: true
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
        />
      )
    }
  ];


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

  const handleToggleStatus = (course) => {
    console.log('Toggle status for course:', course);

  };

  const sortedData = [...coursesData].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Paginate data
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
       Favourtie Teachers
      </Typography>
      <DataGrid
        columns={columns}
        data={paginatedData}
        page={page}
        rowsPerPage={rowsPerPage}
        totalRows={coursesData.length}
        sortBy={sortBy}
        sortDirection={sortDirection}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        onSort={handleSort}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        onToggleStatus={handleToggleStatus}
      />
    </Box>
  );
};

export default FavourtieTeacher;
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function Table(props){
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'Company', headerName: 'Company', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    { field: 'message1', headerName: 'Message 1', type: 'date', width: 90},
    { field: 'message2', headerName: 'Message 2', type: 'date', width: 90},
    { field: 'message3', headerName: 'Message 3', type: 'date', width: 90},
    { field: 'message4', headerName: 'Message 4', type: 'date', width: 90},
    { field: 'message5', headerName: 'Message 5', type: 'date', width: 90},
    { field: 'message6', headerName: 'Message 6', type: 'date', width: 90},
    { field: 'message7', headerName: 'Message 7', type: 'date', width: 90},
    { field: 'message8', headerName: 'Message 8', type: 'date', width: 90},
    { field: 'message9', headerName: 'Message 9', type: 'date', width: 90},
    { field: 'message10', headerName: 'Message 10', type: 'date', width: 90},
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]

  return (
    <div>
      <div style={{ height: 400, width: '50%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection />
      </div>
    </div>
  );
}

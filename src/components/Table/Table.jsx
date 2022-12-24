import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData('Chicken Fri', '18908242', '25 December 2022', 'Approved'),
  createData('Big Baza Bang', '18908243', '25 December 2022', 'Approved'),
  createData('IceCream', '18908244', '25 December 2022', 'Pending'),
  createData('Cupcake', '18908245', '25 December 2022', 'Delivered'),
];

export default function DenseTable() {
  return (
    <div className='Table'>
      <h3>Recent Orders</h3>

      <TableContainer
        component={Paper}
        style={{ boxShadow: '0px 13px 20px 0px #80808029' }}
      >
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align='left'>Tracking ID</TableCell>
              <TableCell align='left'>Date</TableCell>
              <TableCell align='left'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='left'>{row.trackingId}</TableCell>
                <TableCell align='left'>{row.date}</TableCell>
                <TableCell align='left'>{row.status}</TableCell>
                <TableCell align='left'>{row.protein}</TableCell>
                <TableCell align='left'>Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

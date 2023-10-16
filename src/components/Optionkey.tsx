import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


interface Column {
  id: 'sno' | 'name' | 'image';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'sno', label: 'Sno', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'image',
    label: 'Image',
    minWidth: 170,
    align: 'right'
  }
];

interface Data {
  sno: number;
  name: string;
  image: string;
}

function createData(
  sno: number,
  name: string,
  image: string
): Data {
  return { sno, name, image};
}

const rows = [
  createData(1, 'idproof', 'logo'),
  createData(2, 'addressproof', 'logo'),
  createData(3, 'state', 'logo'),
  createData(4, 'city', 'logo'),
  createData(5, 'idproof', 'logo'),
  createData(6, 'idproof', 'logo'),
  createData(7, 'idproof', 'logo'),
  createData(8, 'idproof', 'logo'),
  createData(9, 'idproof', 'logo'),
  createData(10, 'idproof', 'logo'),
  createData(11, 'idproof', 'logo'),
  createData(12, 'idproof', 'logo'),
  createData(13, 'idproof', 'logo'),
  createData(14, 'idproof', 'logo'),
  createData(15, 'idproof', 'logo')
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();


  const handleClick = () => {
    navigate("/Createoptionkey")
  }

  return (
    <>
    <text className="title-optionkey">Options Key</text>
    <div className="add-button">
        <Button onClick={handleClick}  variant="contained">Add</Button>
    </div>
    <Paper  className="option-key-table"  >    
    
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table  stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.sno}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      
    </Paper>
    </>
  );
}

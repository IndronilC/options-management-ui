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
  id: 'sno' | 'lookup' | 'lookupvalue' | 'optionkey' | 'parent' | 'image';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'sno', label: 'Sno', minWidth: 170 },
  { id: 'lookup', label: 'Look Up', minWidth: 100 },
  { id: 'lookupvalue', label: 'Look Value', minWidth: 100 },
  { id: 'optionkey', label: 'Optionkey', minWidth: 100 },
  { id: 'parent', label: 'Parent', minWidth: 100 },
  { id: 'image',label: 'Image',minWidth: 170,align: 'right'}
];

interface Data {
  sno: number;
  lookup: string;
  lookupvalue: string;
  optionkey: number;
  parent: number;
  image: string;
}

function createData(
  sno: number,
  lookup: string,
  lookupvalue: string,
  optionkey: number,
  parent: number,
  image: string

): Data {
  return { sno, lookup,lookupvalue,optionkey,parent, image};
}

const rows = [
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(2, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage'),
  createData(1, 'Aadhar Card', 'aadharcard',1,1,'aadharimage')
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
    navigate("/Createoptionlookup")
  }

  return (
    // <div className="option-key-table">
    <>
    <text className="title-optionkey">Options Lookup</text>
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
    // </div>
  );
}

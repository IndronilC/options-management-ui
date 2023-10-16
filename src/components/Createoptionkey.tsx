import * as React from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import tick from '../../src/assests/tickimage.png';

export default function ValidationTextFields() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOkClick = () => {
    navigate("/");
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  return (
    <>
      <text  className="title-optionkey">Create OptionKey</text>
    <Box
    className="box-createoptionkey"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     

      <div>
        <TextField
          error
          id="outlined-error"
          label="Name"
          defaultValue=""
        />
        <TextField
          error
          id="outlined-error"
          label="Image"
          defaultValue=""
          helperText="Incorrect entry."
        />
      </div>  
     
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          // anchorOrigin={{
          //   vertical: 'bottom',
          //   horizontal: 'left',
          // }}
          className=""
        >
          <div className="popup-ok">
            <img src={tick} className='tickimg' alt="tick" />
            <label className="text">Option Key Created successfully </label>
            <button onClick={handleOkClick} className="button-ok" >OK</button>
          </div>
        </Popover>
     
    </Box>
    <div className="button-createoptionkey">
      <Button onClick={handleClick}  variant="contained">Submit</Button>
    </div>
    </>
  );
}

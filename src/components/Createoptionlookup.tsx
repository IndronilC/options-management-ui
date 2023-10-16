import "../App.css";
import React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import tick from "../../src/assests/tickimage.png";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, FormControl, InputLabel } from "@mui/material";

const Createoptionlookup = () => {
  const navigate = useNavigate();

  const [age, setAge] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOkClick = () => {
    navigate("/Optionlookup");
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <text className="title-optionkey">Create Option Lookup</text>
      <FormControl fullWidth className="form-optionlookup">
        <div className="row1-optionlookup">
          <div className="input-lookup">
            <TextField label="Name" type="text" />

            <TextField label="Name" className="input-lookupvalue" />
          </div>
        </div>
        <br />
        <div className="row2-optionlookup">
          <TextField label="age" defaultValue="" />
          <InputLabel id="select-optionkey">Age</InputLabel>
          <Select
            className="select-optionkey"
            // labelId="select-optionkey"
            id="optionkey"
            label="Age"
            value={age}
            // {...register("optionkey",{
            //   required:"option key is required...",
            // })}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </div>
        <br />
        <div className="row3-optionlookup">
          <TextField id="outlined-error" label="age" defaultValue="" />

          <InputLabel id="demo-simple-select-label">Age</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            className="select-optionkey"
            //   onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>

        <div className="button-createoptionlookup">
          <Button onClick={handleClick} variant="contained">
            Submit
          </Button>
        </div>
      </FormControl>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className="popup"
      >
        <div className="popup-ok">
          <img src={tick} className="tickimg" alt="tick" />
          <label className="text">Option Lookup Created successfully </label>
          <button onClick={handleOkClick} className="button-ok">
            OK
          </button>
        </div>
      </Popover>
    </div>
  );
};

export default Createoptionlookup;

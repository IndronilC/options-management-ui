import * as React from "react";
import "../App.css";
import Popover from "@mui/material/Popover";
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'

export default function ValidationTextFields() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOkClick = () => {
    navigate("/");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const form = useForm();

  return (
    <div>
      <text className="title-optionkey">Create OptionKey</text>

      <form className="form-optionkey">

        <div className="row1-optionkey">
          <div className="name-div">
            <label htmlFor="name">Name</label>
            <input className="input-name" type="text" id="name" name="name" />
          </div>

          <div className="image-div">
            <label htmlFor="name">Image</label>
            <input
              className="input-image"
              type="text"
              id="image"
              name="image"
            />
          </div>
        </div>

        <button className="button-optionkey">Submit</button>
      
      </form>
    </div>
  );
}

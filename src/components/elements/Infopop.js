import Popover from "@material-ui/core/Popover";

import { useRef, useState } from "react";

const Infopop = (props,{text}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const reference = useRef();

  const handleClick = () => {
    setAnchorEl(reference.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <span
        aria-describedby={id}
        color="black"
        size="medium"
        className="hover:bg-gray-200 m-2  bg-white rounded-full cursor-pointer"
        onClick={handleClick}
        ref={reference}
      >
          {props.text}
      </span>
      <Popover
        id={id}
        className=" text-xs"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
           {props.children}
        
      </Popover>
    </div>
  );
};

export default Infopop;

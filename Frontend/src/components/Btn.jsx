import React from "react";
import Button from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";

const Btn = (props) => {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Button
          variant="contained"
          onClick={props.onClick}
          className="btn"
        >
          {props.children}
        </Button>
      </StyledEngineProvider>
    </>
  );
};

export default Btn;
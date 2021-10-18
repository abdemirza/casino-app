import { Button, Grid} from "@mui/material";
import React, { useState } from "react";
import ResultTable from "./ResultTable";
import SlotMachine from "./SlotMachine";

const Body = () => {
  const [open, setOpen] = useState(false);
  // const onOpenHandler = () => {
  //     setOpen(true);
  // }
  // const onCloseHandler = () => {
  //     setOpen(false);
  // }
  return (
    <Grid container style={{padding:'1rem',justifyContent: 'center',minHeight:400,marginBottom:60}}>
      <Button
        variant="contained"
        style={{ width: "15rem", height: "3rem" }}
        onClick={() => setOpen(true)}
      >
        Begin the game
      </Button>
      <SlotMachine open={open} setOpen={setOpen} />
      <ResultTable />
    </Grid>
  );
};

export default Body;

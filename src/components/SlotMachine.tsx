import {
  Button,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { customAlphabet } from "nanoid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { State } from "../state/reducers";
const nanoid = customAlphabet("1234567890", 10);

const SlotMachine = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  const dispatch = useDispatch();

  const { jackpot, same, pair, spin, debug, gameOverReducer, addData } =
    bindActionCreators(actionCreators, dispatch);

  const { balance, gameOver,gameData } = useSelector((state: State) => state.game);
  const arr: Array<any> = ["♠", "♥", "♦", "♣"];
  const [slotOne, setSlotOne] = useState("");
  const [slotTwo, setSlotTwo] = useState("");
  const [slotThree, setSlotThree] = useState("");

  const randomFace = () => {
    const num = Math.floor(Math.random() * arr.length);
    return arr[num];
  };
  const addToTable = () => {
    const time = new Date().toLocaleTimeString();
    const tableData = { time, id: nanoid(), slotOne, slotTwo, slotThree };
    addData(tableData);
    localStorage.setItem('gameData',JSON.stringify(gameData))
  };
  useEffect(() => {
    if (balance <= 0)
    {
      localStorage.setItem('gameData',JSON.stringify(gameData))
       gameOverReducer();
    }
    else if (slotOne === "") {
    } else if (
      slotOne === slotTwo &&
      slotTwo === slotThree &&
      slotOne === arr[0]
    ) {
      addToTable();
      jackpot();
    } else if (slotOne === slotTwo && slotTwo === slotThree) {
      addToTable(); 
      same();
    } else if (
      slotOne === slotTwo ||
      slotOne === slotThree ||
      slotTwo === slotThree
    ) {
      addToTable();
      pair();
    }
    else
    addToTable();
  }, [slotOne, slotTwo, slotThree, gameOver]);

  const playHandler = () => {
    setSlotOne(randomFace);
    setSlotTwo(randomFace);
    setSlotThree(randomFace);
    spin();
  };

  return (
    <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
      <DialogTitle id="alert-dialog-slide-title">
        {"Play the slot Machine"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Click Spin to start the Game !! Beware !!! Each spin will cost you $2.
        </DialogContentText>
      </DialogContent>
      <Grid
        container
        alignItems="center"
        style={{ width: "100%", padding: "2rem" }}
        direction="column"
      >
        <Grid
          container
          xs={12}
          md={8}
          direction="row"
          style={{ width: "100%" }}
          justifyContent="space-between"
        >
          <Grid item style={{ fontSize: 80 }}>
            {slotOne}
          </Grid>
          <Grid item style={{ fontSize: 80 }}>
            {slotTwo}
          </Grid>
          <Grid item style={{ fontSize: 80 }}>
            {slotThree}
          </Grid>
        </Grid>
        <Grid container justifyContent="space-evenly">
          <Button
            disabled={gameOver}
            variant="contained"
            onClick={() => playHandler()}
          >
            {gameOver ? "Game Over !" : "Spin"}
          </Button>
          <Button variant="contained" color="secondary" onClick={() => debug()}>
            Debug
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default SlotMachine;

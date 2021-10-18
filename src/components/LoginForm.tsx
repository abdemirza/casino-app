import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { useDispatch } from "react-redux";

export default function LoginForm({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {

  const dispatch = useDispatch();

  const { login } =
    bindActionCreators(actionCreators, dispatch);

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    login({username,email,password})
    handleClose();
    localStorage.setItem('user',JSON.stringify({username,email,password}))
    setUsername('');
    setPassword('');
    setEmail('');
  }
  return (
    <div style={{ width: 800 }}>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Log In!</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="outlined"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions style={{ flex: 1, justifyContent: "center" }}>
          <Button
            style={{ width: "47%" }}
            variant="contained"
            color="error"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{ width: "47%" }}
            variant="contained"
            onClick={()=>handleLogin()}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

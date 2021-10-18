import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";

export default function Header() {
  const balance = useSelector((state:State)=>state.game.balance)
  const user = useSelector((state:State)=>state.game.user)
  console.log(user)
  const [openLogin, setOpenLogin] = React.useState(false);
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Abuzar Mirza
          </Typography>
          <Typography style={{ padding: "0.5rem" }}>$ {balance.toFixed(2) }</Typography>
          <Button
            onClick={() => setOpenLogin(true)}
            color="inherit"
            startIcon={<AccountCircleIcon />}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <LoginForm open={openLogin} setOpen={setOpenLogin} />
    </Box>
  );
}

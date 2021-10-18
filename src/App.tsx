import { Button, CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SlotMachine from "./components/SlotMachine";
import { actionCreators } from "./state";
import { login } from "./state/action-creators";
import { State } from "./state/reducers";

const App = () => {

  const [user,setUser] = useState({})
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.game);
  console.log(state);
  useEffect(() => {
    const userDetails=localStorage.getItem('user')
    if (userDetails) {
      const user= JSON.parse(userDetails);
      const {email,password,username} = user
      console.log({email,password,username})
      login({email,password,username});
    }
  });
  return (
    <div>
      <Header />
      <Body />
      <Footer />
      <CssBaseline />
    </div>
  );
};

export default App;

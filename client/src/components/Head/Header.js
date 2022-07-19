import React from "react";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import Logo from "../../img/Logo1logo.png";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <img className="logo" src={Logo} alt="logo" />

        <Stack className="navBar" direction="row" alignItems="left" spacing={2}>
          <Button className="navbutton" onClick={() => navigate(`login`)}>
            Log In
          </Button>
          <Button className="navbutton"  onClick={() => navigate(`register`)}>
            {" "}
            Sign Up
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

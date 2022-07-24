import React from "react";
import { AppBar, Toolbar, Stack } from "@mui/material";
import Logo from "../../../img/Logo1.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar className="NavBar toolBar" position="sticky">
      <Toolbar>
        <img className="logo" src={Logo} alt="logo" />
        <Stack className="navBarLeft ">
          <TextField
            className="textField" 
            label="Search"
            
          />
          <SearchIcon className="searchIcon new"></SearchIcon>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

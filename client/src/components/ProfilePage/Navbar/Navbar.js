import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import { Stack } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="MuiAppBar-colorPrimary toolbar new">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
        ></IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          STRONGER <br />
          TOGETHER
        </Typography>
        <Stack className="navleft new style">
          <Badge className="mailbag new" badgeContent={4} color="primary">
            <MailIcon color="action" />
          </Badge>
          <TextField
            className="textField"
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />
          <SearchIcon className="searchIcon new"></SearchIcon>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

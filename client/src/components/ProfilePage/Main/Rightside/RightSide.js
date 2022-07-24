// RightSide:
// side bar menu (1.Feedpage, hangsout, marketplace, blog, chat. 2. Your account, Settings, logout, help)
//
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DraftsIcon from "@mui/icons-material/Drafts";
import ChatIcon from "@mui/icons-material/Chat";
import FeedIcon from "@mui/icons-material/Feed";
import PeopleIcon from "@mui/icons-material/People";
import "./RightSide.css";
import { useNavigate } from "react-router-dom";

const RightSide = () => {
  const navigate = useNavigate();

  return (
    <Box className="new" sx={{ width: "100%", maxWidth: 360 }}>
      <nav aria-label="main mailbox folders">
        <List className="rightsidetop">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Feed Page"
                onClick={() => navigate(`feedpage`)}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Hangouts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AddShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>

      <Divider className=" Divider MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />

      <nav aria-label="secondary mailbox folders">
        <List className="rightsidebottom">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Your Account" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default RightSide;

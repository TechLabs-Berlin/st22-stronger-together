import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import ChatIcon from "@mui/icons-material/Chat";
import "./RightSide.css";

const RightSide = () => {
  return (
    <Box className="new" sx={{ width: "100%", maxWidth: 360, }}>
      <nav aria-label="main mailbox folders">
        <List className="rightsidetop">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <FeedIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Feed" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* <FeedIcon /> */}
              </ListItemIcon>
              <ListItemText primary="Hangouts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
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

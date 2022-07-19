//LeftSideBottom has User info: date of Birth, home country, current user location, languagies, interests, description about user, what does a user looking for
import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./LeftSideBottom.css";

const LeftSideBottom = () => {
  return (
    <section className="leftBottom">
      <div className="abovedivider"></div>
      <Divider className=" Divider MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />
      <div className="basicInfoMain">
        <div className="basicInfo">
          <Typography>Basic info:</Typography>
          <Divider variant="middle" />
        </div>

        <div className="basicInfochild">
          <p>Birthday:</p>
          <div className="birthday">
            <TextField id="outlined-basic" label="Day" variant="outlined" />
            <TextField id="outlined-basic" label="Month" variant="outlined" />
            <TextField id="outlined-basic" label="Year" variant="outlined" />
          </div>
        </div>
        <div className="basicInfochild">
          <p>Originally from:</p>
          <div className="originallyfrom">
            <TextField
              id="outlined-basic"
              label="Select your nationality"
              variant="outlined"
            />
          </div>
        </div>
        <div className="basicInfochild">
          <p>Current Location:</p>
          <div className="currentlocation">
            <TextField id="outlined-basic" label="Country" variant="outlined" />
            <TextField id="outlined-basic" label="City" variant="outlined" />
          </div>
        </div>
        <div className="basicInfochild">
          <p>Language:</p>
          <div className="language">
            <TextField
              id="outlined-basic"
              label="Select your language"
              variant="outlined"
            />
          </div>
        </div>
      </div>

      <Divider className=" Divider MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />

      <div className="basicInfoMain1">
        <div className="basicInfo1">
          <Typography>Looking for:</Typography>
          <Divider variant="middle" />
        </div>
        <div className="lookingforButton">
          <Button>Advice</Button>
          <Button>Meet People</Button>
          <Button>Hangouts</Button>
          <Button>Marketplace</Button>
          <Button>Forum</Button>
          <Button>Things To Do</Button>
        </div>
        <div className="othersfield">
          <TextField id="outlined-basic" label="Others" variant="outlined" />
        </div>
      </div>
      <Divider className=" Divider MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />
      <div className="basicInfoMain1">
        <div className="basicInfo1">
          <Typography>Interests:</Typography>
          <Divider variant="middle" />
        </div>
        <div className="lookingforButton">
          <Button className="MuiButtonBase-root MuiButton-root MuiButton-text">
            Sport
          </Button>
          <Button className="MuiButtonBase-root MuiButton-root MuiButton-text">
            Games
          </Button>
          <Button className="MuiButtonBase-root MuiButton-root MuiButton-text">
            Children
          </Button>
          <Button className="MuiButtonBase-root MuiButton-root MuiButton-text">
            Music
          </Button>
          <Button className="MuiButtonBase-root MuiButton-root MuiButton-text">
            Food
          </Button>
          <Button className="MuiButtonBase-root MuiButton-root MuiButton-text">
            Reading
          </Button>
          <Button className="MuiButtonBase-root MuiButton-root MuiButton-text">
            Art
          </Button>
          <Button className="MuiButtonBase-root MuiButton-root MuiButton-text">
            Theater
          </Button>
        </div>
        <div className="othersfield">
          <TextField id="outlined-basic" label="Others" variant="outlined" />
        </div>
      </div>
      <Divider className=" Divider MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />
      <div className="aboutyou">
        <Typography>About you:</Typography>
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <Divider className=" Divider MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />
      <div className="aboutyou">
        <Typography>You offer:</Typography>
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <Divider className=" Divider MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />
    </section>
  );
};

export default LeftSideBottom;

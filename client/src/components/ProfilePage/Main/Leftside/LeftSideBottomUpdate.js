import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./LeftSideBottom.css";

import { doc } from "firebase/firestore";
import { useFirestoreDocData, useFirestore, useSigninCheck, getFirestore } from "reactfire";
import {getAuth} from 'firebase/auth'

  
const LeftSideBottomUpdate = () => {
  const user = getAuth().currentUser;

  const userRef = doc(useFirestore(), "userProfiles", user.uid);
  const { status, data } = useFirestoreDocData(userRef);

  if (status === "loading") {
    return <p>Fetching user information...</p>;
  };

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
            <span>Day: </span><span>data.birthdayDay</span>
            <span>Month:</span><span>data.birthdayMonth</span>
            <span>Year:</span><span>data.birthdayYear</span>
          </div>
        </div>
        <div className="basicInfochild">
          <p>Originally from:</p>
          <div className="originallyfrom">
            <TextField
              id="outlined-basic"
              label="Nationality"
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

export default LeftSideBottomUpdate;

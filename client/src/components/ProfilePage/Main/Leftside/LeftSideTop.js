// Component containes Fisrt and last Name of a user + profile picture

import React from "react";
import Divider from "@mui/material/Divider";
import "./LeftSideTop.css";

// Firebase

import { doc } from "firebase/firestore";
import {
  useFirestoreDocData,
  useFirestore,
  useSigninCheck,
  getFirestore,
} from "reactfire";
import { getAuth } from "firebase/auth";

const LeftSideTop = () => {
  // TODO: Use not hardcoded user
  // const { data: signinResult } = useSigninCheck();
  const user = getAuth().currentUser;

  const userRef = doc(useFirestore(), "userProfiles", user.uid);
  const { status, data } = useFirestoreDocData(userRef);

  if (status === "loading") {
    return <p>Fetching user information...</p>;
  }

  return (
    <section className="leftTop">
      <div className="yourProfilemain">
        <h2 className="yourprofile">Your Profile</h2>
      </div>
      <Divider className=" Divider MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root" />
      <div className="profilePicture">
        <div>
          <img
            className="profileimage"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="profile_pictre"
          ></img>
        </div>
        <div>
          <h3>{data.firstName}</h3>
          <h4>{data.lastName}</h4>
        </div>
      </div>
    </section>
  );
};

export default LeftSideTop;

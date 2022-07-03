import React from "react";
import Divider from "@mui/material/Divider";
import "./LeftSideTop.css";

const LeftSideTop = () => {
  return (
    <section className="leftTop">
      <div className="yourProfilemain">
        <h2 className="yourprofile">Your Profile</h2>
      </div>
      <Divider className=" Divider MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root"/>
      <div className="profilePicture">
        <div>
          <img className="profileimage"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="profile_pictre"
          ></img>
        </div>
        <div>
          <h3>Name</h3>
          <h4>Gender</h4>
        </div>
      </div>
    </section>
  );
}

export default LeftSideTop;
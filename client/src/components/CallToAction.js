import React from "react";
import SignUpIllustration from "../img/Group5798SignUp.png";
import { Button } from "@mui/material";
//import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

const callToAction = () => {
  //const navigate = useNavigate();
  return (
    <div className="container">
      <img
        className="SignUp"
        src={SignUpIllustration}
        width="50%"
        height="100%"
        alt="Illustration Sign Up"
      />
      <Button className="navButton signUp  ">Sign Up</Button>
    </div>
  );
};

export default callToAction;

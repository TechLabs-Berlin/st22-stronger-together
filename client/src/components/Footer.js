import React from "react";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";
import Logo from "../img/footer_logo.png";
import facebook from "../img/facebook_logo.png";
import instagram from "../img/instagram_logo.png";
import twitter from "../img/twitter_logo.png";
import linkedIn from "../img/linkedIn_logo.png";
import "./Footer.css";
import { useNavigate } from "react-router-dom";




const Footer = () => {
  const navigate = useNavigate();

  return (
    <AppBar className="footer toolBar" position="sticky">

      <Toolbar className="footerlogos">
        <img className="footerlogo" src={Logo} alt="logo" />

        <Stack className="social_medial" direction="row" alignItems="left" spacing={2}>
        <img src={facebook} alt="facebooklogo" />
        <img src={instagram} alt="instagramlogo" />
        <img src={twitter} alt="twitterlogo" />
        <img  src={linkedIn} alt="linkedInlogo" />
        </Stack>
        
      </Toolbar>
      <div className="footer_text">
        <span>© 2022</span>
        <span>Imprint</span>
        <span>Term of Use</span>
        <span>help</span>
        <span>privacy notice</span>
        <span>data preferences</span>
      </div>
      
    </AppBar>

    );
};

export default Footer;

import React from "react";
import "./hero.css";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import IllustrationTravelers from "../img/LandingPageTravelers.png";

const Hero = () => {
  return (
    <Grid className="hero strong" container spacing={2}>
      <Grid xs={6}>
        <Container>
          
          <h4 className="hero_text">
            Are you a refugee? <br /> Do you recently moved to Berlin to start a
            new life? <br />
            Do you need help? <br />
          </h4>
          <p className="hero_text">
            With <span>stronger together</span> you <br/> can
            <span className="localpeople">connect with local people</span> and <br /> people in similar
            situation. <br /> Meet meet people who can help you <br/> to discover the
            city, solve dat to day <br /> problems, and ultimately: build a <br />
            community of stronger people.
          </p>
        </Container>
      </Grid>
      <Grid xs={6}>
        <Container>
          <img
            className="hero_pic"
            src={IllustrationTravelers}
            width="90%"
            height="400"
            alt="picture of a travelers"
          />
        </Container>
      </Grid>
    </Grid>
  );
};

export default Hero;

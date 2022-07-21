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
          <h1 className="hero_text title"> STRONGER TOGETHER</h1>
          <p className="hero_text">
            Recently arrived refugees, are often at a loss and feel isolated
            when they need to start a new life in Berlin. With a social
            platform, they will be able to connect with local people and other
            refugees or migrants who can help them discover the city, solve day
            to day problems, and ultimately: build a community.{" "}
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

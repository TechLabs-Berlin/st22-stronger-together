import React from "react";
import { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

// 1) Not created variable
// 2) Invalid syntax for objects
// 3) Use an array instead
// 4) Don't mix class and function components syntaxes

const options = [
  {
    label: "Log in to the App",
    icon: "https://cdn-icons-png.flaticon.com/512/6238/6238893.png",
  },
  {
    label: "Match your profiles",
    icon: "https://cdn-icons.flaticon.com/png/512/4425/premium/4425977.png?token=exp=1656654961~hmac=16b35734d35a4bc5d9f9621b819e607d",
  },
  {
    label: "Connect with others",
    icon: "https://cdn-icons.flaticon.com/png/512/4598/premium/4598041.png?token=exp=1656655053~hmac=8322cc1958d571a9036eee9d28bc735b",
  },
];

const ExplainHero = () => {
  return (
    <Grid className="hero_s" container spacing={2} margin={0}>
      <h1>HOW DOES IT WORK</h1>
      {options.map((option) => (
        <Grid xs={4}>
          <Container>
            <img src={option.icon} />
            <p>{option.label}</p>
          </Container>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExplainHero;

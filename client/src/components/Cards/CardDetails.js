import React from "react";
import "./Cards.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MeetPeople from "../../img/MeetPeople.png";
import Hangouts from "../../img/HangoutsImage.png";
import MarketPlace from "../../img/MarketPlace.png";

const CardDetails = (props) => {
  return (
    <Card className="cardmain">
      <CardContent className="card_content">
        <img className="meetpeople" src={MeetPeople} alt="peoples_image" />
        <Typography className="text" gutterBottom variant="h5" component="div">
          Meet People
        </Typography>
      </CardContent>
      <CardContent className="card_content">
        <img className="hangouts" src={Hangouts} alt="peoples_image" />
        <Typography className="text" gutterBottom variant="h5" component="div">
          Hangouts
        </Typography>
      </CardContent>
      <CardContent className="card_content">
        <img className="marketplace" src={MarketPlace} alt="peoples_image" />
        <Typography className="text" gutterBottom variant="h5" component="div">
          Marketplace
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardDetails;

<CardActions>
  <Button size="small">Learn More</Button>
</CardActions>;

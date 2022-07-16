import React from "react";
import "./FeedLeftTop.css";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { height } from "@mui/system";

const FeedLeftTop = () => {
  return (
    <section className="feedLeftTop">
      <Card className="interest">
        <div className="avatar">
          <Avatar src="/broken-image.jpg" sx={{ width: 85, height: 85 }} />
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Interest"
              multiline
              rows={2}
              defaultValue="I'm interested in..."
            />
          </div>
        </Box>
      </Card>

      <Card className="feedlinks">
        <Button className="feedbutton">I seek</Button>
        <Button className="feedbutton">I offer</Button>
        <Button className="feedbutton">message</Button>
        <Button className="feedbutton">Recommendation</Button>
        <Button className="feedbutton">Event</Button>
      </Card>
      <div>
        <Card className="iseek-community newstyle">
          <div className="iseek-Text">
            <p>I Seek - Community</p>
          </div>

          <div className="IseekInfo">
            <div className="avatar">
              <Avatar src="/broken-image.jpg" sx={{ width: 85, height: 85 }} />
            </div>

            <div>
              <h5>Help with anmeldung appointment</h5>
              <p>
                by Pablo U, from Berlin, <span>2 hours ago</span>
              </p>
            </div>
          </div>

          <CardContent>
            <Typography variant="body2" color="text.secondary" component="p">
              {
                "Hello everyone, I am looking for someone to help me with making an appointmentto do my anmeldung, and possibly attending the appointment with me"
              }
            </Typography>

            <div className="empty"></div>
          </CardContent>
        </Card>
      </div>
      <div className="buzzComment">
            <p>buuzzzz</p>
          </div>
          <div className="comment">
          <Avatar className="commentAvatar" src="/broken-image.jpg" sx={{ width: 40, height: 40 }} />
          <FormControl sx={{ width: '45ch'} }>
        <OutlinedInput placeholder="comment" />
      
      </FormControl>
          
          </div>

      <div>
        <Card className="iseek-community newstyle">
          <div className="iseek-Text">
            <p>I Seek - Technology</p>
          </div>

          <div className="IseekInfo">
            <div className="avatar">
              <Avatar src="/broken-image.jpg" sx={{ width: 85, height: 85 }} />
            </div>

            <div>
              <h5>Used smartphone</h5>
              <p>
                by Pablo U, from Berlin, <span>6 hours ago</span>
              </p>
            </div>
          </div>

          <CardContent>
            <Typography variant="body2" color="text.secondary" component="p">
              {
                "Hello everyone, I am looking for someone to help me with a used phone"
              }
            </Typography>

            <div className="empty"></div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeedLeftTop;

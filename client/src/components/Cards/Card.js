import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="make friends"
        height="300"
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFraW5nJTIwZnJpZW5kc3xlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Meet new people
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem mnfmgfmgcmnffgdgfdfgdngfdcgfc mgfdngdgfndsfndx nfdnfc fdnfdxnvx nfxfxdbfx
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

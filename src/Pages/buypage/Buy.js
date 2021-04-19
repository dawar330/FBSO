import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import firebase from "../../firebase/config";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Buy() {
  const [Listings, setListings] = useState([]);
  const list = [];
  useEffect(() => {
    firebase
      .firestore()
      .collection("Listings")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          list.push({ ...doc.data(), ID: doc.id });
        });
        setListings(list);
      });
  }, []);
  return (
    <Grid container spacing={2}>
      {Listings &&
        Listings.map((ad) => {
          return (
            <>
              <Grid item xs={3}>
                <NavLink to={`listing/${ad.ID}`}>
                  <MediaCard list={ad} />
                </NavLink>
              </Grid>
            </>
          );
        })}
    </Grid>
  );
}

function MediaCard(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="ForSale"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.list.address1} <br /> {props.list.address2}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Area : {props.list.area} Beds : {props.list.beds} <br />
            Bath : {props.list.bath} City : {props.list.city}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

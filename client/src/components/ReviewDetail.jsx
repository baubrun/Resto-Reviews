import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { Paper } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

import { restaurantState } from "../redux/restaurantSlice";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 450,
    height: 150,
    margin: "0 64px",
  },
}));

const ReviewDetail = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { restaurants } = useSelector(restaurantState);


  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h5">REVIEWS</Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Carousel
            animation="fade"
            autoPlay={false}
            fullHeightHover={false}
            navButtonsAlwaysVisible={true}
          >
            {restaurants.map((item, idx) => (
              <Card key={idx} className={classes.card}>
                <CardHeader className={classes.info} title="name" />

                <CardContent>
                  <Typography variant="body1">{item.name}</Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

const Item = (props) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
    </Paper>
  );
};

export default ReviewDetail;

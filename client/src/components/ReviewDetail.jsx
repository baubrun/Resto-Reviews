import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";

import { restaurantState } from "../redux/restaurantSlice";

const useStyles = makeStyles((theme) => ({
  card: {
    width: 450,
    height: 150
  },
}));

const ReviewDetail = (props) => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const history = useHistory();



  return props.restaurants.map((item, idx) => (
    <Card key={idx} className={classes.card}>
      <CardHeader className={classes.info} title="name" />

      <CardContent>
        <Typography variant="body1">{item.name}</Typography>
      </CardContent>
    </Card>
  ));
};

export default ReviewDetail;

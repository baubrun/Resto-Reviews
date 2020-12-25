import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";


import {
    restaurantState,
  } from "../redux/restaurantSlice";
  

  const useStyles = makeStyles((theme) => ({
    icon: {
      margin: "0 2px",
    },
    table: {
      margin: "16px 0",
    },
    deleteIcon: {
      color: theme.palette.secondary.light,
    },
    editIcon: {
      color: "#00acc1",
    },
  }));
const RestaurantDetail = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { restaurants, loading } = useSelector(restaurantState);
  

    return (
        
            restaurants.map((item, idx) => (
              <FormControl key={idx}>
                <Card className={classes.root}>
                  <CardHeader className={classes.info} title={item.title} />
    
                  <CardMedia
                    className={classes.img}
                    image={`${process.env.PUBLIC_URL}/images/${item.image}`}                component="img"
                    title={item.title}
                  />
    
                  <CardContent>

                  </CardContent>
    
               
                </Card>
              </FormControl>
            ))
          
        )
}

export default RestaurantDetail

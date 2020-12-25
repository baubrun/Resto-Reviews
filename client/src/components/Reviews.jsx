/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";

import { restaurantState,  } from "../redux/restaurantSlice";

import ReviewDetail from "./ReviewDetail"
import ReviewForm from "./ReviewForm"

const useStyles = makeStyles((theme) => ({
    input: {
      color: theme.palette.secondary.main,
      fontSize: "24px",
    },
    textfield: {
      margin: "16px",
      color: "white",
    },
    button: {
      margin: theme.spacing(1),
    },
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  }));


const Reviews = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { restaurants } = useSelector(restaurantState);
    const classes = useStyles();
    const [reviews, setReviews] = useState([])

    const restaurantId = props.match.params.restaurantId
    console.log('restaurantId :>> ', restaurantId);

    const getReviews = () => {
        const found = restaurants.filter(i => i.id === parseInt(restaurantId))
        return found
    }


  useEffect(() => {
      if (restaurants.length > 0){
        setReviews(getReviews())
      }
  }, [])



    return (
        <Box>
          <ReviewDetail restaurants={reviews}/>
        <ReviewForm />
        </Box>
    )
}

export default Reviews

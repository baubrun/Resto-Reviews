/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import { restaurantState } from "../redux/restaurantSlice";

import ReviewDetail from "./ReviewDetail";
import ReviewForm from "./ReviewForm";



const Reviews = (props) => {
  const { restaurants } = useSelector(restaurantState);
  const [reviews, setReviews] = useState([]);

  const restaurantId = props.match.params.restaurantId;

  const getReviews = () => {
    const found = restaurants.filter((i) => i.id == restaurantId);
    return found;
  };


  useEffect(() => {
    if (restaurants.length > 0) {
      setReviews(getReviews());
    }
  }, []);


  return (
    <Box>
      <ReviewDetail restaurants={reviews} />
      <ReviewForm restaurantId={restaurantId} />
    </Box>
  );
};


export default Reviews;

/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";

import ReviewDetail from "./ReviewDetail";
import ReviewForm from "./ReviewForm";

import { reviewState, listReviews } from "../redux/reviewSlice";



const Reviews = (props) => {
  const dispatch = useDispatch();
  const { reviews } = useSelector(reviewState);

  const restaurantId = props.match.params.restaurantId;


  useEffect(() => {
    dispatch(listReviews(restaurantId))
  }, []);



  return (
    <Box>
      <ReviewDetail reviews={reviews} />
      <ReviewForm restaurantId={restaurantId} />
    </Box>
  );
};


export default Reviews;

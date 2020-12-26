import React from "react";
import Box from "@material-ui/core/Box";

const style = {
  color: "#fff",
  margin: "8px 0 0 8px",
  letterSpacing: "4px",
};

const Rating = (props) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= props.rating) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    } else if (
      i === Math.ceil(props.rating) &&
      !Number.isInteger(props.rating)
    ) {
      stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }

  return (
    <>
      <Box style={style}>{stars} </Box>
    </>
  );
};

export default Rating;

import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.light,
    width: 450,
    height: 150,
    margin: "0 64px",
  },
  cardHeader: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    textAlign: "center",
  },
  cardContent: {
    color: "#fff",
    textAlign: "center",
  },
  title: {
    color: theme.palette.secondary.main,
    fontWeight: "bolder",
    margin: "8px 0",
  },
}));

const ReviewDetail = (props) => {
  const classes = useStyles();

  if (props.reviews.length < 1) {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography className={classes.title} variant="h4">
            REVIEWS
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">
            0
          </Typography>
        </Grid>
      </Grid>
    );
  }


  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography className={classes.title} variant="h4">
            REVIEWS
          </Typography>
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
            {props.reviews.map((item, idx) => (
              <Card key={idx} className={classes.card}>
                <CardHeader className={classes.cardHeader} title={item.name} />

                <CardContent className={classes.cardContent}>
                  <Typography variant="h6">{item.comment}</Typography>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default ReviewDetail;

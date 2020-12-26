/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { createReview } from "../redux/reviewSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 295,
  },
  input: {
    color: "#020202",
    fontSize: "24px",
  },
  textfield: {
    margin: "16px",
    color: "white",
    minWidth: 250,
  },
  textArea: {
    margin: "16px",
    minWidth: 500,
  },
  submit: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  paper: {
    width: "auto",
  },
  cancel: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ff1a1a",
    },
  },
  title: {
    color: theme.palette.primary.main,
    margin: "64px 0 16px 0",
  },
}));



const initValues = {
        comment: "",
        name: "",
        rating: "",
        restaurant_id: "",
}


const ReviewForm = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = useState(initValues);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: values.name,
      comment: values.comment,
      rating: values.rating,
      restaurant_id: props.restaurantId,
    };

    dispatch(createReview(data));
    setValues({initValues});
  };

  
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography className={classes.title} variant="h4">
            ADD A REVIEW
          </Typography>
        </Grid>
      </Grid>
      <Paper className={classes.paper} elevation={3}>
        <form onSubmit={handleSubmit}>
          <Grid
            direction="row"
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item className={classes.textfield}>
              <TextField
                name="name"
                onChange={(evt) => handleChange(evt)}
                placeholder="NAME"
                required
                type="text"
                value={values.name}
                InputProps={{
                  className: classes.input,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                className={classes.textfield}
                name="rating"
                onChange={(evt) => handleChange(evt)}
                placeholder="RATING"
                required
                type="number"
                value={values.rating}
                InputProps={{
                  inputProps: {
                    max: 5,
                    min: 0,
                    className: classes.input,
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <TextField
                className={classes.textArea}
                label="COMMENTS"
                multiline
                rows={10}
                name="comment"
                onChange={(evt) => handleChange(evt)}
                type="text"
                value={values.comment}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                className={classes.submit}
                size="large"
                type="submit"
              >
                SUBMIT
              </Button>
            </Grid>
            <Grid item>
              <Button
                className={classes.cancel}
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => history.push("/")}
              >
                CANCEL
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default ReviewForm;

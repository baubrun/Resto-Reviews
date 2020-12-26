/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UpdateIcon from '@material-ui/icons/Update';

import { restaurantState, updateRestaurant } from "../redux/restaurantSlice";


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
  },
  update: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },  
  },
  paper: {
    width: 550,
    margin: "auto",
  },
  cancel: {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ff1a1a",
    },  
  },
}));

const UpdateRestaurant = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { restaurants } = useSelector(restaurantState);
  const classes = useStyles();
  const [values, setValues] = useState({
    rating: "",
    name: "",
    location: "",
    price_range: "",
  });

  const restaurantUrl = match.params.restaurantId;

  const getRestaurant = () => {
    const found = restaurants.find((i) => i.id === restaurantUrl);
    return found;
  };

  useEffect(() => {
    if (restaurants.length > 0) {
      setValues(getRestaurant());
    }
  }, []);

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
      id: restaurantUrl,
      restaurant: {
        name: values.name,
        location: values.location,
        price_range: values.price_range,
      },
    };

    dispatch(updateRestaurant(data));
    history.push("/");
  };


  return (
    <Paper className={classes.paper} elevation={3}>
      <form onSubmit={handleSubmit}>
        <Grid
          direction="column"
          container
          justify="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Typography variant="h3">UPDATE RESTAURANT</Typography>
          </Grid>
          <Grid item className={classes.textfield}>
            <TextField
              name="name"
              onChange={(evt) => handleChange(evt)}
              label="Name"
              placeholder="NAME"
              required
              type="text"
              value={values.name || ""}
              InputProps={{
                className: classes.input,
              }}
            />
          </Grid>
          <Grid item className={classes.textfield}>
            <TextField
              name="location"
              onChange={(evt) => handleChange(evt)}
              label="Location"
              placeholder="LOCATION"
              required
              type="text"
              value={values.location || ""}
              InputProps={{
                className: classes.input,
              }}
            />
          </Grid>
          <Grid item className={classes.textfield}>
            <TextField
              name="price_range"
              onChange={(evt) => handleChange(evt)}
              label="Price"
              placeholder="PRICE 1-5"
              required
              type="number"
              value={values.price_range || ""}
              InputProps={{
                className: classes.input,
              }}
            />
          </Grid>
          {/* <Grid item>
          <FormControl 
          className={classes.formControl}
          >
            <InputLabel id="rating">RATING</InputLabel>
            <Select
              labelId="rating"
              name="rating"
              value={values.rating || ""}
              onChange={(evt) => handleChange(evt)}
              required
            >
              {[...Array(5).keys()].map((i, idx) => {
                return (
                  <MenuItem key={idx} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid> */}
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              className={classes.update}
              endIcon={<UpdateIcon />}
              size="large"
              type="submit"
            >
              UPDATE
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
  );
};

export default UpdateRestaurant;

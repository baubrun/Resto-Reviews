import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";

import { updateRestaurant } from "../redux/restaurantSlice";

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
  button: {
    margin: theme.spacing(1),
  },
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

const Update = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [values, setValues] = useState({
    rating: "",
    name: "",
    location: "",
    price_range: "",
  });

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
      location: values.location,
      price_range: values.price_range,
      rating: values.rating,
    };

    dispatch(updateRestaurant(data));
    history.push("/restaurants");
  };

  return (
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
            placeholder="NAME"
            required
            type="text"
            value={values.name}
            InputProps={{
              className: classes.input,
            }}
          />
        </Grid>
        <Grid item className={classes.textfield}>
          <TextField
            name="location"
            onChange={(evt) => handleChange(evt)}
            placeholder="LOCATION"
            required
            type="text"
            value={values.location}
            InputProps={{
              className: classes.input,
            }}
          />
        </Grid>
        <Grid item className={classes.textfield}>
          <TextField
            name="price_range"
            onChange={(evt) => handleChange(evt)}
            placeholder="PRICE 1-5"
            required
            type="number"
            value={values.price_range}
            InputProps={{
              className: classes.input,
            }}
          />
        </Grid>
        <Grid item>
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
        </Grid>
      </Grid>
    </form>
  );
};

export default Update;

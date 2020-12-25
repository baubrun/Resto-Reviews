import React, { useState } from "react";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { createRestaurant } from "../redux/restaurantSlice";

const useStyles = makeStyles((theme) => ({
  input: {
    color: theme.palette.secondary.main,
    fontSize: "24px",
    minWidth: 250
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

const initValues = {
  name: "",
  location: "",
  price_range: "",
};

const AddRestaurant = () => {
  const dispatch = useDispatch();
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
      location: values.location,
      price_range: values.price_range,
    };

    dispatch(createRestaurant(data));
    setValues(initValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="row" justify="center" alignItems="center">
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
            placeholder="PRICE"
            required
            type="number"
            value={values.price_range}
            InputProps={{
              inputProps: { 
                max: 5, 
                min: 0,
                className: classes.input,
            }
            }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<AddCircleOutlineIcon />}
            size="large"
            type="submit"
          >
            ADD
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddRestaurant;

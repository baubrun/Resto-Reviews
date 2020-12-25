import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#fff",
    fontSize: "24px",
    // marginLeft: "16px"
  },
  textfield: {
    margin: "16px",
  },
  button: {
    margin: theme.spacing(1),
  },
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));

const Search = (props) => {
  const classes = useStyles();

  return (
    <form onSubmit={props.handleSubmit}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item className={classes.textBox}>
          <TextField
            name="name"
            onChange={(evt) => props.handleChange(evt)}
            placeholder="NAME"
            value={props.values.name}
          />
        </Grid>
        <Grid item className={classes.textfield}>
          <TextField
            name="location"
            onChange={(evt) => props.handleChange(evt)}
            placeholder="LOCATION"
            value={props.values.location}
          />
        </Grid>
        <Grid item className={classes.textfield}>
          <TextField
            name="price_range"
            onChange={(evt) => props.handleChange(evt)}
            placeholder="PRICE RANGE"
            value={props.values.price_range}
            />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<LocationSearchingIcon />}
          >
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Search;

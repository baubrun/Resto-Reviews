import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

const Update = () => {
  const [values, setValues] = useState({
    rating: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, rating: event.target.value });
  };

  return (
    <form>
      <Grid direction="row" container justify="center" spacing={2}>
        <Grid item>
          <FormControl>
            <InputLabel id="venue">VENUE</InputLabel>
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

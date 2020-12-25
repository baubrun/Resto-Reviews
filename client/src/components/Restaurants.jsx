import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import MaterialTable from "material-table";
import { useDispatch, useSelector } from "react-redux";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { listRestaurants, createRestaurant, restaurantState } from "../redux/restaurantSlice";

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "0 2px",
  },
  table: {
    margin: "16px 0"
  }
}));

const Restaurants = () => {
  const dispatch = useDispatch();
  const {restaurants} = useSelector(restaurantState)
  const [values, setValues] = useState({
    name: "",
    location: "",
    price_range: "",
  });

  useEffect(() => {
    dispatch(listRestaurants());
  }, [dispatch]);


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
  };
  const classes = useStyles();
  return (
    <>
      <Search
        handleChange={handleChange}
        setValues={setValues}
        submit={handleSubmit}
        values={values}
      />

      <Grid 
      container 
      direction="row" 
      justify="center" 
      alignItems="center"
      className={classes.table}
      >
        <Grid item xs={10}>
          <MaterialTable
            title="RESTO-REVIEWS"
            options={{
              search: false,
              sorting: false,
              draggable: false,
              paging: false,
              headerStyle: {
                backgroundColor: "#546e7a",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bolder",
                letterSpacing: "2px",
              },
              rowStyle: {
                backgroundColor: "#00838f",
                fontSize: "24px",
                color: "white",
                fontWeight: "bolder",
              },
            }}
            columns={[
              { title: "Name", field: "name" },
              { title: "Location", field: "location" },
              { title: "Price", field: "price_range" },
              { title: "id", field: "id", hidden: true },
            ]}
            data={
              restaurants &&
              restaurants.map((item) => {
                return {
                  id: item.id,
                  name: item.name,
                  location: item.location,
                  price_range: [...Array(item.price_range).keys()].map(
                    (i, idx) => {
                      return (
                        <MonetizationOnOutlinedIcon
                          key={idx}
                          className={classes.icon}
                        />
                      );
                    }
                  ),
                };
              })
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Restaurants;

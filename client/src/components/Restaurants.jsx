/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import MaterialTable from "material-table";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import {
  listRestaurants,
  restaurantState,
  removeRestaurant,
} from "../redux/restaurantSlice";

import Spinner from "./Spinner";

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "0 2px",
  },
  table: {
    margin: "16px 0",
  },
  deleteIcon: {
    color: theme.palette.secondary.light,
  },
  editIcon: {
    color: "#00acc1",
  },
}));

const Restaurants = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { restaurants, loading } = useSelector(restaurantState);

  useEffect(() => {
    dispatch(listRestaurants());
  }, []);

  if (loading) {
    return (
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Spinner />
      </Grid>
    </Grid>

    )
  }

  return (
    <>
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
                backgroundColor: "#000",
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
              // { title: "Ratings", field: "ratings" },
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
            actions={[
              {
                icon: () => <EditIcon className={classes.editIcon} />,
                tooltip: "Edit",
                onClick: (evt, rowData) => {
                  history.push(`/restaurants/${rowData.id}/update`);
                },
              },
              {
                icon: () => <DeleteIcon className={classes.deleteIcon} />,
                tooltip: "Delete",
                onClick: (evt, rowData) => {
                  dispatch(removeRestaurant(rowData.id));
                  // console.log(rowData.id);
                },
              },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Restaurants;

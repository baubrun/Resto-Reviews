import React from "react";
import MaterialTable from "material-table";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";





const useStyles = makeStyles((theme) => ({
  icon: {
    margin: "0 2px",
  }
}));







const Restaurants = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
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
              props.restaurants &&
              props.restaurants.map((item) => {
                return {
                  id: item.id,
                  name: item.name,
                  location: item.location,
                  price_range: [...Array(item.price_range).keys()].map((i) => {
                    return <MonetizationOnOutlinedIcon className={classes.icon}/>
                  }),
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

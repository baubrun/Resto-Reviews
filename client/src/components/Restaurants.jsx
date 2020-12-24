import React from "react";
import MaterialTable from "material-table";

import Grid from "@material-ui/core/Grid";

const Restaurants = () => {
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
                fontSize: "20px",
              },
            }}
            columns={[
              { title: "Name", field: "name" },
              { title: "Location", field: "location" },
              { title: "Price", field: "price_range" },
              { title: "id", field: "id", hidden: true },
            ]}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Restaurants;

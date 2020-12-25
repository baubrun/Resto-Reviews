import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Restaurants from "../components/Restaurants";
import {api} from "../api"

const RestaurantContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [values, setValues] = useState({
    name: "",
    location: "",
    price_range: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await api.listRestaurants();
    setRestaurants(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = {
      name: values.name,
      location: values.location,
      price_range: values.price_range,
    };

    const data = await api.createRestaurant(form);
    if (data & data.error) {
      console.log("error :>> ", data.error);
    }
  };

  return (
    <>
      <Search
        handleChange={handleChange}
        setValues={setValues}
        submit={handleSubmit}
        values={values}
      />

      <Restaurants restaurants={restaurants} />
    </>
  );
};

export default RestaurantContainer;

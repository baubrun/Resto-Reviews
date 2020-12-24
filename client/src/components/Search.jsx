import React, {useState} from 'react'
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import {api} from "../../api"


const useStyles = makeStyles((theme) => ({
    input: {
      color: "#fff",
      margin: "8px 0",
      fontSize: "24px",
    },
    error: {
      backgroundColor: "#ff3333",
      color: "white",
      cursor: "pointer",
      verticalAlign: "middle",
      textAlign: "center",
      padding: "10px",
    },
    purchase: {
      padding: "8px 0",
      fontSize: "24px"
    },
    row: {
      margin: "50px 0",
    },
  }));
  

const Search = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        name: "",
        location: "",
        price_range: "",
    })


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
    
        const data = await api.createRestaurant(form)
        if (data & data.error){
            console.log('error :>> ', data.error);
        }
        
      };
    



    return (
        <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="name"
              onChange={(evt) => handleChange(evt)}
              placeholder="Name"
              value={values.name}
              InputProps={{
                className: classes.input
              }}
            />
            <TextField
              fullWidth
              name="location"
              onChange={(evt) => handleChange(evt)}
              placeholder="Location"
              value={values.location}
              InputProps={{
                className: classes.input
              }}
            />
            <TextField
              fullWidth
              name="price_range"
              onChange={(evt) => handleChange(evt)}
              placeholder="PRICE RANGE"
              value={values.price_range}
              InputProps={{
                className: classes.input
              }}
            />

        </form>
    )
}

export default Search

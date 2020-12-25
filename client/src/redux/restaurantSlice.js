import axios from "axios";
import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import {
    domain
} from "../api"



export const listRestaurants = createAsyncThunk(
    "/listRestaurants",
    async () => {
        try {
            const res = await axios.get(`${domain}/api/restaurants`);
            return res.data;
        } catch (error) {
            return {
                error: error.message
            };
        }
    }
);


export const createRestaurant = createAsyncThunk(
    "/createRestaurant",
    async (data) => {
        try {
            const res = await axios.post(
                `${domain}/api/restaurants/`,
                data
            )
            return res.data

        } catch (error) {
            return {
                error: error.message,
            };
        }
    });



export const restaurantSlice = createSlice({
    name: "restaurants",
    initialState: {
        restaurants: [],
        error: "",
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [listRestaurants.pending]: (state) => {
            state.loading = true;
        },
        [listRestaurants.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                restaurants
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.restaurants = restaurants
            }
        },
        [listRestaurants.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },



        [createRestaurant.pending]: (state) => {
            state.loading = true;
        },
        [createRestaurant.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                restaurant
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.restaurants = [...state.restaurants, restaurant]
            }
        },
        [createRestaurant.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },



    },
});


// export const {} = restaurantSlice.actions;

export const restaurantState = (state) => state.restaurants;
export default restaurantSlice.reducer;
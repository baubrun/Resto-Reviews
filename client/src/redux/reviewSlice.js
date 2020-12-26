import axios from "axios";
import {
    createAsyncThunk,
    createSlice,
} from "@reduxjs/toolkit";
import {
    domain
} from "../api"



export const createReview = createAsyncThunk(
    "/createReview",
    async (data) => {
        try {
            const res = await axios.post(
                `${domain}/api/reviews`,
                data
            )
            return res.data
        } catch (error) {
            return {
                error: error.message
            };
        }
    });


export const listReviews = createAsyncThunk(
    "/listReviews",
    async (restaurantId) => {
        try {
            const res = await axios.get(`${domain}/api/reviews/${restaurantId}`);
            return res.data;
        } catch (error) {
            return {
                error: error.message
            };
        }
    }
);




export const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        reviews: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {

        [createReview.pending]: (state) => {
            state.loading = true;
        },
        [createReview.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                review
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.reviews = [...state.reviews, review]
            }
        },
        [createReview.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },

        [listReviews.pending]: (state) => {
            state.loading = true;
        },
        [listReviews.fulfilled]: (state, action) => {
            state.loading = false;
            const {
                error,
                reviews
            } = action.payload;
            if (error) {
                state.error = error;
            } else {
                state.reviews = reviews
            }
        },
        [listReviews.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },


    },
});


export const reviewState = (state) => state.reviews;
export default reviewSlice.reducer;
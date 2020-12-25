import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from "./restaurantSlice"
import reviewsReducer from "./reviewSlice"


export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    reviews: reviewsReducer,

  },
});

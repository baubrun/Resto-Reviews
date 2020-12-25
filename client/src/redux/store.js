import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from "./restaurantSlice"


export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,

  },
});

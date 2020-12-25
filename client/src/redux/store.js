import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from "./eventsSlice"


export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,

  },
});

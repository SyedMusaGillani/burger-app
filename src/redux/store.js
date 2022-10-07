import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducers/orderReducer";

export default configureStore({
  reducer: {
    order: orderReducer,
  },
});

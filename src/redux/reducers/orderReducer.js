import { createSlice } from "@reduxjs/toolkit";
import * as orderActionsCreator from "../actions/orderActionsCreator";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    lettuce: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  },
  reducers: {},
  extraReducers: {
    [orderActionsCreator.addLettuce]: (state) => {
      state.lettuce++;
    },
    [orderActionsCreator.addBacon]: (state) => {
      state.bacon++;
    },
    [orderActionsCreator.addMeat]: (state) => {
      state.meat++;
    },
    [orderActionsCreator.addCheese]: (state) => {
      state.cheese++;
    },
    [orderActionsCreator.subtractLettuce]: (state) => {
      state.lettuce--;
    },
    [orderActionsCreator.subtractBacon]: (state) => {
      state.bacon--;
    },
    [orderActionsCreator.subtractMeat]: (state) => {
      state.meat--;
    },
    [orderActionsCreator.subtractCheese]: (state) => {
      state.cheese--;
    },
  },
});

export default orderSlice.reducer;

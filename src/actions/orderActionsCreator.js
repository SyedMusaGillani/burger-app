import { createAction } from "@reduxjs/toolkit";

export const addMeat = createAction("order/addMeat");
export const addLettuce = createAction("order/addLettuce");
export const addBacon = createAction("order/addBacon");
export const addCheese = createAction("order/addCheese");
export const subtractMeat = createAction("order/subtractMeat");
export const subtractLettuce = createAction("order/subtractLettuce");
export const subtractBacon = createAction("order/subtractBacon");
export const subtractCheese = createAction("order/subtractCheese");

import { cheeseImg, baconImg, meatImg, lettuceImg } from "../../assets";

export const initialPrice = 3;

export const foodItemsRate = {
  lettuce: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

export const itemImages = {
  lettuce: lettuceImg,
  bacon: baconImg,
  cheese: cheeseImg,
  meat: meatImg,
};

export const actionName = (label) =>
  label.charAt(0).toUpperCase() + label.slice(1);

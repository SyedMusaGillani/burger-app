import { useState } from "react";

import { IngredientControl, BurgerBody, OrderModal } from "../../components";

import "./control.css";

function Control() {
  const [foodPrice, setFoodPrice] = useState({
    lettuce: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  });

  const ingredients = Object.keys(foodPrice).map((label, i) => (
    <IngredientControl
      label={label}
      foodPrice={foodPrice}
      setFoodPrice={setFoodPrice}
      key={i}
    />
  ));

  const price = Object.values(foodPrice).reduce((prev, curr) => prev + curr, 3);

  return (
    <>
      <BurgerBody {...foodPrice} price={price} />
      <div className="container-fluid bg-controls p-0 m-0 text-center">
        Current Price:
        <strong>${price}</strong>
        {ingredients}
        <br />
        <OrderModal foodPrice={foodPrice} price={price} />
      </div>
    </>
  );
}

export default Control;

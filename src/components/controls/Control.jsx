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
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

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
        <button
          className="justify-content-center btn-order"
          onClick={showModal}
          disabled={price === 3}
        >
          ORDER
        </button>
      </div>
      <OrderModal
        foodPrice={foodPrice}
        show={show}
        price={price}
        hide={hideModal}
      />
    </>
  );
}

export default Control;

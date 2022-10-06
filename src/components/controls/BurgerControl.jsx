import { useSelector } from "react-redux";

import { IngredientControl, BurgerBody, OrderModal } from "../../components";
import { initialPrice, foodItemsRate } from "../helpers/helper";

import "./burgerControl.css";

export default function BurgerControl() {
  console.log();

  const itemsQuantities = useSelector((state) => state.order);

  const ingredients = Object.keys(itemsQuantities).map((label, i) => (
    <IngredientControl
      label={label}
      itemsQuantities={itemsQuantities}
      key={i}
    />
  ));

  const price = Object.entries(itemsQuantities).reduce(
    (prev, [itemName, qty]) => prev + qty * foodItemsRate[itemName],
    initialPrice
  );

  return (
    <>
      <BurgerBody itemsQuantities={itemsQuantities} price={price} />
      <div className="container-fluid bg-controls p-0 m-0 text-center position-absolute bottom-0 py-3 ">
        Current Price:
        <strong>${price.toFixed(2)}</strong>
        {ingredients}
        <OrderModal itemsQuantities={itemsQuantities} price={price} />
      </div>
    </>
  );
}

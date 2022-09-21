import { useState } from "react";
import "./control.css";
import IngredientControl from "./ingredientControl";

function Control() {
  const [lettuce, setLettuce] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [meat, setMeat] = useState(0);
  const [cheese, setCheese] = useState(0);

  const buttons = [
    {
      label: "Lettuce",
      onLess() {
        if (lettuce > 0) setLettuce(lettuce - 0.5);
      },
      onMore() {
        setLettuce(lettuce + 0.5);
      },
    },
    {
      label: "Bacon",
      onLess() {
        if (bacon > 0) setBacon(bacon - 0.7);
      },
      onMore() {
        setBacon(bacon + 0.7);
      },
    },
    {
      label: "Cheese",
      onLess() {
        if (cheese > 0) setCheese(cheese - 0.4);
      },
      onMore() {
        setCheese(cheese + 0.4);
      },
    },
    {
      label: "Meat",
      onLess() {
        if (meat > 0) setMeat(meat - 1.3);
      },
      onMore() {
        setMeat(meat + 1.3);
      },
    },
  ];
  const ingredients = buttons.map((ing) => (
    <IngredientControl
      label={ing.label}
      onLess={ing.onLess}
      onMore={ing.onMore}
    />
  ));

  return (
    <div className="container-fluid bg-controls p-0 m-0">
      <p className="text-center">
        Current Price:${lettuce + meat + cheese + bacon}
      </p>
      {ingredients}
      <div className="row m-0 justify-content-center">
        <div className="col-2"></div>
        <button className="btn-order">SIGN UP TO ORDER</button>
      </div>
    </div>
  );
}

export default Control;

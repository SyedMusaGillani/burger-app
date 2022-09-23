import {
  foodItemsRate,
  increasePrice,
  reducePrice,
} from "../../helpers/helper";

import "./ingredientControl.css";

export default function IngredientControl({ label, foodPrice, setFoodPrice }) {
  const onLess = () =>
    reducePrice(label, foodItemsRate[label], foodPrice, setFoodPrice);
  const onMore = () =>
    increasePrice(label, foodItemsRate[label], foodPrice, setFoodPrice);
  return (
    <div className="row m-0 justify-content-evenly px-5 my-2">
      <p className="col-2 fw-bold">{label}</p>
      <button
        className="col-2 btn-less"
        onClick={onLess}
        disabled={foodPrice[label] === 0}
      >
        Less
      </button>
      <button className="col-2 btn-more" onClick={onMore}>
        More
      </button>
    </div>
  );
}

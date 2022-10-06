import PropTypes from "prop-types";

import { top, bottom } from "../../../assets";

import { itemImages, initialPrice } from "../../helpers/helper";

import "./burgerBody.css";

export default function BurgerBody({ itemsQuantities, price }) {
  const images = Object.entries(itemImages).map(([key, img]) => {
    return Array(itemsQuantities[key])
      .fill()
      .map((_, i) => (
        <div className="row width-hundred justify-content-center" key={i}>
          <img className="img-size" src={img} alt="ing" />
        </div>
      ));
  });
  return (
    <div className="container-fluid overflow">
      <div className="row width-hundred justify-content-center ">
        <img className="img-size" src={top} alt="top bun" />
      </div>
      {price === initialPrice ? (
        <h1 className="text-center">No Ingredients Added</h1>
      ) : (
        images
      )}
      <div className="row width-hundred justify-content-center ">
        <img className="img-size" src={bottom} alt="bottom bun" />
      </div>
    </div>
  );
}

BurgerBody.propTypes = {
  itemsQuantities: PropTypes.object,
  price: PropTypes.number,
};

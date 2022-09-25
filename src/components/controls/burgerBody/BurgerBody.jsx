import _ from "lodash";

import { top, bottom } from "../../../assets";

import { foodItemsRate, itemImages } from "../../helpers/helper";

import "./burgerBody.css";

export default function BurgerBody({ foodPrice, price }) {
  return (
    <div className="container-fluid my-2 overflow">
      <div className="row width-hundred justify-content-center ">
        <img className="img-size" src={top} alt="top bun" />
      </div>
      {price === 3 ? (
        <h1 className="text-center">No Ingrdients Added</h1>
      ) : (
        itemImages.map((obj) => {
          const [key, val] = Object.entries(obj)[0];
          return _.times(foodPrice[key] / foodItemsRate[key], () => (
            <div className="row width-hundred justify-content-center ">
              <img className="img-size" src={val} alt="ing" />
            </div>
          ));
        })
      )}
      <div className="row width-hundred justify-content-center ">
        <img className="img-size" src={bottom} alt="bottom bun" />
      </div>
    </div>
  );
}

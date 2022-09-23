import _ from "lodash";

import {
  top,
  bottom,
  cheeseImg,
  baconImg,
  meatImg,
  lettuceImg,
} from "../../../assets";
import { foodItemsRate } from "../../helpers/helper";

import "./burgerBody.css";

export default function BurgerBody(props) {
  const itemImages = [
    { lettuce: lettuceImg },
    { bacon: baconImg },
    { cheese: cheeseImg },
    { meat: meatImg },
  ];

  return (
    <div className="container-fluid my-2 overflow">
      <div className="row width-hundred justify-content-center ">
        <img className="img-size" src={top} alt="top bun" />
      </div>
      {itemImages.map((obj) => {
        const [key, val] = Object.entries(obj)[0];
        return _.times(props[key] / foodItemsRate[key], () => (
          <div className="row width-hundred justify-content-center ">
            <img className="img-size" src={val} alt="ing" />
          </div>
        ));
      })}
      <div className="row width-hundred justify-content-center ">
        <img className="img-size" src={bottom} alt="bottom bun" />
      </div>
    </div>
  );
}

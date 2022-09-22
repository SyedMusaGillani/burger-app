import _ from "lodash";

import {
  top,
  bottom,
  cheeseImg,
  baconImg,
  meatImg,
  lettuceImg,
} from "../../../assets";

import "./burgerBody.css";

export default function BurgerBody({ lettuce, meat, cheese, bacon }) {
  return (
    <div className="container-fluid my-2 overflow">
      <div className="row width-hundred justify-content-center ">
        <img className="img-size" src={top} alt="top bun" />
      </div>
      {_.times(lettuce / 0.5, () => (
        <div className="row width-hundred justify-content-center ">
          <img className="img-size" src={lettuceImg} alt="ing" />
        </div>
      ))}
      {_.times(bacon / 0.7, () => (
        <div className="row width-hundred justify-content-center ">
          <img className="img-size" src={baconImg} alt="ing" />
        </div>
      ))}
      {_.times(cheese / 0.4, () => (
        <div className="row width-hundred justify-content-center ">
          <img className="img-size" src={cheeseImg} alt="ing" />
        </div>
      ))}
      {_.times(meat / 1.3, () => (
        <div className="row width-hundred justify-content-center ">
          <img className="img-size" src={meatImg} alt="ing" />
        </div>
      ))}
      <div className="row width-hundred justify-content-center ">
        <img className="img-size" src={bottom} alt="bottom bun" />
      </div>
    </div>
  );
}

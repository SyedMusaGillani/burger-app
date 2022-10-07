import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as orderActions from "../../../redux/actions/orderActionsCreator";

import { actionName } from "../../helpers/helper";

import "./ingredientControl.css";

export default function IngredientControl({ label, itemsQuantities }) {
  const dispatch = useDispatch();
  const onLess = () => dispatch(orderActions[`subtract${actionName(label)}`]());

  const onMore = () => dispatch(orderActions[`add${actionName(label)}`]());

  return (
    <div className="row m-0 justify-content-evenly px-5 my-2">
      <p className="col-2 fw-bold">{label}</p>
      <button
        className="col-2 btn-less"
        onClick={onLess}
        disabled={itemsQuantities[label] === 0}
      >
        Less
      </button>
      <button className="col-2 btn-more" onClick={onMore}>
        More
      </button>
    </div>
  );
}

IngredientControl.propTypes = {
  label: PropTypes.string,
  itemsQuantities: PropTypes.object,
};

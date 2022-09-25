import Modal from "react-bootstrap/Modal";

import { foodItemsRate } from "../../helpers/helper";

import "./orderModal.css";

export default function OrderModal({ show, foodPrice, price, hide }) {
  const quantities = Object.entries(foodPrice).map(([key, val]) => (
    <li>
      {key}: $ {val / foodItemsRate[key]}
    </li>
  ));
  return (
    <Modal show={show} onEscapeKeyDown={hide}>
      <Modal.Body>
        <h3>Your Order Summary</h3>
        <ul>{quantities}</ul>
        <strong>Total Price: ${price}</strong>
        <p>Continue to Checkout?</p>
        <button className="btn-cancel">Cancel</button>
        <button className="btn-continue">Continue</button>
      </Modal.Body>
    </Modal>
  );
}

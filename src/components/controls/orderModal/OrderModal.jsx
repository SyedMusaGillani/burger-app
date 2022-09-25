import Modal from "react-bootstrap/Modal";

import { foodItemsRate } from "../../helpers/helper";

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
      </Modal.Body>
      <Modal.Footer>
        <button>Cancel</button>
        <button>Continue</button>
      </Modal.Footer>
    </Modal>
  );
}

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import "./orderModal.css";

export default function OrderModal({ foodPrice, price }) {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const quantities = Object.entries(foodPrice).map(([key, val]) => (
    <li>
      {key}: $ {val.toFixed(2)}
    </li>
  ));
  return (
    <>
      <button
        className="justify-content-center btn-order"
        onClick={showModal}
        disabled={price === 3}
      >
        ORDER
      </button>
      <Modal show={show} onHide={hideModal}>
        <Modal.Body>
          <h3>Your Order Summary</h3>
          <ul>{quantities}</ul>
          <strong>Total Price: ${price.toFixed(2)}</strong>
          <p>Continue to Checkout?</p>
          <button className="btn-cancel" onClick={hideModal}>
            Cancel
          </button>
          <button className="btn-continue" onClick={hideModal}>
            Continue
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
}

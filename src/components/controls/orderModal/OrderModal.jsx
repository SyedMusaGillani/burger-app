import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

import { foodItemsRate, initialPrice } from "../../helpers/helper";

import "./orderModal.css";

export default function OrderModal({ itemsQuantities, price }) {
  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const quantities = Object.entries(itemsQuantities).map(([key, val]) => (
    <li key={key}>
      {key}: $ {val * foodItemsRate[key]}
    </li>
  ));
  return (
    <>
      <button
        className="justify-content-center btn-order"
        onClick={showModal}
        disabled={price === initialPrice}
      >
        ORDER
      </button>
      <Modal show={show} onHide={hideModal} centered>
        <Modal.Body>
          <h3>Your Order Summary</h3>
          <ul>{quantities}</ul>
          <strong>Total Price: ${price.toFixed(2)}</strong>
          <p>Continue to Checkout?</p>
          <div className="row justify-content-end">
            <button className="btn-cancel col-2 " onClick={hideModal}>
              Cancel
            </button>
            <button className="btn-continue col-2 " onClick={hideModal}>
              Continue
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

OrderModal.propTypes = {
  itemsQuantities: PropTypes.object,
  price: PropTypes.number,
};

import React from "react";
import { Modal } from "react-bootstrap";

const AddBudgetModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit></Form>
    </Modal>
  );
};

export default AddBudgetModal;

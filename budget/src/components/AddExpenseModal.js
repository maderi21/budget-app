import React from "react";
import { Form, Modal, ModalHeader, ModalTitle, Button } from "react-bootstrap";
import { useRef } from "react";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../context/BudgetContext";

const AddExpenseModal = ({ show, handleClose, defaultBudgetId }) => {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();

  const { adExpense, budgets } = useBudgets();

  function handleSubmit(e) {
    e.preventDefault();
    AddExpense();
    addBudget({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      nudgetId: budgetIdRef.current.value,
    });
    handleClose;
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <ModalHeader>
          <ModalTitle>New Expense</ModalTitle>
        </ModalHeader>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="descitpion">
            <Form.Label>Description</Form.Label>
            <Form.Control ref={descriptionRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="budgetId">
            <Form.Label>Budget</Form.Label>
            <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
              <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button varient="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddExpenseModal;

import React from "react";
import { Card, ProgressBar, Stack, Button } from "react-bootstrap";
import { currencyFormatter } from "../utils";

const BudgetCard = ({
  name,
  amount,
  max,
  gray,
  onAddExpenseClick,
  hideButtons,
  onViewExpensesClick,
}) => {
  const classNames = [];
  if (amount > max) {
    classNames.push("bg-danger", "gb - opacity - 10");
  } else if (gray) {
    classNames.push("bg-light");
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title className="flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                /{currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            varient={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              varient="outline-primary"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
              Add Expense
            </Button>
            <Button variant="outline-secondary" onClick={onViewExpensesClick}>
              View Expenses
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
};

function getProgressBarVariant(amount, max) {
  const ratio = amount / max;
  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";
  return "danger";
}

export default BudgetCard;

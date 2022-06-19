import React from "react";
import { Button } from "@mui/material";
import "./ErrorMessage.css";
import { useNavigate } from "react-router-dom";

const ErrorMessage = () => {
  const navigate = useNavigate();
  const addNewItemHandler = () => {
    navigate("/");
  };
  return (
    <div className="error-div">
      {" "}
      <div className="form">
        <h1>No List Items</h1>
        <div className="btn-goto-form-div">
          <Button
            onClick={addNewItemHandler}
            type="submit"
            className="btn-form "
            variant="contained"
            size="large"
            color="success"
          >
            Add new list item.
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;

import { React, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./form.css";
const Form = (props) => {
  const [item, setItem] = useState("");
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
  const changeHandler = (e) => {
    const EnteredItem = e.target.value;
    setIsValid(true);
    setItem(EnteredItem);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const clickhandler = () => {
    const itemObject = {
      id: Math.random(),
      value: item,
    };

    if (item.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.click(itemObject);
    setItem("");
    navigate("/itemList");
  };

  const viewListHandler = () => {
    navigate("/itemList");
  };
  return (
    <div className="form-div">
      <form className="form" onSubmit={submitHandler}>
        <h1 className="form-h1">Todo-List</h1>
        {!isValid ? <p className="error-para">This field is required.</p> : ""}
        <input
          placeholder="Add new item."
          value={item}
          onChange={changeHandler}
          className={`input ${!isValid ? "input-error" : ""}`}
          type="text"
        />

        <div className="button-div">
          <Button
            onClick={clickhandler}
            type="submit"
            className="btn-form"
            variant="contained"
            size="large"
          >
            Add Item
          </Button>
          <Button
            onClick={viewListHandler}
            type="submit"
            className="btn-form"
            variant="contained"
            size="large"
            color="success"
          >
            View List
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;

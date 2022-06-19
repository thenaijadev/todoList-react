import { React, useState } from "react";
import "./Item.css";
import { Button } from "@mui/material";

const Item = (props) => {
  const [isDone, setIsDone] = useState(false);
  const isDoneHandler = () => {
    setIsDone(!isDone);
  };
  return (
    <div className="container">
      <div className="item-div">
        <h3 className={`item-h3 ${isDone ? "underlined" : ""}`}>
          {props.item}
        </h3>
        <div className="btn-div">
          <Button
            onClick={isDoneHandler}
            className="btn btn-success"
            variant="contained"
            color="success"
            size="small"
          >
            Done
          </Button>
          <Button
            onClick={props.onDelete}
            className="btn btn-error"
            variant="outlined"
            color="error"
            size="small"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Item;

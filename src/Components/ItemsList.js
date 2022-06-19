import { React } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Item from "./Item";
import "./ItemsList.css";
import ErrorMessage from "./ErrorMessage";
const ItemsList = (props) => {
  const navigate = useNavigate();
  const addNewItemHandler = () => {
    navigate("/");
  };
  if (props.items.length === 0) {
    return <ErrorMessage />;
  } else {
    return (
      <div className="container">
        <div className="items-div">
          {props.items.map((task) => {
            const deleteHandler = () => {
              const updatedList = props.items.filter((item) => {
                return task.id !== item.id;
              });
              props.delete(updatedList);
            };
            return (
              <Item item={task.value} key={task.id} onDelete={deleteHandler} />
            );
          })}
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
  }
};

export default ItemsList;

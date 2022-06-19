import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import ItemsList from "./Components/ItemsList";
import "./App.css";

const App = () => {
  const [itemsList, setItemsList] = useState([]);
  const clickHandler = (item) => {
    setItemsList((prevItems) => {
      return [item, ...prevItems];
    });
  };
  const deleteHandler = (upDatedList) => {
    setItemsList(upDatedList);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form click={clickHandler} />} />
          <Route
            path="/itemList"
            element={<ItemsList items={itemsList} delete={deleteHandler} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

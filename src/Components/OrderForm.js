import React, { useState } from "react";
import Card from "./Card";

function OrderForm(props) {
  const [enteredId, setEnteredId] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDish, setEnteredDish] = useState("");
  const [enteredTable, setEnteredTable] = useState("");
  function idChangeHandler(event) {
    setEnteredId(event.target.value);
  }
  function priceChangeHandler(event) {
    setEnteredPrice(event.target.value);
  }

  function dishChangeHandler(event) {
    setEnteredDish(event.target.value);
  }

  function tableChangeHandler(event) {
    setEnteredTable(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const id = Math.random().toString();
    const listData = {
      ID: enteredId,
      Price: enteredPrice,
      Dish: enteredDish,
      Table: enteredTable,
    };

    props.onSaveData(enteredPrice, enteredDish, enteredTable, id);
    localStorage.setItem(id, JSON.stringify(listData));
    setEnteredId("");
    setEnteredPrice("");
    setEnteredDish("");
    setEnteredTable("");
  }
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="id">Unique Order ID:</label>
        <input
          type="number"
          value={enteredId}
          onChange={idChangeHandler}
        ></input>
        <label htmlFor="price">Choose Price:</label>
        <input
          type="number"
          value={enteredPrice}
          onChange={priceChangeHandler}
        ></input>
        <label htmlFor="dish">Choose Dish:</label>
        <input
          type="text"
          value={enteredDish}
          onChange={dishChangeHandler}
        ></input>
        <label htmlFor="table">Choose a Table:</label>
        <select
          id="tableList"
          value={enteredTable}
          onChange={tableChangeHandler}
        >
          <option>Table1</option>
          <option>Table2</option>
          <option>Table3</option>
        </select>
        <button>Add to bill</button>
      </form>
    </Card>
  );
}

export default OrderForm;

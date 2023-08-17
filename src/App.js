import React, { useState } from "react";
import "./App.css";
import OrderForm from "./Components/OrderForm";

import OrdersList from "./Components/OrdersList";

function App() {
  const [enetredList, setEnteredList] = useState([]);

  function saveDataHandler(uPrice, uDish, uTable, uId) {
    setEnteredList((prevOrderList) => {
      return [
        ...prevOrderList,

        {
          Price: uPrice,
          Dish: uDish,
          Table: uTable,
          id: uId,
        },
      ];
    });
  }
  function deleteBtnHandler(btnId) {
    localStorage.removeItem(btnId);
    setEnteredList((prevOrderList) => {
      const updatedProductData = prevOrderList.filter((item) => {
        return item.id !== btnId;
      });
      return updatedProductData;
    });
  }

  return (
    <div className="App">
      <OrderForm onSaveData={saveDataHandler}></OrderForm>
      <OrdersList
        productList={enetredList}
        deleteBtnHandler={deleteBtnHandler}
      ></OrdersList>
    </div>
  );
}

export default App;

import React from "react";

function Orders(props) {
  function deleteBtnHandler() {
    props.deleteBtnHandler(props.productData.id);
  }
  return (
    <ul>
      <li key={props.productData.id}>
        {`Price: ${props.productData.Price} Dish: ${props.productData.Dish} Table: ${props.productData.Table}`}
        <button onClick={deleteBtnHandler}>Delete</button>
      </li>
    </ul>
  );
}
export default Orders;

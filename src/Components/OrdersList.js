import React from "react";
import Card from "./Card";
import Orders from "./Orders";

function OrdersList(props) {
  return (
    <Card>
      <h1>Orders</h1>

      <h2>Table 1</h2>
      {props.productList.map((list) => {
        if (list.Table === "Table1") {
          return (
            <Orders
              productData={list}
              deleteBtnHandler={props.deleteBtnHandler}
            ></Orders>
          );
        }
      })}
      <h2>Table 2</h2>
      {props.productList.map((list) => {
        if (list.Table === "Table2") {
          return (
            <Orders
              productData={list}
              deleteBtnHandler={props.deleteBtnHandler}
            ></Orders>
          );
        }
      })}

      <h2>Table 3</h2>
      {props.productList.map((list) => {
        if (list.Table === "Table3") {
          return (
            <Orders
              productData={list}
              deleteBtnHandler={props.deleteBtnHandler}
            ></Orders>
          );
        }
      })}
    </Card>
  );
}

export default OrdersList;

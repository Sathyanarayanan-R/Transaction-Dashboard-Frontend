import React from "react";
import "./table.css";

const Tables = ({ product }) => {

  return (
    <tbody>
      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.category}</td>
        <td>{product.sold ? "Yes" : "No"}</td>
        <td>
          <img
            src={product.image}
            alt="Product Image"
            height="100px"
            width="100px"
          />
        </td>
      </tr>
    </tbody>
  );
};

export default Tables;

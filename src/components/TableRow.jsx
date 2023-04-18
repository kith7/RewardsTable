import React from "react";

const TableRow = ({ data }) => {
  const { name, email } = data;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>123</td>
      <td>123</td>
      <td>2</td>
      <td>Total</td>
    </tr>
  );
};

export default TableRow;

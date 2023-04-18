import React, { memo } from "react";

const TableRow = ({ data }) => {
  const { name, email, rewardsByMonth, totalRewards } = data;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{Object.values(rewardsByMonth)[0]}</td>
      <td>{Object.values(rewardsByMonth)[1]}</td>
      <td>{Object.values(rewardsByMonth)[2]}</td>
      <td>{totalRewards}</td>
    </tr>
  );
};

export default memo(TableRow);

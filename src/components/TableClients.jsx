import React, { useEffect, useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import TableRow from "./TableRow";
import calculateRewards from "../utils/calculateRewards";
const TableClients = () => {
  const [uData, setUData] = useState();
  const { usersData, isPending, hasError } = useFetch("/data/db.json");
  useEffect(() => {
    if (usersData) {
      const rewardsData = usersData.map((el) => calculateRewards(el));
      setUData(rewardsData);
    }
  }, [usersData]);

  return (
    <>
      <div>
        <h1>Clients Table</h1>
      </div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Client's name</th>
            <th>Email</th>
            <th colSpan='3'>Points / month in last 3 months</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {uData
            ? uData.map((userItem) => (
                <TableRow data={userItem} key={userItem.id} />
              ))
            : null}
        </tbody>
      </table>
      {isPending ? <p>Loading data...</p> : null}
      {hasError ? `<p>An error occurred: ${hasError.message}</p>` : null}
    </>
  );
};

export default TableClients;

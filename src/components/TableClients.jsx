import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import TableRow from "./TableRow";
import calculateRewards from "../utils/calculateRewards";
import LoadingSpinner from "./UI/Spinner";
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
      <table className='table table-striped' aria-label='Rewards table'>
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
            ? uData.map((userItem, indx) => (
                <TableRow
                  data={userItem}
                  key={userItem.id}
                  data-testid={`tableRows-${indx}`}
                />
              ))
            : null}
        </tbody>
      </table>
      {isPending ? <LoadingSpinner data-testid='loading' /> : null}
      {hasError ? `<p>An error occurred: ${hasError.message}</p>` : null}
    </>
  );
};

export default TableClients;

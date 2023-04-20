import React from "react";
import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";

const userItem = {
  id: 15,
  name: "John Doe",
  email: "john@email.com",
  totalRewards: 90,
  rewardsByMonth: { "3/23/2023": 90, "8/23/2022": 0, "9/23/2022": 0 },
};

test("render a row", () => {
  render(<TableRow data={userItem} />);
  const tableRowElement = screen.getByText(/john@email.com/i);
  expect(tableRowElement).toBeInTheDocument();
});

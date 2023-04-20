import calculateRewards from "./calculateRewards";

const customerData = {
  id: 15,
  name: "John Doe",
  email: "john@email.com",
  transactions: [
    { id: 2444, date: "8/23/2022", proceeds: 0 },
    { id: 2566, date: "9/23/2022", proceeds: 0 },
    { id: 331345, date: "3/23/2023", proceeds: 120 },
  ],
};

it("returns the right calculation", async () => {
  const rewards = calculateRewards(customerData);
  expect(rewards).toEqual({
    id: 15,
    name: "John Doe",
    email: "john@email.com",
    totalRewards: 90,
    rewardsByMonth: { "3/23/2023": 90, "8/23/2022": 0, "9/23/2022": 0 },
  });
});

// the function accepts the customer data and returns new data with point results
export default function calculateRewards(customerData) {
  const customerId = customerData.id;
  const customerName = customerData.name;
  const customerEmail = customerData.email;
  //here we sort the data by date and slice the last three months
  const customerTransactions = customerData.transactions
    .sort((a, b) => new Date(a) - new Date(b))
    .slice(-3);

  //create a new object array item
  const rewardsPerCustomer = {
    id: customerId,
    name: customerName,
    email: customerEmail,
    totalRewards: 0,
    rewardsByMonth: {},
  };
  //calculate the reward and push it into the new object
  customerTransactions.forEach((transaction) => {
    const transactionAmount = transaction.proceeds;
    let rewards = 0;

    if (transactionAmount > 100) {
      rewards += (transactionAmount - 100) * 2;
      rewards += 50;
    } else if (transactionAmount >= 50) {
      rewards += transactionAmount - 50;
    }

    rewardsPerCustomer.rewardsByMonth[transaction.date] = rewards;
    rewardsPerCustomer.totalRewards += rewards;
  });
  console.log(rewardsPerCustomer);
  return rewardsPerCustomer;
}

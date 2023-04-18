export default function calculateRewards(customerData) {
  const customerId = customerData.id;
  const customerName = customerData.name;
  const customerEmail = customerData.email;
  const customerTransactions = customerData.transactions;

  const rewardsPerCustomer = {
    id: customerId,
    name: customerName,
    email: customerEmail,
    totalRewards: 0,
    rewardsByMonth: {},
  };

  customerTransactions.forEach((transaction) => {
    const transactionAmount = transaction.proceeds;
    let rewards = 0;

    if (transactionAmount > 100) {
      rewards += (transactionAmount - 100) * 2;
      rewards += 50; // Flat 50 point bonus for spending over $100
    } else if (transactionAmount >= 50) {
      rewards += transactionAmount - 50;
    }
    const transactionMonth = new Date(transaction.date).getMonth() + 1;
    rewardsPerCustomer.rewardsByMonth[transactionMonth] = rewards;
    rewardsPerCustomer.totalRewards += rewards;
  });

  return rewardsPerCustomer;
}

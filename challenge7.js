// Challenge 7: Food Voucher Rewards


// Example spending amounts to test
const spendingAmounts = [1200, 750, 400, 250];

for (const amount of spendingAmounts) {
  if (amount >= 1000) {
    console.log(`Spent R${amount} -> R200 food voucher`);
  } else if (amount >= 500 && amount <= 999) {
    console.log(`Spent R${amount} -> R100 food voucher`);
  } else if (amount >= 300 && amount <= 499) {
    console.log(`Spent R${amount} -> R50 food voucher`);
  } else {
    console.log(`Spent R${amount} -> No voucher`);
  }
}
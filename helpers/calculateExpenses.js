export default function calculateExpenses(items) {
  let subtotal = 0;
  for (let item of items) {
    subtotal =
      item.type === "EXPENSE" ? subtotal - item.amount : subtotal + item.amount;
  }
  return subtotal;
}

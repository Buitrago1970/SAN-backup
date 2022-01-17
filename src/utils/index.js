export const handleSumTotal = (cart) => {
  let sumTotal = 0;
  cart.forEach((item) => {
   sumTotal += item.price * item.totalAdd;
  });
  return sumTotal;
};

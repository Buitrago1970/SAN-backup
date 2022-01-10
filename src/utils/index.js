export const handleSumTotal = (cart) => {
  let sumTotal = 0;
  cart.forEach((item) => {
    // sumTotal += item.price * item.totalAdd;
   sumTotal += item.price * 1;

  });
  return sumTotal;
};

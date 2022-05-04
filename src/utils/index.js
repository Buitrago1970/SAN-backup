export const handleSumTotal = (cart) => {
  let sumTotal = 0;
  cart.forEach((item) => {
    sumTotal += item.precio * item.total_anadidos_de_productos;
  });
  return sumTotal;
};

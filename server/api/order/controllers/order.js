"use strict";
const stripe = require("stripe")(
  "sk_test_51KjRrsDcMePp1Xhx6E8dsAghTp4hPAjydqQipeLAwMTy6sZpQoSnduMAxPLaZr1X3FH2IUTo2yFBrR9dAsLi3y5W00gZCuJ0iP"
);
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const calcPrice = (price, discount) => {
  if (!discount) return price;
  const discountAmount = (price * discount) / 100;
  return (price - discountAmount).toFixed(2);
};

module.exports = {
  async create(ctx) {
    const { token, products, idUser, addressShipping } = ctx.request.body;
    let totalPayment = 0;
    products.forEach((product) => {
      const totalPrice = calcPrice(product.price, product.discount);
      totalPayment += Number(totalPrice);
      console.log(totalPayment);
    });

    const charge = await stripe.charges.create({
      amount: totalPayment * 100,
      currency: "eur",
      source: token.id,
      description: `ID Usuario: ${idUser}`,
    });
    console.log("charge", charge);

    const createOrder = [];
    for await (const product of products) {
      const data = {
        product: product.id,
        quantity: product.quantity,
        user: idUser,
        totalPayment,
        idPayment: charge.id,
        addressShipping,
      };
      console.log(data);
      const validData = await strapi.entityValidator.validateEntityCreation(
        strapi.models.order,
        data
      );
      const entry = await strapi.query("order").create(validData);
      createOrder.push(entry);
    }
    return createOrder;
  },
};

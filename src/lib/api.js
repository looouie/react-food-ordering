const ApiKey =
  "https://louie-bakery-default-rtdb.europe-west1.firebasedatabase.app/";

const placeOrder = async (products, customer) => {
  // ordernumber: something ++
  // products id, price, name, amount
  // customer detail: name, phone, pickup time

  // temp solution
  const orderNo = Math.floor(100000000 + Math.random() * 900000000);

  const response = await fetch(
    ApiKey,
    { method: "POST" },
    {
      body: {
        orderNo,
        products,
        customer,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Order Fail!");
  } else {
    console.log(response.status);
  }
};

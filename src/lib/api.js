const apiKey =
  "https://louie-bakery-default-rtdb.europe-west1.firebasedatabase.app/order.json";

export const placeOrder = async (body) => {
  // ordernumber: something ++
  // products id, price, name, amount
  // customer detail: name, phone, pickup time

  // temp solution
  //   const orderNo = Math.floor(100000000 + Math.random() * 900000000);

  const response = await fetch(apiKey, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Order Fail!");
  } else {
    console.log(data);
  }
};

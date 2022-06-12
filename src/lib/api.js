const apiKey =
  "https://louie-bakery-default-rtdb.europe-west1.firebasedatabase.app/order.json";

export const placeOrder = async (body) => {
  const response = await fetch(apiKey, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Order Fail!");
  }
};

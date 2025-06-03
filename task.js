const products = {
  ProductA: {
    quantity: 30,
    price: 20
  },
  ProductB: {
    quantity: 2,
    price: 40
  },
  ProductC: {
    quantity: 65,
    price: 50
  }
};

let Subtotal = 0;
const shippingfee = 10;
const wrappingfee = 10;
let totalQuantity = 0;

for (let product in products) {
const quantity = products[product].quantity;
 const price = products[product].price;
const itemstotal = quantity * price;
 Subtotal += itemstotal;
 totalQuantity += quantity;
console.log(`productName: ${product}, quantity: ${quantity}, price: ${price}`);}
console.log(`Subtotal: ${Subtotal}`);

  if (Subtotal > 200) {
    Subtotal -= 10
   
  } 

//   console.log(Subtotal);
//   console.log(`flat_10_discount, amount: ${Subtotal}`);
for (let product in products) {
  const quantity = products[product].quantity;
  let price = products[product].price;
  let itemstotal = quantity * price;

   if (quantity > 10) {
      itemstotal-= (5/100)*itemstotal
    Subtotal = Subtotal - (quantity * products[product].price) + itemstotal; 
      console.log(`bulk_5_dicount ,amount:${Subtotal}`)
  } else if (totalQuantity > 20) {
    Subtotal -= (10/100) * Subtotal;
    console.log(`bulk_10_discount, amount: ${Subtotal}`);
  } else if (totalQuantity > 30 && quantity > 15) {
    itemstotal -= (5/100) * itemstotal;
    Subtotal -= (quantity * products[product].price) + itemstotal;
     conole.log(`tired 50 dicount ,amount:${Subtotal}`) 
  }
}

console.log(`shippingfee: ${shippingfee}, giftwrapfee:${wrappingfee}`);

const total = shippingfee + wrappingfee + Subtotal;
console.log(`total: ${total}`);

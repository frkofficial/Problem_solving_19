const products = [
    {name: 'shampo', price: 500},
    {name: 'chiruni', price: 200},
    {name: 'shirt', price: 600},
    {name: 'pant', price: 1300},
]

function getShoppingTotal(products){

    let sum = 0;
    for(const product of products){
        // console.log(product);
      sum += product.price

    }

    return sum
}

const totalPrice = getShoppingTotal(products);

console.log('total cost: ', totalPrice)
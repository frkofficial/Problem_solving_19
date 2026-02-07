const products = [
    {name: 'shampo', price: 500, quatity:4},
    {name: 'chiruni', price: 200, quatity:5},
    {name: 'shirt', price: 600, quatity:7},
    {name: 'pant', price: 1300, quatity:9},
]

function totalCost(products){

    let sum = 0;
    for(const product of products){
      sum += product.price * product.quatity
    }

    return sum
}

const shoppingCost = totalCost(products);

console.log(shoppingCost);
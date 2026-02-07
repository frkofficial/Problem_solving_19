const mobiles = [
    {name:'samsung', price: 20000, camera: '12mp', color: 'black' },
    {name:'xaomi', price: 30000, camera: '12mp', color: 'black' },
    {name:'opp', price: 40000, camera: '12mp', color: 'black' },
    {name:'Iphone', price: 5000, camera: '12mp', color: 'black' },
    {name:'Walton', price: 60000, camera: '12mp', color: 'black' },
    {name:'LG', price: 70000, camera: '12mp', color: 'black' },
]

function getCheapestPhone(phones){

    let min = phones[0];
   
    for(const mobile of mobiles){
        // console.log(mobile)

        if(mobile.price < min.price){
            min = mobile
        }
    }

    return min
}

const cheap = getCheapestPhone(mobiles)

console.log('cheapest phone is: ', cheap);
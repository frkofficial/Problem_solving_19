const prices = [20000, 16000, 100000, 40000, 1200, 35000]

function getMin(numbers){

    let min = numbers[0];
    for (const num of numbers){
        if(num < min){
            min = num;
        }
    }

    return min
}

const cheap = getMin(prices);

console.log('Cheapest one is : ', cheap)
const height = [40, 65, 73, 45, 60]

function getMax(numbers){
    
//   console.log(numbers)

let max = 0;
for(number of height){
    if(number>max){
        max = number
    }
}

return max
}

const max = getMax(height);
console.log('max value is :', max)
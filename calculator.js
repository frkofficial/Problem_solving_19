function add(a,b){
    return a + b;
}

function subtration(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function division(a,b){
    return a / b ; 
}

function calculator(a, b, operation){
    if(operation == 'add'){
        const result = add(a,b);
        return result;
    }

    else if(operation == 'subtration') {
        const result = subtration(a,b);
        return result;
    }

else if(operation == 'multiply'){
    const result = multiply(a,b);
    return result;
}

else{
    const result = division(a,b);
    return result;
}
}

const finalResult = calculator(2, 3, 'add')

console.log(finalResult);

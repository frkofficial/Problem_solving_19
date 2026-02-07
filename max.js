const frk = 80;
const srk =60;
const rhi = 50; 

if(frk > srk && frk > rhi){
    console.log("Frk is the bigger")
}

else if(srk > frk && srk > rhi){
    console.log("Srk is the most bigger One")
}
else{
    console.log("Rhi is the most bigger one")
}


// using math.max

const max = Math.max(22, 30, 40, 45)
console.log("Find max using math.max function: ", max)

function layredDiscountedTotal(quantity){

    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
       
        const total = quantity * first100Price;
        return total;
    }

    else if(quantity <= 200){
          
        const first100Total = 100 * first100Price;

        const remainningQuantity = quantity - 100;

        const above100Price = remainningQuantity * second100Price;

        const totalprice200 = first100Total + above100Price;

        return totalprice200;
    }

    else{
        const first100Total = 100 * first100Price;

        const second100PriceF = 100 * second100Price;

        const remainningQ = quantity - 200;

        const remainningP = remainningQ * above200Price; 

        const totalLastPrice = first100Total + second100PriceF + remainningP 

        return totalLastPrice
    }
}

const result = layredDiscountedTotal(10);

console.log(result);
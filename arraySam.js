function arraySamOf5(array){
    let result = 0;

    array.forEach(element => {
        if(element % 5){
            result += element;
        }
    
    });
    return result;
}
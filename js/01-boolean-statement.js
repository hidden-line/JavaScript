function guardOperator() {
    const num = 10;
    //if condition false then currency = false, else currency = 'USD'
    const currency = num >= 10 && 'USD';    
    console.log(currency);
}

function defaultOperator() {
    const currency = 'EURO' || 'USD';
    console.log(currency);
}
// format number to price (with currency)
/**
 * format incoming price to requested currency
 * @param {*} price 
 * @param {*} currency 
 * @returns 
 */
function formatPrice(price, currency = "$") {
    return `${currency} ${price}`; 
}

// curency convertion

function convertToCurrency(price, conversationRate="0.93", currency = 'EUR') {
    return (price * conversationRate).toFixed(2) + ' ' + currency; 
}
    
export {formatPrice};
export {convertToCurrency};
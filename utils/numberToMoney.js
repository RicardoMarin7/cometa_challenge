const numberToMoney = (price) => Number(price).toLocaleString(undefined, { 
    minimumFractionDigits: 0, 
    maximumFractionDigits: 2, 
    style:'currency', 
    currency:'MXN'})

export default numberToMoney
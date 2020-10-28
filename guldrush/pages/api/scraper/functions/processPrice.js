function processPrice(price) {
       let processedPrice = parseFloat(price.replace('SEK', '').replace('kr', '').split(' ').join(''));
       return processedPrice;  
    }


module.exports = processPrice; 

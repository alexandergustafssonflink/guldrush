function processProductName (productName) {
    let processedName = productName.replace('\n', '').replace('                      ', '').replace('                                            ', '').replace('  ', '').split('\n').join('').replace('I lager', '').replace('                                                ', ''); 
    return processedName; 
}


module.exports = processProductName; 
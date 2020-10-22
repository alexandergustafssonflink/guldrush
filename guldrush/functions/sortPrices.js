function sortPrices (liberty, guldC, tavex) {
   let data = [liberty, guldC, tavex];
    data.sort(function(a, b) {
    return a.price - b.price;
});

return data; 

}

export default sortPrices
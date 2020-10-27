// function sortPrices (liberty, guldC, tavex) {
//    let data = [liberty, guldC, tavex];
//     data.sort(function(a, b) {
//     return a.price - b.price;
// });

// return data; 

// }

function sortPrices (a, b) {
 if (a.price < b.price) { 
     return -1; 
     }
  if (a.price > b.price) { 
      return 1; 
      }
  return 0;
};




export default sortPrices
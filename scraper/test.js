const puppeteer = require('puppeteer');
const processPrice = require("./functions/processPrice"); 
const processProductName = require("./functions/processProductName"); 
const getProductInfo = require('./functions/testGetProductInfo'); 

   let currentDate = "2020-11-01"; 

   async function testTavex () {
    
  
   }

    async function test () {
   let guldC = await testTavex()

   console.log(guldC);
}

test();



 // let buyOrSell = await page.evaluate(() => 
        // document.querySelectorAll(".product__meta-box div:first-of-type span:first-of-type"))

        // return buyOrSell; 

//         let products = []   

//         for (i = 0; i < allNames.length; i++) {
//         products.push(
//             {
//                 price: allPrices[i],
//                 buyOrSell: buyOrSell[i],
//                 // url: allLinks[i],
//                 // name: allNames[i],
//                 // weight: allWeights[i],
//                 metal: "guld",
//                 company: "Tavex",
//                 date: currentDate
//             })
//  }
//             return products; 
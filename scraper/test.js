const puppeteer = require('puppeteer');


   async function testTavex () {
    const browser = await puppeteer.launch({
        headless: true
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://tavex.se/guld/guldtackor/");


    //    let allPrices = await page.evaluate(() => 
    //     Array.from(document.querySelectorAll(".product__meta-box div:first-of-type span:nth-child(2)"), 
    //     e => e.innerText));

        let buyOrSell = await page.evaluate(() => 
        document.querySelectorAll(".product__meta-box div:first-of-type span:first-of-type"))

        return buyOrSell; 

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
        
        await browser.close();

  
   }

    async function test () {
   let guldC = await testTavex()

   console.log(guldC);
}

test();
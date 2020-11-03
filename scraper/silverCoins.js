const puppeteer = require('puppeteer');
const getWeightOutOfName = require('./functions/getWeightOutOfName.js');
const processPrice = require('./functions/processPrice');
const processProductName = require('./functions/processProductName')
const getProductInfo = require('./functions/getProductInfo.js');
process.setMaxListeners(0);

let products = []
let currentDate = new Date(); 


/// LIBERTY SILVER
   async function getSilverCoinsLibertySilver ()
 {      
     const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://www.libertysilver.se/kopa/silvermynt");

        let allPrices = await page.evaluate(() => 
        Array.from(document.querySelectorAll(".productBox .productAddToCartBox tbody tr:nth-child(1) td:nth-child(2)"), 
        e => parseInt(e.innerText.replace(" kr", '').replace(" ", ""))));

        let allNames = await page.evaluate(() => 
        Array.from(document.querySelectorAll(".productBox .productInfoBox h2"), 
        e => e.innerText));

        let allLinks = await page.evaluate(() => 
        Array.from(document.querySelectorAll(".productBox .productInfoBox h2 a"), 
        e => e.href));

        let allWeights = await page.evaluate(() => 
        Array.from(document.querySelectorAll(".productBox .productInfoBox .productStatsBox p:first-of-type"), 
        e => e.innerText))

       let allWeightsTrimmed = allWeights.map((w) =>
            parseFloat(w.replace('gram', '').replace("Finvikt: ", '').replace(",", ".").split("  ")[0])
        )

        let products = []   

        for (i = 0; i < allNames.length; i++) {
        products.push(
            {
                price: allPrices[i],
                url: allLinks[i],
                name: allNames[i],
                weight: allWeightsTrimmed[i], 
                metal: "silver",
                product: "silvermynt", 
                company: "Liberty Silver",
                date: currentDate
            })
        
        }
        return products; 

        await browser.close();
} 






// TAVEX
async function getSilverCoinsTavex () {
   const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://tavex.se/silver/silvermynt/");

        let kruger1ozSilverCoin = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(4) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(4) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(4) > a > div > div > h3 > span",element => element.textContent)),
            weight: 31.5,
            metal: "silver",
            product: "silvermynt",
            company: "Tavex",
            date: currentDate
        }

        let austriaPhirharmonikar1ozSilverCoint = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(7) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(7) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(7) > a > div > div > h3 > span",element => element.textContent)),
            weight: 31.5,
            metal: "silver",
            product: "silvermynt",
            company: "Tavex",
            date: currentDate
        }


        let australia1ozKangarooSilverCoin = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(8) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(8) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(8) > a > div > div > h3 > span",element => element.textContent)),
            weight: 31.5,
            metal: "silver",
            product: "silvermynt",
            company: "Tavex",
            date: currentDate
        }
        

tavexProducts = [
    kruger1ozSilverCoin,
    austriaPhirharmonikar1ozSilverCoint, 
    australia1ozKangarooSilverCoin
 ]

return tavexProducts; 
        await browser.close();

}


// async function test () {
//    let guldC = await getSilverCoinsTavex()

//    console.log(guldC);
// }

// test(); 



    async function getAllSilverCoins () {
        let libertyProducts = await getSilverCoinsLibertySilver(); 
        let tavexProducts = await getSilverCoinsTavex(); 

        let products = libertyProducts.concat(tavexProducts); 
      
        return products; 
    }

    module.exports = getAllSilverCoins; 
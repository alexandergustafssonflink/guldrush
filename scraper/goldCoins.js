const puppeteer = require('puppeteer');
const getWeightOutOfName = require('./functions/getWeightOutOfName.js');
const processPrice = require('./functions/processPrice');
const processProductName = require('./functions/processProductName')
const getProductInfo = require('./functions/getProductInfo.js');
process.setMaxListeners(0);

let products = []
let currentDate = new Date(); 


/// LIBERTY SILVER
   async function getGoldCoinsLibertySilver ()
 {       const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://www.libertysilver.se/kopa/guldmynt");

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
                metal: "guld",
                product: "guldmynt", 
                company: "Liberty Silver",
                date: currentDate
            })
        
        }
        return products; 

        await browser.close();
} 



/// GULDCENTRALEN
async function getGoldCoinsGuldC () {
   const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://www.guldcentralen.se/guld-kop-och-salj");

        let canadaianMaple1GoldCoin = {
            price: processPrice(await page.$eval('body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(13) > figure > figcaption > p > span', element => element.textContent)), 
            url: await page.$eval('body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(13)', element => element.href), 
            name: processProductName(await page.$eval("body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(13) > figure > figcaption > h2",element => element.textContent)),
            weight: 1,
            metal: "guld",
            product: "guldmynt",
            company: "Guldcentralen",
            date: currentDate
        }

guldCProducts = [
    canadaianMaple1GoldCoin
 
 ]
return guldCProducts; 

        await browser.close();

}




// TAVEX
async function getGoldCoinsTavex () {
   const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://tavex.se/guld/guldmynt/");

        let austria1ozGoldCoin = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(1) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(1) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(1) > a > div > div > h3 > span",element => element.textContent)),
            weight: 31.5,
            metal: "guld",
            product: "guldmynt",
            company: "Tavex",
            date: currentDate
        }

        let australia1ozKangarooGoldCoin = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a > div > div > h3 > span",element => element.textContent)),
            weight: 31.5,
            metal: "guld",
            product: "guldmynt",
            company: "Tavex",
            date: currentDate
        }


        let australia1ozLunarGoldCoin = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(3) > a > div.product__meta > div > div:nth-child(2) > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(3) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(3) > a > div.product__meta > div > h3 > span",element => element.textContent)),
            weight: 31.5,
            metal: "guld",
            product: "guldmynt",
            company: "Tavex",
            date: currentDate
        }
        

tavexProducts = [
    austria1ozGoldCoin,
    australia1ozKangarooGoldCoin, 
    australia1ozLunarGoldCoin
 
 ]

return tavexProducts; 
        await browser.close();

}




    async function getAllGoldCoins () {
        let libertyProducts = await getGoldCoinsLibertySilver(); 
        let guldCProducts = await getGoldCoinsGuldC(); 
        let tavexProducts = await getGoldCoinsTavex(); 

        let products = libertyProducts.concat(guldCProducts, tavexProducts); 
      
        return products; 
    }
    
module.exports = getAllGoldCoins; 
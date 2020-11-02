const puppeteer = require('puppeteer');
const getWeightOutOfName = require('./functions/getWeightOutOfName.js');
const processPrice = require('./functions/processPrice')
const processProductName = require('./functions/processProductName')
const getProductInfo = require('./functions/getProductInfo.js');
process.setMaxListeners(0);

let products = []
let currentDate = new Date(); 


/// LIBERTY SILVER
   async function getGoldBarsLibertySilver ()
 {       const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://www.libertysilver.se/kopa/guldtackor");

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
            Number(w.replace('gram', '').replace("Finvikt: ", '').split("  ")[0])
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
                company: "Liberty Silver",
                date: currentDate
            })
        
        }
        return products; 

        await browser.close();
} 


/// GULDCENTRALEN
async function getGoldBarsGuldC () {

        const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://www.guldcentralen.se/guld-kop-och-salj");

        let allPrices = await page.evaluate(() => 
        Array.from(document.querySelectorAll(".prod .clearfix p"), 
        e => e.innerText));

        allPrices = await allPrices.map((p) => processPrice(p))

        let allNames = await page.evaluate(() => 
        Array.from(document.querySelectorAll(".prod .clearfix h2"), 
        e => e.innerText));

        let allWeights = await allNames.map((n) => getWeightOutOfName(n))

        let allLinks = await page.evaluate(() => 
        Array.from(document.querySelectorAll(".prodcells a"), 
        e => e.href)); 

        let products = []   

        for (i = 0; i < allNames.length; i++) {
        products.push(
            {
                price: allPrices[i],
                url: allLinks[i],
                name: allNames[i],
                weight: allWeights[i],
                metal: "guld",
                company: "Guldcentralen",
                date: currentDate
            })
        
        }

        return products; 
        
        await browser.close();
}




// TAVEX
async function getGoldBarsTavex () {
   const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://tavex.se/guld/guldtackor/");

        let pamp100GoldBar = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(5) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(5) > a > div.product__meta > div > h3 > span",element => element.textContent)),
            weight: 100,
            metal: "guld",
            company: "Tavex",
            date: currentDate
        }

        let pamp50GoldBar = {       
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a > div > div > h3 > span",element => element.textContent)),
            weight: 50,
            metal: "guld",
            company: "Tavex",
            date: currentDate
}

let pamp20GoldBar = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a > div > div > h3 > span",element => element.textContent)),
            weight: 20,
            metal: "guld",
            company: "Tavex",
            date: currentDate
}

let valcambi100GoldBar = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a > div > div > h3 > span",element => element.textContent)),
            weight: 100,
            metal: "guld",
            company: "Tavex",
            date: currentDate
}


let valcambiSuisse50GoldBar = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(10) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(10) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(10) > a > div > div > h3 > span",element => element.textContent)),
            weight: 50,
            metal: "guld",
            company: "Tavex",
            date: currentDate
   }


let pampFortuna100GoldBar = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > h3 > span",element => element.textContent)),
            weight: 100,
            metal: "guld",
            company: "Tavex",
            date: currentDate
}

let valcambiSuisse20GoldBar = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(14) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(14) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(14) > a > div > div > h3 > span",element => element.textContent)),
            weight: 20,
            metal: "guld",
            company: "Tavex",
            date: currentDate
}

let valcambiSuisse5GoldBar = {
            price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(18) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)), 
            url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(18) > a', element => element.href), 
            name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(18) > a > div > div > h3 > span",element => element.textContent)),
            weight: 5,
            metal: "guld",
            company: "Tavex",
            date: currentDate
}


tavexProducts = [
    pamp100GoldBar,
    pamp50GoldBar,
    pamp20GoldBar,
    valcambi100GoldBar,
    valcambiSuisse50GoldBar,
    pampFortuna100GoldBar,
    valcambiSuisse20GoldBar,
    valcambiSuisse5GoldBar,
 ]
return tavexProducts; 

 

       
        
        await browser.close();

}


    async function getAllGoldBars () {
        let libertyProducts = await getGoldBarsLibertySilver(); 
        let guldCProducts = await getGoldBarsGuldC(); 
        let tavexProducts = await getGoldBarsTavex(); 

        let products = libertyProducts.concat(guldCProducts, tavexProducts); 
      
        return products; 
    }



    module.exports = getAllGoldBars; 
const puppeteer = require('puppeteer');
const getWeightOutOfName = require('./functions/getWeightOutOfName.js');
const processPrice = require('./functions/processPrice')
const getProductInfo = require('./functions/getProductInfo.js');
process.setMaxListeners(0);

let currentDate = new Date(); 

 async function getSilverBarsLibertySilver ()
 {       const browser = await puppeteer.launch({
        headless: true
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://www.libertysilver.se/kopa/silvertackor");

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
            parseInt(w.replace('gram', '').replace("Finvikt: ", '').split("  ")[0].replace("1", "1000"))
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
                company: "Liberty Silver",
                date: currentDate
            })
        
        }
        return products; 

        await browser.close();
} 

async function getSilverBarsGuldC () {

      const browser = await puppeteer.launch({
        headless: true
  });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto("https://www.guldcentralen.se/silver-kop-och-salj");

        let allPrices = await page.evaluate(() => 
        Array.from(document.querySelectorAll(".prod .clearfix p"), 
        e => e.innerText));

        allPrices = await allPrices.map((p) => processPrice(p))

        let allNames = await page.evaluate(() => 
        Array.from(document.querySelectorAll(".prod .clearfix h2"), 
        e => e.innerText));

        let allWeights = allNames.map((n) => getWeightOutOfName(n))

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
                metal: "silver",
                company: "Guldcentralen",
                date: currentDate
            })
        
        }

        return products; 
        
        await browser.close();
}









// async function getProducts () {
//     let stuff = await getSilverBarsGuldC(); 
//     console.log(stuff);
// }
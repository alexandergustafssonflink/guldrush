const puppeteer = require('puppeteer');
const processPrice = require('./processPrice.js'); 
const processProductName = require('./processProductName.js'); 
process.setMaxListeners(0);

   async function getProductInfo (urlLink, 
   priceTag, 
   urlTag, 
   nameTag, 
   weightInfo, 
   typeInfo, 
   companyTag,
   dateInfo) {
          const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
        const page = await browser.newPage();
        await page.goto(urlLink);

        const productInfo = {
        price:  processPrice(await page.$eval(priceTag, element => element.textContent)), 
        url: await page.$eval(urlTag, element => element.href), 
        name: processProductName(await page.$eval(nameTag,element => element.textContent)), 
        weight: weightInfo, 
        metal: typeInfo, 
        company: companyTag, 
        date: dateInfo

        }

        return productInfo;
        await browser.close();

        }

        module.exports = getProductInfo; 
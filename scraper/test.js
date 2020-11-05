const puppeteer = require("puppeteer");
const processPrice = require("./functions/processPrice");
const processProductName = require("./functions/processProductName");
const getProductInfo = require("./functions/testGetProductInfo");
const getWeightOutOfName = require("./functions/getWeightOutOfName");

let currentDate = "2020-11-01";

async function testTavex() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://tavex.se/guld/guldtackor/");

  let allPrices = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".product__meta"), (product) => {
      const price = product.querySelector(".product__price");

      if (price) {
        const label = price.querySelector(".product__price-label");

        if (label && label.textContent.includes("Säljer")) {
          const value = price.querySelector(".product__price-value");

          return value.textContent;
        }
      }
    })
  );

  let allPricesTrimmed = await allPrices.filter((price) => {
    if (price !== null) {
      return price;
    }
  });

  let allNames = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".grid__col--xs-6"), (product) => {
      const price = product.querySelector(".product__price");
      const name = product.querySelector(".product__title-inner");

      if (price) {
        const label = price.querySelector(".product__price-label");

        if (label && label.textContent.includes("Säljer")) {
          const value = price.querySelector(".product__price-value");

          return name.textContent;
        }
      }
    })
  );

  let allNamesExceptNull = await allNames.filter((name) => {
    if (name !== null) {
      return name;
    }
  });

  let allNamesTrimmed = await allNamesExceptNull.map((name) => {
    return processProductName(name);
  });

  let allWeights = await allNamesTrimmed.map((name) => {
    return getWeightOutOfName(name);
  });

  let allLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".grid__col--xs-6"), (product) => {
      const price = product.querySelector(".product__price");
      const link = product.querySelector(".product--w-shadow");

      if (price) {
        const label = price.querySelector(".product__price-label");

        if (label && label.textContent.includes("Säljer")) {
          const value = price.querySelector(".product__price-value");

          return link.href;
        }
      }
    })
  );

  let allLinksTrimmed = await allLinks.filter((link) => {
    if (link !== null) {
      return link;
    }
  });

  let products = [];

  for (i = 0; i < allNamesTrimmed.length; i++) {
    products.push({
      price: allPricesTrimmed[i],
      url: allLinksTrimmed[i],
      name: allNamesTrimmed[i],
      weight: allWeights[i],
      metal: "guld",
      product: "guldtackor",
      company: "Tavex",
      date: "2020-12-12",
    });
  }

  return products;

  await browser.close();
}

async function test() {
  let tavex = await testTavex();

  console.log(tavex);
}

test();

// let products = await page.evaluate(() =>
// Array.from(document.querySelectorAll(".grid__col--xs-6"),
// e => e.innerHTML));

//    let products = await page.evaluate(() =>
// document.querySelectorAll(".grid__col--xs-6"),
// e => e.innerHTML));

// for (const product of products) {
// const price = await product.querySelector('.product__price');

// return price;

//         if (price) {
//         const label = await price.querySelector('.product__price-label');

//         if (label && label.textContent.includes('Säljer')) {
//             const value = await price.querySelector('.product__price-value');

//             return value.textContent
//         }
//     }
// }

// );

// const x = await page.eval$$(() => {
//         let products = document.querySelectorAll(".grid__col--xs-6");

//          products.forEach(product => {
//     const price = product.querySelector('.product__price');

//     if (price) {
//         const label = price.querySelector('.product__price-label');

//         if (label && label.textContent.includes('Säljer')) {
//             const value = price.querySelector('.product__price-value');

//             return value.textContent
//         }
//     }
// });

//     });

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

// OLD TAVEX
// async function getGoldBarsTavex () {
//    const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox']
//   });
//         const page = await browser.newPage();

//         await page.setDefaultNavigationTimeout(0);
//         await page.goto("https://tavex.se/guld/guldtackor/");

//         let pamp100GoldBar = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(5) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(5) > a > div.product__meta > div > h3 > span",element => element.textContent)),
//             weight: 100,
//             metal: "guld",
//             product: "guldtackor",
//             company: "Tavex",
//             date: currentDate
//         }

//         let pamp50GoldBar = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(11) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 50,
//             metal: "guld",
//             product: "guldtackor",
//             company: "Tavex",
//             date: currentDate
// }

// let pamp20GoldBar = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(15) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 20,
//             metal: "guld",
//             product: "guldtackor",
//             company: "Tavex",
//             date: currentDate
// }

// let valcambi100GoldBar = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(2) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 100,
//             metal: "guld",
//             product: "guldtackor",
//             company: "Tavex",
//             date: currentDate
// }

// let valcambiSuisse50GoldBar = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(10) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(10) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(10) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 50,
//             metal: "guld",
//             product: "guldtackor",
//             company: "Tavex",
//             date: currentDate
//    }

// let pampFortuna100GoldBar = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(8) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 100,
//             metal: "guld",
//             product: "guldtackor",
//             company: "Tavex",
//             date: currentDate
// }

// let valcambiSuisse20GoldBar = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(14) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(14) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(14) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 20,
//             metal: "guld",
//             product: "guldtackor",
//             company: "Tavex",
//             date: currentDate
// }

// let valcambiSuisse5GoldBar = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(18) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(18) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.has-pagination.js-loader-target > div.grid.grid--narrow-xs.grid--equalheight > div:nth-child(18) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 5,
//             metal: "guld",
//             product: "guldtackor",
//             company: "Tavex",
//             date: currentDate
// }

// tavexProducts = [
//     pamp100GoldBar,
//     pamp50GoldBar,
//     pamp20GoldBar,
//     valcambi100GoldBar,
//     valcambiSuisse50GoldBar,
//     pampFortuna100GoldBar,
//     valcambiSuisse20GoldBar,
//     valcambiSuisse5GoldBar,
//  ]
// return tavexProducts;

//         await browser.close();

// }

// TAVEX
// async function getSilverCoinsTavex () {
//    const browser = await puppeteer.launch({
//         headless: true,
//         args: ['--no-sandbox', '--disable-setuid-sandbox']
//   });
//         const page = await browser.newPage();

//         await page.setDefaultNavigationTimeout(0);
//         await page.goto("https://tavex.se/silver/silvermynt/");

//         let kruger1ozSilverCoin = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(4) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(4) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(4) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 31.5,
//             metal: "silver",
//             product: "silvermynt",
//             company: "Tavex",
//             date: currentDate
//         }

//         let austriaPhirharmonikar1ozSilverCoint = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(7) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(7) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(7) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 31.5,
//             metal: "silver",
//             product: "silvermynt",
//             company: "Tavex",
//             date: currentDate
//         }

//         let australia1ozKangarooSilverCoin = {
//             price: processPrice(await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(8) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from', element => element.textContent)),
//             url: await page.$eval('body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(8) > a', element => element.href),
//             name: processProductName(await page.$eval("body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(8) > a > div > div > h3 > span",element => element.textContent)),
//             weight: 31.5,
//             metal: "silver",
//             product: "silvermynt",
//             company: "Tavex",
//             date: currentDate
//         }

// tavexProducts = [
//     kruger1ozSilverCoin,
//     austriaPhirharmonikar1ozSilverCoint,
//     australia1ozKangarooSilverCoin
//  ]

// return tavexProducts;
//         await browser.close();

// }

// async function test () {
//    let guldC = await getSilverCoinsTavex()

//    console.log(guldC);
// }

// test();

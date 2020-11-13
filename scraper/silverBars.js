const puppeteer = require("puppeteer");
const getWeightOutOfName = require("./functions/getWeightOutOfName.js");
const processPrice = require("./functions/processPrice");
const getProductInfo = require("./functions/getProductInfo.js");
process.setMaxListeners(0);

async function getSilverBarsLibertySilver(currentDate) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.libertysilver.se/kopa/silvertackor");

  let allPrices = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        ".productBox .productAddToCartBox tbody tr:nth-child(1) td:nth-child(2)"
      ),
      (e) => parseInt(e.innerText.replace(" kr", "").replace(" ", ""))
    )
  );

  let allPricesWithVat = allPrices.map((price) => {
    let newPrice = price * 1.25;

    return Number(Math.round(newPrice));
  });

  let allNames = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".productBox .productInfoBox h2"),
      (e) => e.innerText
    )
  );

  let allLinks = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".productBox .productInfoBox h2 a"),
      (e) => e.href
    )
  );

  let allWeights = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        ".productBox .productInfoBox .productStatsBox p:first-of-type"
      ),
      (e) => e.innerText
    )
  );

  let allWeightsTrimmed = allWeights.map((w) =>
    parseInt(
      w
        .replace("gram", "")
        .replace("Finvikt: ", "")
        .split("  ")[0]
        .replace("1", "1000")
    )
  );

  let products = [];

  for (i = 0; i < allNames.length; i++) {
    products.push({
      price: allPricesWithVat[i],
      url: allLinks[i],
      name: allNames[i],
      weight: allWeightsTrimmed[i],
      metal: "silver",
      product: "silvertackor",
      company: "Liberty Silver",
      date: currentDate,
    });
  }
  return products;

  await browser.close();
}

async function getSilverBarsTavex(currentDate) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://tavex.se/silver/silvertackor/");

  let valcambi1000SilverBar = {
    price: processPrice(
      await page.$eval(
        "body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(1) > a > div > div > div.product__price.product__price--single > span.product__price-value.h-price-flash.js-product-price-from",
        (element) => element.textContent
      )
    ),
    url: await page.$eval(
      "body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(1) > a",
      (element) => element.href
    ),
    name: processProductName(
      await page.$eval(
        "body > div.h-canvas > div.v-category.js-list-modifier > div.h-container > div > div.grid__col--md-9.v-category__body.js-product-archive-results > div.v-category__content.js-loader-target > div > div:nth-child(1) > a > div > div > h3 > span",
        (element) => element.textContent
      )
    ),
    weight: 1000,
    metal: "silver",
    product: "silvertackor",
    company: "Tavex",
    date: currentDate,
  };

  tavexProducts = [];
  return tavexProducts;

  await browser.close();
}

async function getSilverBarsGuldC(currentDate) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.guldcentralen.se/silver-kop-och-salj");
  await page.waitForSelector(".prod .clearfix p");

  let allPrices = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".prod .clearfix p"),
      (e) => e.innerText
    )
  );

  allPrices = await allPrices.map((p) => processPrice(p));

  let allNames = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(".prod .clearfix h2"),
      (e) => e.innerText
    )
  );

  let allWeights = allNames.map((n) => getWeightOutOfName(n));

  let allLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".prodcells a"), (e) => e.href)
  );

  let products = [];

  for (i = 0; i < allNames.length; i++) {
    products.push({
      price: allPrices[i],
      url: allLinks[i],
      name: allNames[i],
      weight: allWeights[i],
      metal: "silver",
      product: "silvertackor",
      company: "Guldcentralen",
      date: currentDate,
    });
  }

  return products;

  await browser.close();
}

async function getAllSilverBars(currentDate) {
  let libertyProducts = await getSilverBarsLibertySilver(currentDate);
  let guldCProducts = await getSilverBarsGuldC(currentDate);

  let products = libertyProducts.concat(guldCProducts);

  return products;
}

module.exports = getAllSilverBars;

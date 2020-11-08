const puppeteer = require("puppeteer");
const getWeightOutOfName = require("./functions/getWeightOutOfName.js");
const processPrice = require("./functions/processPrice");
const processProductName = require("./functions/processProductName");
const getProductInfo = require("./functions/getProductInfo.js");
process.setMaxListeners(0);

let products = [];

/// LIBERTY SILVER
async function getSilverCoinsLibertySilver(currentDate) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.libertysilver.se/kopa/silvermynt");

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
    return Math.floor(parseFloat(newPrice));
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
    parseFloat(
      w
        .replace("gram", "")
        .replace("Finvikt: ", "")
        .replace(",", ".")
        .split("  ")[0]
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
      product: "silvermynt",
      company: "Liberty Silver",
      date: currentDate,
    });
  }
  return products;

  await browser.close();
}

// async function test() {
//   let test = await getSilverCoinsLibertySilver();
//   console.log(test);
// }

// test();

async function getSilverCoinsTavex(currentDate) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://tavex.se/silver/silvermynt/");

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

  let allPricesExceptNull = await allPrices.filter((price) => {
    if (price !== null) {
      return price;
    }
  });

  let allPricesTrimmed = await allPricesExceptNull.map((price) => {
    return processPrice(price);
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
      metal: "silver",
      product: "silvermynt",
      company: "Tavex",
      date: currentDate,
    });
  }

  return products;

  await browser.close();
}

async function getAllSilverCoins(currentDate) {
  let libertyProducts = await getSilverCoinsLibertySilver(currentDate);
  let tavexProducts = await getSilverCoinsTavex(currentDate);

  let products = libertyProducts.concat(tavexProducts);

  return products;
}

module.exports = getAllSilverCoins;

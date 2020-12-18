const puppeteer = require("puppeteer");
const getWeightOutOfName = require("./functions/getWeightOutOfName.js");
const processPrice = require("./functions/processPrice");
const processProductName = require("./functions/processProductName");
const getProductInfo = require("./functions/getProductInfo.js");
const gramToOz = require("./functions/gramToOz.js");
const ozToGram = require("./functions/ozToGram.js");
const getWeightInGramsFromLibertySilver = require("./functions/getWeightInGramsFromLibertySilver.js");
const getWeightTavex = require("./functions/getWeightTavex.js");
process.setMaxListeners(0);

let products = [];

/// LIBERTY SILVER
async function getGoldCoinsLibertySilver(currentDate) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.libertysilver.se/kopa/guldmynt");

  let allPrices = await page.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        ".productBox .productAddToCartBox tbody tr:nth-child(1) td:nth-child(2)"
      ),
      (e) => parseInt(e.innerText.replace(" kr", "").replace(" ", ""))
    )
  );

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
    getWeightInGramsFromLibertySilver(w)
  );

  function categorizeWeightInOz(weightInOz) {
    if (weightInOz == 1) {
      return "one-oz";
    } else if (weightInOz == 0.5) {
      return "half-oz";
    } else if (weightInOz == 0.25) {
      return "quarter-oz";
    } else if (weightInOz == 0.2) {
      return "one-fifth";
    } else if (weightInOz == 0.1) {
      return "one-tenth";
    } else {
      return "other";
    }
  }

  let allWeightsInOz = allWeightsTrimmed.map((w) => gramToOz(w));

  let ozCategory = allWeightsInOz.map((w) => categorizeWeightInOz(w));

  let products = [];

  for (i = 0; i < allNames.length; i++) {
    products.push({
      price: allPrices[i],
      url: allLinks[i],
      name: allNames[i],
      weightInGrams: allWeightsTrimmed[i],
      weight: ozCategory[i],
      weightOz: allWeightsInOz[i],
      metal: "guld",
      product: "guldmynt",
      company: "Liberty Silver",
      date: currentDate,
    });
  }
  return products;

  await browser.close();
}

/// GULDCENTRALEN
async function getGoldCoinsGuldC(currentDate) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.guldcentralen.se/guld-kop-och-salj");

  let canadaianMaple1GoldCoin = {
    price: processPrice(
      await page.$eval(
        "body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(13) > figure > figcaption > p > span",
        (element) => element.textContent
      )
    ),
    url: await page.$eval(
      "body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(13)",
      (element) => element.href
    ),
    name: processProductName(
      await page.$eval(
        "body > div.l-table.container > div.l-table__col.l-table__col--bigger > div > a:nth-child(13) > figure > figcaption > h2",
        (element) => element.textContent
      )
    ),
    weight: 1,
    weightOz: 31.1,
    metal: "guld",
    product: "guldmynt",
    company: "Guldcentralen",
    date: currentDate,
  };

  guldCProducts = [canadaianMaple1GoldCoin];
  return guldCProducts;

  await browser.close();
}

async function getGoldCoinsTavex(currentDate) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://tavex.se/guld/guldmynt/");

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
    return getWeightTavex(name);
  });

  let allWeightsInGram = await allWeights.map((weight) => {
    return ozToGram(weight);
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
      weight: allWeightsInGram[i],
      weightOz: allWeights[i],
      metal: "guld",
      product: "guldmynt",
      company: "Tavex",
      date: currentDate,
    });
  }

  return products;

  await browser.close();
}

async function getAllGoldCoins(currentDate) {
  let libertyProducts = await getGoldCoinsLibertySilver(currentDate);
  // let guldCProducts = await getGoldCoinsGuldC(currentDate);
  let tavexProducts = await getGoldCoinsTavex(currentDate);

  let products = libertyProducts.concat(tavexProducts);

  return products;
}

module.exports = getAllGoldCoins;

const puppeteer = require("puppeteer");
const getWeightOutOfName = require("./functions/getWeightOutOfName.js");
const processPrice = require("./functions/processPrice");
const processProductName = require("./functions/processProductName");
const getProductInfo = require("./functions/getProductInfo.js");
process.setMaxListeners(0);

let products = [];
let currentDate = new Date();

/// LIBERTY SILVER
async function getGoldBarsLibertySilver() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.libertysilver.se/kopa/guldtackor");

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
    Number(w.replace("gram", "").replace("Finvikt: ", "").split("  ")[0])
  );

  let products = [];

  for (i = 0; i < allNames.length; i++) {
    products.push({
      price: allPrices[i],
      url: allLinks[i],
      name: allNames[i],
      weight: allWeightsTrimmed[i],
      metal: "guld",
      product: "guldtackor",
      company: "Liberty Silver",
      date: currentDate,
    });
  }
  return products;

  await browser.close();
}

/// GULDCENTRALEN
async function getGoldBarsGuldC() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);
  await page.goto("https://www.guldcentralen.se/guld-kop-och-salj");

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

  let allWeights = await allNames.map((n) => getWeightOutOfName(n));

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
      metal: "guld",
      product: "guldtackor",
      company: "Guldcentralen",
      date: currentDate,
    });
  }

  return products;

  await browser.close();
}

async function getGoldBarsTavex() {
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
      metal: "guld",
      product: "guldtackor",
      company: "Tavex",
      date: currentDate,
    });
  }

  return products;

  await browser.close();
}

async function getAllGoldBars() {
  let libertyProducts = await getGoldBarsLibertySilver();
  let guldCProducts = await getGoldBarsGuldC();
  let tavexProducts = await getGoldBarsTavex();

  let products = libertyProducts.concat(guldCProducts, tavexProducts);

  return products;
}

module.exports = getAllGoldBars;

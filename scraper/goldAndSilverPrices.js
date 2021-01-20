const puppeteer = require("puppeteer");

process.setMaxListeners(0);

let products = [];

/// LIBERTY SILVER
async function getCurrentPrices(currentDate) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.setDefaultNavigationTimeout(0);

  await page.goto("https://www.libertysilver.se/");

  let currentGoldPrice = await page.$eval(
    "#pmPricesTableBody > tr:nth-child(2) > td.pmpricePrice",
    (e) =>
      parseFloat(
        e.innerText.replace(" kr", "").replace(" ", "").replace(",", ".")
      )
  );

  let currentSilverPrice = await page.$eval(
    "#pmPricesTableBody > tr:nth-child(4) > td.pmpricePrice",
    (e) =>
      parseFloat(
        e.innerText.replace(" kr", "").replace(" ", "").replace(",", ".")
      )
  );

  let prices = {
    goldPrice: currentGoldPrice,
    silverPrice: currentSilverPrice,
    date: currentDate,
  };

  return prices;

  await browser.close();
}

// async function test() {
//   let goldPrice = await getCurrentPrices();
//   console.log(goldPrice);
// }

// test();

module.exports = getCurrentPrices;

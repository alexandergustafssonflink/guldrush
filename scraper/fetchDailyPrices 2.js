const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority";
// const jsonFile = require("./test.json");
var fs = require("fs");
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

const getCurrentPrices = require("./goldAndSilverPrices");

async function run() {
  try {
    await client.connect();

    const database = client.db("guldrush");
    const collection = database.collection("daily-prices");
    let currentDate = new Date();
    console.log("GETTING PRICES");
    let prices = await getCurrentPrices(currentDate);

    const resultPrices = await collection.insertOne(prices);

    console.log("DONE!");
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
    process.exit();
  }
}
run().catch(console.dir);

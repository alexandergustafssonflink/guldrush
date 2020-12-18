const { MongoClient } = require("mongodb");
const getAllGoldBars = require("./goldBars");
const getAllSilverBars = require("./silverBars");
const getAllGoldCoins = require("./goldCoins");
const getAllSilverCoins = require("./silverCoins");
const uri =
  "mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority";
// const jsonFile = require("./test.json");
var fs = require("fs");
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db("guldrush");
    const collection = database.collection("prices");
    let currentDate = new Date();
    console.log("GETTING GOLDBARS");
    let goldBars = await getAllGoldBars(currentDate);

    console.log("GETTING GOLDCOINS");
    let goldCoins = await getAllGoldCoins(currentDate);
    console.log("GETTING SilverBARS");
    let silverBars = await getAllSilverBars(currentDate);
    console.log("GETTING SilverCOINS");
    let silverCoins = await getAllSilverCoins(currentDate);

    const resultGold = await collection.insertMany(goldBars);
    const resultGoldCoins = await collection.insertMany(goldCoins);
    const resultSilver = await collection.insertMany(silverBars);
    const resultSilverCoins = await collection.insertMany(silverCoins);

    // fs.writeFileSync("test4.json", JSON.stringify(goldBars), (err) => {
    //   if (err) throw err;
    //   console.log("Data written to file");
    // });

    console.log("DONE!");
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
    process.exit();
  }
}
run().catch(console.dir);

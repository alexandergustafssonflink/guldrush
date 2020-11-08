const { MongoClient } = require("mongodb");
const getAllGoldBars = require("./goldBars");
const getAllSilverBars = require("./silverBars");
const getAllGoldCoins = require("./goldCoins");
const getAllSilverCoins = require("./silverCoins");
const uri =
  "mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db("guldrush");
    const collection = database.collection("prices");
    let currentDate = new Date();

    let goldBars = await getAllGoldBars(currentDate);
    let goldCoins = await getAllGoldCoins(currentDate);
    let silverBars = await getAllSilverBars(currentDate);
    let silverCoins = await getAllSilverCoins(currentDate);

    const resultGold = await collection.insertMany(goldBars);
    const resultGoldCoins = await collection.insertMany(goldCoins);
    const resultSilver = await collection.insertMany(silverBars);
    const resultSilverCoins = await collection.insertMany(silverCoins);

    console.log("DONE!");
  } finally {
    await client.close();
    process.exit();
  }
}
run().catch(console.dir);

// setInterval(() => {

// }, 15 * 60 * 1000);

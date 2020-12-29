const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority";
// const jsonFile = require("./test.json");
// var fs = require("fs");
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db("guldrush");
    const collection = database.collection("prices");

    await collection.drop();
    await database.createCollection("prices");

    console.log("DELETED COLLECTION!");
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
    process.exit();
  }
}
run().catch(console.dir);

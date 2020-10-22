const { MongoClient } = require('mongodb'); 
const getData = require('./scraper'); 

const uri = "mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  
  try {
    await client.connect();

    const database = client.db('guldrush');
    const collection = database.collection('prices');

    let prices = await getData()
    const result = await collection.insertMany(prices);
    console.log(result);

  } finally {

    await client.close();
  }
}
 run().catch(console.dir)

// setInterval(() => {
   
// }, 15 * 60 * 1000);


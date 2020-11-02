const { MongoClient } = require('mongodb'); 
const getAllGoldBars = require('./goldBars'); 
const getAllSilverBars = require('./silverBars'); 

const uri = "mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  useUnifiedTopology: true
});

async function run() {
  
  try {
    await client.connect();

    const database = client.db('guldrush');
    const collection = database.collection('prices');

    let goldBars = await getAllGoldBars()
    let silverBars = await getAllSilverBars(); 
    const resultGold = await collection.insertMany(goldBars);
    const resultSilver = await collection.insertMany(silverBars);

    console.log(resultGold);

  } finally {

    await client.close();
    process.exit(); 
  }
}
 run().catch(console.dir)

// setInterval(() => {
   
// }, 15 * 60 * 1000);


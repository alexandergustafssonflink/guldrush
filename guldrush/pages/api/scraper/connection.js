const { MongoClient } = require('mongodb'); 
const getAllGoldBars = require('./goldBars'); 

const uri = "mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useUnifiedTopology: true
});

async function run() {
  
  try {
    await client.connect();

    const database = client.db('guldrush');
    const collection = database.collection('prices');

    let products = await getAllGoldBars()
    const result = await collection.insertMany(products);
    console.log(result);

  } finally {

    await client.close();
  }
}
//  run().catch(console.dir)

module.exports = run; 

// setInterval(() => {
   
// }, 15 * 60 * 1000);


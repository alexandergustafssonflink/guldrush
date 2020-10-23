const { MongoClient } = require('mongodb'); 
const getProducts = require('./products'); 

const uri = "mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useUnifiedTopology: true
});

async function run() {
  
  try {
    await client.connect();

    const database = client.db('guldrush');
    const collection = database.collection('prices');

    let products = await getProducts()
    const result = await collection.insertMany(products);
    console.log(result);

  } finally {

    await client.close();
  }
}
 run().catch(console.dir)

// setInterval(() => {
   
// }, 15 * 60 * 1000);


const { MongoClient } = require('mongodb'); 

const uri = "mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  
  try {
    await client.connect();

    const database = client.db('sample_mflix');
    const collection = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await collection.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
const getData = require("./scraper.js");
const { MongoClient } = require('mongodb'); 

async function main () {    
    const uri = 'mongodb+srv://alexander:zni2ev@cluster0.h5faa.mongodb.net/test?retryWrites=true&w=majority'; 
    const client = new MongoClient(uri);

   try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 



// async function processData () {
//      let prices = await getData(); 
       
//     console.log(prices);
      
// }

// processData()
const config = require('../../config/config.js')[process.env.NODE_ENV || 'dev'];

const MongoClient = require('mongodb').MongoClient

const client = new MongoClient(config.MONGO_URI);

const find_all = (collection_name, callback) => {
  client.connect((err) => {
      
    // Get the documents collection
    const db = client.db(config.MONGO_DB);
    // console.debug(db)
    const collection = db.collection(collection_name);
    // console.debug(collection)

    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  });
};


console.debug(`using MongoDB at ${config.MONGO_URI} database ${config.MONGO_DB}`);

module.exports = {
  client,
  find_all
};
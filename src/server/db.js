const config = require('../../config/config.js')[process.env.NODE_ENV || 'dev'];

const MongoClient = require('mongodb').MongoClient

const client = new MongoClient(config.MONGO_URI);

const find_all = (collection_name) => {
  return new Promise((resolve, reject) => {
    client.connect((err) => {
      if (err) {
        console.debug('mongodb error: ', err);
        reject(err);
        return;
      }

      // Get the documents collection
      const db = client.db();
      // console.debug(db)
      const collection = db.collection(collection_name);
      // console.debug(collection)

      // Find some documents
      collection.find({}).toArray((err, docs) => {
        if (err) {
          reject(err);
        } else {
          console.log("Found the following records");
          console.log(docs)
          resolve(docs);
        }
      });
    })
  });
};


console.debug(`using MongoDB at ${config.MONGO_URI} database ${config.MONGO_DB}`);

module.exports = {
  client,
  find_all
};
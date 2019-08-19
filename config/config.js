const config = {
  dev: {
    MONGO_URI: "mongodb://localhost/test",
  },
  production: {
    MONGO_URI: "mongodb://localhost/production",
  },
  heroku: {
    MONGO_URI: process.env.MONGODB_URI,
  }
};

module.exports = config;

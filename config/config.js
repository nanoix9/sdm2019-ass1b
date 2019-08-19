const config = {
  development: {
      MONGO_URI: "mongodb://localhost",
      MONGO_DB: 'test',
      MONGO_OPTIONS: { "db": { "safe": true } }
  },
  production: {
      MONGO_URI: "mongodb://localhost",
      MONGO_DB: 'production',
      MONGO_OPTIONS: { "db": { "safe": true } }
  }
};

module.exports = config;

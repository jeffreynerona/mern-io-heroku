const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://jeffreynerona:VyxfpsiDdWh4oF1I@cluster0-shard-00-00-k7flg.mongodb.net:27017,cluster0-shard-00-01-k7flg.mongodb.net:27017,cluster0-shard-00-02-k7flg.mongodb.net:27017/mernstarter2?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
  port: process.env.PORT || 8000,
};

export default config;

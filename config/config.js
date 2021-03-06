var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-mvc'
    },
    port: 3000,
    db: 'postgres://localhost/express-mvc-development'
  }
};

module.exports = config[env];

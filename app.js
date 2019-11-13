const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody!");
  res.send("Hello from Appsody again!");
});
 
module.exports.app = app;

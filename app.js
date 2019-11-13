const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody!");
  res.send("Hello from Appsody again!");
  res.send("Hello from Appsody again again!");
});
 
module.exports.app = app;

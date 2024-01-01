'use strict';
const express = require('express');
const app = express();
const contentData = require('./data/data.json');
const datakit = require('./service/datakit/datakit.js');
const fsu = require('./service/datakit/fsutil.js')

//app.use(express.static(__dirname));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use("/asset", express.static(__dirname + "/app/asset"));
app.use('/static', express.static(__dirname + '/app/public'));

app.get('/:tagPath', async function (req, res) {
  let result = "";

  let router = req.params.tagPath || "index";
  var data = fsu.readFile("./src/html/" + router + ".html.htpl");
  result = data;
  contentData.forEach(element => {
    result = result.replaceAll(element.var, element.val)
  })
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(result);
  return res.end();
});

app.get('/', function (req, res) {
  let result = "";
  let router = "index";
  var data = fsu.readFile("./src/html/" + router + ".html.htpl");
  result = data;
  contentData.forEach(element => {
    result = result.replaceAll(element.var, element.val)
  })
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(result);
  return res.end();
});

app.listen(4455, '0.0.0.0', () => console.log(`Server is listening on port 4455`))


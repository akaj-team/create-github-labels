var app = require('./index.js')

var fs = require('fs')
var labels = JSON.parse(fs.readFileSync(__dirname + '/labels.json', 'utf8'))

const TOKEN = ""
const ORG = "akaj-team";

app.createLables("akaj-team", "test", labels, TOKEN, function(status) {
  console.log(status);
})

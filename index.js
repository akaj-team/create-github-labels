var request = require('request');
/**
* This function is used to create labels
*
**/
function createLables(orgName, repository, labels, token, onFinish) {
  createLablesApi(orgName, repository, labels, token, onFinish)
}

function createLablesApi(orgName, repository, labels, token, onFinish) {
  for (var i = 0; i < labels.create.length; i++) {
    console.log(JSON.stringify(labels.create[i]));
    var options = {
      uri: `https://api.github.com/repos/${orgName}/${repository}/labels`,
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'user-agent': 'create-github-labels'
      },
      json: labels.create[i]
    };
    request(options, function(error, response, body) {
      if (!error && response.statusCode == 201) {
        console.log("Success - " + labels.create[i]);
      } else {
        console.log(body);
      }
    });
  }
  onFinish("Success")
}

module.exports.createLables = createLables;

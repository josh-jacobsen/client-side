var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function (err, data) {
  if (err) {
    console.log(err)
  }

  console.log(data.body) // in case you're curious

  var output = data.body

  output = JSON.parse(output)

  console.log(output);

  var viewModel = {
    stations: data.body
  }
  console.log("viewmodel", viewModel);
  var spaceHtml = example(viewModel)
  console.log('spacehtml', spaceHtml);
  document.body.innerHTML = spaceHtml
})

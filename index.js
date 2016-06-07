var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function (err, data) {
  if (err) {
    console.log(err)
  }

  console.log(data.body) // in case you're curious

  var output = data.body

  console.log('output', output);


  var input = JSON.parse(output)

  console.log('input', input);

  var viewModel = {
    stations: data.body
  }

  // console.log("viewmodel", viewModel);
  var spaceHtml = example(viewModel)
  document.body.innerHTML = spaceHtml
})

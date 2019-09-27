let express = require('express')

let ourApp = express()

ourApp.use(express.urlencoded({ extended: false }))

ourApp.get('/', function (req, res) {
  res.send(`
  <form action = "/answer" method="POST">
  <p> what the color of the sky when is sunny? </p>
  <input name="skyColor" autocomplete = 'off'>
  <button>Submit Answer</button>
  </form>
  `)
})

ourApp.post('/answer', function (req, res) {
  if (req.body.skyColor.toUpperCase() == 'BLUE') {
    res.send(`
    <p>congrats that correct!</p>
    <a href='/'>Back home page</a>
    `);
  } else {
    res.send(
      ` <p>sorry that is wrong!</p>
    <a href='/'>Back home page</a>`
    )
  }
});
ourApp.listen(5000)
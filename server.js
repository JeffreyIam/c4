let express = require('express')
let app = express()
app.use(express.static('.'))
let port = process.env.PORT || 8000
app.listen(port, () => {
  console.log('Listening on port', port)
})
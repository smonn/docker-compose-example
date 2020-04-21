const micro = require('micro')

const server = micro((req, res) => {
  res.end('hello from service2 ' + Date.now())
})

server.listen(process.env.PORT || 4100)

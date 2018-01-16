const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const data = require('./db.json')

server.use(middlewares)

// change people/:id route to nest the data inside of a 'person' object
server.get('/people/:id', (req, res) => {
  res.send({
    person: data.people.find((person) => person.id == req.params.id)
  })
})

server.use(router)

const port = process.env.PORT || 3265

server.listen(port, () => {
  console.log(`JSON Server is running at localhost:${port}`)
})
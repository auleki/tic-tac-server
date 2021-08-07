import 'reflect-metadata'
import app from './app'
var debug = require('debug')("socketio-server:server")
import * as http from 'http'
import socketServer from './socket'

var port = normalizePort(process.env.PORT || "9000")
app.set("port", port)

var server = http.createServer(app)

server.listen(port)
server.on("error", onError)
server.on("listening", onListening)
const io = socketServer(server)


function normalizePort (val: any) {
  var port = parseInt(val)

  if(isNaN(port)) return val 

  if (port >= 0) return port 
  
  return false 
}

function onError(error: any) {
  if(error.syscall !== "listen") {
    throw error
  }

  var bind = typeof port === "string" 
      ? "Pipe " + port 
      : "Port " + port

  switch (error.code) {
    case "EACCES": 
      console.error(bind + " required elevated privileges")
      process.exit(1)
      break
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening () {
  var addr = server.address()
  var bind = typeof addr === "string" 
      ? "Pipe " + port 
      : "Port " + port
  debug("Listening on " + bind)

  console.log(`app server up @ http://localhost:${port}`)
}


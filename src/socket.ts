import { useSocketServer } from "socket-controllers"
import { Server } from 'socket.io'

export default (httpServer: any) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*"
    }
  })

  io.on('connection', () => {})

  useSocketServer(io, { controllers: [__dirname + "/api/controllers/*.ts"] })

  return io 
}
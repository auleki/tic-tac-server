import { OnConnect, SocketController, ConnectedSocket, SocketIO } from "socket-controllers";
import { Socket, Server } from "socket.io";

@SocketController()
export class MainController {

  @OnConnect() 
  public onConnection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
    console.log("New Socket Connected", socket.id)
  }
}
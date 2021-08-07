import { OnConnect, SocketController, ConnectedSocket, SocketIO } from "socket-controllers";
import { Socket, Server } from "socket.io";

@SocketController()
export class MainController {

  @OnConnect() 
  public onConnection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
    console.log("New Socket Connected", socket.id)

    /* Listening for custom event  */  
    socket.on("custom_event", (data) => {
      console.log("Data", data)
    })
  }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.MainController = void 0;
var socket_controllers_1 = require("socket-controllers");
var MainController = /** @class */ (function () {
    function MainController() {
    }
    MainController.prototype.onConnection = function (socket, io) {
        console.log("New Socket Connected", socket.id);
        /* Listening for custom event  */
        socket.on("custom_event", function (data) {
            console.log("Data", data);
        });
    };
    __decorate([
        socket_controllers_1.OnConnect(),
        __param(0, socket_controllers_1.ConnectedSocket()), __param(1, socket_controllers_1.SocketIO())
    ], MainController.prototype, "onConnection");
    MainController = __decorate([
        socket_controllers_1.SocketController()
    ], MainController);
    return MainController;
}());
exports.MainController = MainController;

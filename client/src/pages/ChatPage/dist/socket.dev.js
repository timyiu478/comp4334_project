"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socket = void 0;

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var socket = _socket["default"].connect('wss://' + location.host, {
  transports: ["websocket"],
  rememberUpgrade: true,
  cors: {
    origin: "*"
  }
}); // console.log("location.host:",location.host);


exports.socket = socket;
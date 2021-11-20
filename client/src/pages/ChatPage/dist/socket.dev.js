"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tryReconnect = exports.socket = void 0;

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

var tryReconnect = function tryReconnect() {
  if (socket.connected === false && socket.connecting === false) {
    // use a connect() or reconnect() here if you want
    console.log("tryReconnect...");
    socket.connect();
    socket.emit('join', {});
  } else {
    console.log("connected");
  }
};

exports.tryReconnect = tryReconnect;
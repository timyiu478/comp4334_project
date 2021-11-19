import io from 'socket.io-client';

export const socket = io.connect('wss://'+ location.host,{ transports: ["websocket"],rememberUpgrade: true,cors:{origin:"*"} });

// console.log("location.host:",location.host);
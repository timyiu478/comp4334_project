import io from 'socket.io-client';

export const socket = io.connect('wss://'+ location.host,{ transports: ["websocket"],rememberUpgrade: true,cors:{origin:"*"} });

// console.log("location.host:",location.host);

export const tryReconnect = () => {
    if (socket.connected === false &&
        socket.connecting === false) {
        // use a connect() or reconnect() here if you want
        console.log("tryReconnect...");
        socket.connect();
        socket.emit('join', {});
    }else{ 
        console.log("connected");
    }
}


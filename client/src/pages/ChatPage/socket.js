import io from 'socket.io-client';

let socket;

export function ioConnect(csrf_token){
    socket = io.connect('wss://'+ location.host,
    {   transports: ["websocket"],
        rememberUpgrade: true,
        cors:{origin:"*"},
        credentials: true,
        forceBase64: true,
        methods: ["GET", "POST"],
        extraHeaders: {    
            "X-CSRF-TOKEN": csrf_token
        }
    });
    socket.emit('join', {});
    return socket;
}

export function ioDisconnect(){
    socket.disconnect();
    return socket = null;
}


// console.log("location.host:",location.host);

// export const tryReconnect = () => {
//     if (socket.CLOSED === false &&
//         socket.CONNECTING === false) {
//         // use a connect() or reconnect() here if you want
//         console.log("tryReconnect...");
//         socket.connect();
//         socket.emit('join', {});
//     }else{ 
//         console.log("connected");
//     }
// }


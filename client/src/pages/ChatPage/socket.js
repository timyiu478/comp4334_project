import io from 'socket.io-client';
import Cookies from 'js-cookie';

export const socket = io.connect('wss://'+ location.host,
{   transports: ["websocket"],
    rememberUpgrade: true,
    cors:{origin:"*"},
    credentials: true,
    forceBase64: true,
    methods: ["GET", "POST"],
    extraHeaders: {    
        "X-CSRF-TOKEN": Cookies.get('csrf_access_token')
    }
    });



// console.log("location.host:",location.host);

export const tryReconnect = () => {
    if (socket.CLOSED === false &&
        socket.CONNECTING === false) {
        // use a connect() or reconnect() here if you want
        console.log("tryReconnect...");
        socket.connect();
        socket.emit('join', {});
    }else{ 
        console.log("connected");
    }
}


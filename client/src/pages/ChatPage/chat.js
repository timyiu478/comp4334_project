import { deserializeRSAKey } from 'src/genKey.js';
import aesjs from 'aes-js';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { io } from 'socket.io-client';

export function decrypt_msg(data) {
    // console.log(data);
    let encryptedBytes = aesjs.utils.hex.toBytes(data['data']['msg']);
    let encrypted_msg_info;

    if (data['data']['to'] == localStorage.getItem('username')) {
        encrypted_msg_info = data['data']['msg_info'];
    } else {
        encrypted_msg_info = data['data']['msg_info_for_sender'];
    }

    let msg_info = JSON.parse(cryptico.decrypt(encrypted_msg_info['cipher'], SenderRSAkey)['plaintext']);
    // console.log(encrypted_msg_info);

    // console.log(msg_info);

    let aes = msg_info['aes'];

    // console.log(aes);
    //
    let aesCbc = new aesjs.ModeOfOperation.cbc(
        new Uint8Array(aes['key_256'].split(',')),
        new Uint8Array(aes['iv'].split(','))
    );

    let decryptedBytes = aesCbc.decrypt(encryptedBytes);
    let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

    let msg = decryptedText.slice(0, msg_info['msg_length']);
    // console.log(msg);

    return msg;
}

export async function get_history(target, start_message_index = 0) {
    const data = {
        target,
        start_message_index,
    };
    let history = [];
    await $.ajax({
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        headers: {
            'X-CSRF-TOKEN': Cookies.get('csrf_access_token'),
        },
        data: JSON.stringify(data),
        url: '/api/history/',
        success: (result, statusText) => {
            // Handle success
            const msg = result.msgs;
            console.log(msg);
            for (let i = 0; i < msg.length; i++) {
                history.push({ msg: decrypt_msg(msg[i]), date: msg[i].datetime, to: msg[i].data.to });
                // console.log(msg[i].datetime);
            }
            return history;
        },
        error: (jqXHR, textStatus, errorThrown) => {
            //handle error
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);

            return "error: ajax failed";
        },
    });
    return history;
}

export async function get_public_key(receiver) {
    const to = receiver;
    const data = { username: to };
    let publicKey = '';
    await $.ajax({
        method: 'POST',
        dataType: 'text',
        contentType: 'application/json',
        headers: {
            'X-CSRF-TOKEN': Cookies.get('csrf_access_token'),
        },
        data: JSON.stringify(data),
        url: '/api/public_keys/',
        success: function (result, statusText) {
            // Handle success
            publicKey = result;
            return result;
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //handle error
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        },
    });
    return publicKey;
}



let SenderRSAkey = deserializeRSAKey(localStorage.getItem('SenderRSAkey'));
console.log(SenderRSAkey);
let SenderPublicKeyString = cryptico.publicKeyString(SenderRSAkey);


const socket = io('https://' + document.domain + ':' + location.port);

socket.on('connect', function (data) {
    console.log(data);
    socket.emit('join', {});
});

socket.on('all', function (data) {
    console.log(data);
}); 

socket.on('message', function (data) {
    console.log(decrypt_msg(data));
});



function padding(msg) {
    if (msg.length % 16 != 0) {
        const count = msg.length % 16;
        console.log(count);
        let array = new Uint8Array(16 - count);
        array = crypto.getRandomValues(array);
        console.log(array);
        let pad = '';
        for (var i = 0; i < array.length; i++) {
            pad += String.fromCharCode((array[i] + 32) % 127);
        }
        console.log(msg + pad);
        return msg + pad;
    } else {
        return msg;
    }
}

export function sendMsg(msg, to, receiver_public_key) {
    // let msg = document.getElementById('message').value;

    console.log("to: ",to);

    let key_256 = crypto.getRandomValues(new Uint8Array(32));
    let iv = crypto.getRandomValues(new Uint8Array(16));

    let msgBytes = aesjs.utils.utf8.toBytes(padding(msg));

    let aesCbc = new aesjs.ModeOfOperation.cbc(key_256, iv);
    let encryptedBytes = aesCbc.encrypt(msgBytes);

    let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    console.log(encryptedHex);
    console.log('receiver_public_key: ' + receiver_public_key);
    const aes_key = {
        key_256: key_256.toString(),
        iv: iv.toString(),
    };

    const msg_info = {
        to,
        msg_length: msg.length,
        aes: aes_key,
    };

    const encrypted_msg_info = cryptico.encrypt(JSON.stringify(msg_info), receiver_public_key, SenderRSAkey);
    const encrypted_msg_info_for_sender = cryptico.encrypt(JSON.stringify(msg_info), SenderPublicKeyString);

    console.log(encrypted_msg_info);

    const data = {
        msg: encryptedHex,
        msg_info: encrypted_msg_info,
        msg_info_for_sender: encrypted_msg_info_for_sender,
        to,
    };

    socket.emit('message', data);
    // document.getElementById('receiver').value = "";
    // document.getElementById('message').value = "";
}

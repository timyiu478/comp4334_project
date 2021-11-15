import {deserializeRSAKey} from 'src/genKey.js';
import aesjs from 'aes-js';
import $ from 'jquery';
import Cookies from 'js-cookie';

export function decrypt_msg(data){
    console.log(data);
    let encryptedBytes = aesjs.utils.hex.toBytes(data['data']['msg']);
    let encrypted_msg_info;

    if(data['data']['to'] == localStorage.getItem('username')){
        encrypted_msg_info = data['data']['msg_info'];
    }else{
        encrypted_msg_info = data['data']['msg_info_for_sender'];
    }
        
    let msg_info = JSON.parse((cryptico.decrypt(encrypted_msg_info['cipher'], SenderRSAkey)['plaintext']));
    console.log(encrypted_msg_info);

    console.log(msg_info);

    let aes = msg_info['aes'];

    console.log(aes);
    //
    let aesCbc = new aesjs.ModeOfOperation.cbc(new Uint8Array(aes['key_256'].split(",")),new Uint8Array(aes['iv'].split(",")));

    let decryptedBytes = aesCbc.decrypt(encryptedBytes);
    let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

    let msg = decryptedText.slice(0,msg_info['msg_length']);
    console.log(msg);
    
    return msg;
}

export function get_history(target,start_message_index=0){

    data = {
        'target': target,
        'start_message_index': start_message_index
    }

    $.ajax({
        method: 'POST',
        dataType: 'json',
        contentType: "application/json",
        headers: {
            'X-CSRF-TOKEN': Cookies.get('csrf_access_token')
        },
        data: JSON.stringify(data),
        url: "/history/",
        success: function(result, statusText){
            // Handle success
            console.log(result);

            msgs = result['msgs'];
            for(let i=0;i<msgs.length;i++){
                data = msgs[i];
                decrypt_msg(data);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            //handle error
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}

export function get_public_key(){
    let to = document.getElementById('receiver').value;
    let data = {"username":to};
    $.ajax({
        method: 'POST',
        dataType: 'text',
        contentType: "application/json",
        headers: {
            'X-CSRF-TOKEN': Cookies.get('csrf_access_token')
        },
        data: JSON.stringify(data),
        url: "/public_keys/",
        success: function(result, statusText){
            // Handle success
            console.log(result);
            sendMsg(to,result);
        },
        error: function(jqXHR, textStatus, errorThrown){
            //handle error
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    })
}

var socket = io.connect('https://' + document.domain + ':' + location.port);

let SenderRSAkey = deserializeRSAKey(localStorage.getItem('SenderRSAkey'));
console.log(SenderRSAkey);
let SenderPublicKeyString = cryptico.publicKeyString(SenderRSAkey);  

socket.on('connect', function(data) {
    console.log(data);
    socket.emit('join', {});
});

socket.on('all',function(data){
    console.log(data);
})

socket.on('message',function(data){
    decrypt_msg(data);
});

function padding(msg){
    if(msg.length % 16 != 0){
        count = msg.length % 16;
        console.log(count);
        let array = new Uint8Array(16-count);
        array = crypto.getRandomValues(array);
        console.log(array); 
        pad = "";
        for (var i = 0; i < array.length; i++) {
            pad += String.fromCharCode((array[i]+32)%127);
        }
        console.log(msg+pad);
        return msg+pad;
    }
    else{
        return msg;
    }
}

export function sendMsg(msg,to,receiver_public_key){
    // let msg = document.getElementById('message').value;

    let key_256 = crypto.getRandomValues(new Uint8Array(32));
    let iv = crypto.getRandomValues(new Uint8Array(16));

    let msgBytes = aesjs.utils.utf8.toBytes(padding(msg));


    let aesCbc = new aesjs.ModeOfOperation.cbc(key_256, iv);
    let encryptedBytes = aesCbc.encrypt(msgBytes);

    let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    console.log(encryptedHex);
   
    aes_key = {
        'key_256': key_256.toString(),
        'iv': iv.toString()
    }

    msg_info = {
        'to':to,
        'msg_length':msg.length,
        'aes':aes_key
    } 

    encrypted_msg_info = cryptico.encrypt(JSON.stringify(msg_info), receiver_public_key, SenderRSAkey);
    encrypted_msg_info_for_sender = cryptico.encrypt(JSON.stringify(msg_info), SenderPublicKeyString);

    console.log(encrypted_msg_info);

    data = {
        'msg': encryptedHex,
        'msg_info': encrypted_msg_info,
        'msg_info_for_sender': encrypted_msg_info_for_sender,
        'to': to
    }

    socket.emit('message', data);
    // document.getElementById('receiver').value = "";
    // document.getElementById('message').value = "";
}
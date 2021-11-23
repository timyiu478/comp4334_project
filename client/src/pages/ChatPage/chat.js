
import aesjs from 'aes-js';
import $ from 'jquery';
import Cookies from 'js-cookie';
import {sha256} from 'src/hash-sha256.js';

export async function decrypt_msg(data,currrentUsername,SenderRSAkey,publicKey) {
    console.log("data:",data);
    let encryptedBytes = aesjs.utils.hex.toBytes(data['data']['encryptedHex']);
    // console.log("encryptedBytes:",encryptedBytes);
    let encrypted_msg_info;
    

    if (data['from'] == currrentUsername) {
        encrypted_msg_info = data['data']['encrypted_msg_info_for_sender'];
    } else {
        encrypted_msg_info = data['data']['encrypted_msg_info'];
    }
    // console.log("encrypted_msg_info:",encrypted_msg_info);
    // console.log("---------decrypt_msg----------");
    // console.log(data);
    // console.log(encrypted_msg_info);
    let msg_info = cryptico.decrypt(encrypted_msg_info['cipher'], SenderRSAkey);
    // console.log("msg_info:",msg_info);

    if(msg_info['status']=="failure"){
        console.log(msg_info);
        return false;
    }


    // console.log(msg_info['plaintext']);
    msg_info = msg_info['plaintext'];
    // console.log("msg_info:",msg_info);
    msg_info = JSON.parse(msg_info);
    // console.log("msg_info:",msg_info);
    // console.log(msg_info);
    
    let aes = msg_info['aes'];

    // console.log(aes);

    let aesCbc = new aesjs.ModeOfOperation.cbc(
        new Uint8Array(aes['key_256'].split(',')),
        new Uint8Array(aes['iv'].split(','))
    );

    let decryptedBytes = aesCbc.decrypt(encryptedBytes);
    // console.log("decryptedBytes:",decryptedBytes);
    let decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    // console.log("decryptedText:",decryptedText);
    let plaintext = JSON.parse(decryptedText.slice(0, msg_info['data_length']));
    // console.log("plaintext:",plaintext);
    let msg = plaintext['msg'];
    // console.log("msg:",msg);
    if (data['from'] != currrentUsername) {
        // verfiy signature
        let signature = plaintext['signature']['cipher'];
        // console.log("signature:",signature);
        let hash = cryptico.decrypt(signature, SenderRSAkey);
        // console.log("hash:",hash);
        if(hash['status']=="failure"){
            console.log("Invalid signature");
            return false;
        }

        if(publicKey!=hash.publicKeyString){
            console.log(publicKey);
            console.log(cryptico.publicKeyID(hash.publickey));
            console.log("Invalid signature");
            return false;
        }

        let signature_info = {
            aes_key:aes,
            msg:msg
        }
        let new_hash = await sha256(JSON.stringify(signature_info));
        // console.log("new_hash:",new_hash);
        if (new_hash==hash['plaintext']){
            // console.log("Valid signature");
        }else{
            console.log("Invalid signature");
            return false;
        }
    }

    // console.log(msg);

    return msg;
}

export function refresh_token() {
    $.ajax({
        method: 'GET',
        dataType: 'json',
        headers: {
            'X-CSRF-TOKEN': Cookies.get('csrf_access_token'),
        },
        url: '/api/token/refresh',
        success: (result, statusText) => {
            // Handle success
            alert("Refresh Token Successfully!");
        },
        error: (jqXHR, textStatus, errorThrown) => {
            //handle error
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
            alert("Refresh Token Failed!");
        },
    });
}

export async function get_history(target,currrentUsername,publicKey,SenderRSAkey, start_message_index = 0) {
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
            // console.log(msg);
            for (let i = 0; i < msg.length; i++) {
                decrypt_msg(msg[i],currrentUsername,SenderRSAkey,publicKey).then((plaintext)=>{
                    if (plaintext != false)
                        history.push({ msg: plaintext, date: msg[i].datetime, to: msg[i].data.to });
                });
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









function padding(msg) {
    if (msg.length % 16 != 0) {
        const count = msg.length % 16;
        // console.log(count);
        let array = new Uint8Array(16 - count);
        array = crypto.getRandomValues(array);
        // console.log(array);
        let pad = '';
        for (var i = 0; i < array.length; i++) {
            pad += String.fromCharCode((array[i] + 32) % 127);
        }
        // console.log(msg + pad);
        return msg + pad;
    } else {
        return msg;
    }
}

export async function encryptMsg(msg, to, receiver_public_key,SenderRSAkey,SenderPublicKeyString) {
    // let msg = document.getElementById('message').value;

    // console.log("to:",to);

    let key_256 = crypto.getRandomValues(new Uint8Array(32));
    let iv = crypto.getRandomValues(new Uint8Array(16));

    const aes_key = {
        key_256: key_256.toString(),
        iv: iv.toString(),
    };

    const signature_info={
        aes_key:aes_key,
        msg:msg
    }

    const hash = await sha256(JSON.stringify(signature_info));

    let signature = cryptico.encrypt(hash,receiver_public_key, SenderRSAkey);
    let data = JSON.stringify({msg:msg,signature:signature});
    let data_length = data.length;
    let padded_dataBytes = aesjs.utils.utf8.toBytes(padding(data));
    let aesCbc = new aesjs.ModeOfOperation.cbc(key_256, iv);
    let encryptedBytes = aesCbc.encrypt(padded_dataBytes);
    let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

    // let msgBytes = aesjs.utils.utf8.toBytes(padding(msg));

    // let aesCbc = new aesjs.ModeOfOperation.cbc(key_256, iv);
    // let encryptedBytes = aesCbc.encrypt(msgBytes);

    // let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    // console.log(encryptedHex);
    // console.log('receiver_public_key: ' + receiver_public_key);

    const msg_info = {
        data_length: data_length,
        aes: aes_key,
    };

    const encrypted_msg_info = cryptico.encrypt(JSON.stringify(msg_info), receiver_public_key);
    const encrypted_msg_info_for_sender = cryptico.encrypt(JSON.stringify(msg_info), SenderPublicKeyString);

    // const encrypted_msg_info = cryptico.encrypt(JSON.stringify(msg_info), receiver_public_key, SenderRSAkey);
    // const encrypted_msg_info_for_sender = cryptico.encrypt(JSON.stringify(msg_info), SenderPublicKeyString);

    // console.log(encrypted_msg_info);

    // const data = {
    //     msg: encryptedHex,
    //     msg_info: encrypted_msg_info,
    //     msg_info_for_sender: encrypted_msg_info_for_sender,
    //     to,
    // };
    const encrypted_data = {
        encryptedHex:encryptedHex,
        encrypted_msg_info:encrypted_msg_info,
        encrypted_msg_info_for_sender:encrypted_msg_info_for_sender,
        to:to
    }
    console.log(encrypted_data);
    return encrypted_data;
    // document.getElementById('receiver').value = "";
    // document.getElementById('message').value = "";
}

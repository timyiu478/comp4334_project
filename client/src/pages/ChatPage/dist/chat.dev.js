"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrypt_msg = decrypt_msg;
exports.get_history = get_history;
exports.get_public_key = get_public_key;
exports.encryptMsg = encryptMsg;

var _genKey = require("src/genKey.js");

// import aesjs from 'aes-js';
// import $ from 'jquery';
// import Cookies from 'js-cookie';
var SenderRSAkey = (0, _genKey.deserializeRSAKey)(localStorage.getItem('SenderRSAkey')); // console.log("SenderRSAkey:",SenderRSAkey);

var SenderPublicKeyString = cryptico.publicKeyString(SenderRSAkey); // console.log("SenderPublicKeyString:",SenderPublicKeyString);

var currrentUsername = localStorage.getItem('username'); // console.log("currrentUsername:",currrentUsername);

function decrypt_msg(data) {
  // console.log(data);
  var encryptedBytes = aesjs.utils.hex.toBytes(data['data']['msg']);
  var encrypted_msg_info;

  if (data['data']['to'] == currrentUsername) {
    encrypted_msg_info = data['data']['msg_info'];
  } else {
    encrypted_msg_info = data['data']['msg_info_for_sender'];
  } // console.log("---------decrypt_msg----------");
  // console.log(data);
  // console.log(encrypted_msg_info);


  var msg_info = cryptico.decrypt(encrypted_msg_info['cipher'], SenderRSAkey); // console.log(msg_info);

  if (msg_info['status'] == "failure") return false; // console.log(msg_info['plaintext']);

  msg_info = msg_info['plaintext'];
  msg_info = JSON.parse(msg_info); // console.log(msg_info);
  // console.log(msg_info);

  var aes = msg_info['aes']; // console.log(aes);
  //

  var aesCbc = new aesjs.ModeOfOperation.cbc(new Uint8Array(aes['key_256'].split(',')), new Uint8Array(aes['iv'].split(',')));
  var decryptedBytes = aesCbc.decrypt(encryptedBytes);
  var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
  var msg = decryptedText.slice(0, msg_info['msg_length']); // console.log(msg);

  return msg;
}

function get_history(target) {
  var start_message_index,
      data,
      history,
      _args = arguments;
  return regeneratorRuntime.async(function get_history$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          start_message_index = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
          data = {
            target: target,
            start_message_index: start_message_index
          };
          history = [];
          _context.next = 5;
          return regeneratorRuntime.awrap($.ajax({
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            headers: {
              'X-CSRF-TOKEN': Cookies.get('csrf_access_token')
            },
            data: JSON.stringify(data),
            url: '/api/history/',
            success: function success(result, statusText) {
              // Handle success
              var msg = result.msgs; // console.log(msg);

              for (var i = 0; i < msg.length; i++) {
                var plaintext = decrypt_msg(msg[i]);
                if (plaintext == false) continue;
                history.push({
                  msg: plaintext,
                  date: msg[i].datetime,
                  to: msg[i].data.to
                }); // console.log(msg[i].datetime);
              }

              return history;
            },
            error: function error(jqXHR, textStatus, errorThrown) {
              //handle error
              console.log(jqXHR);
              console.log(textStatus);
              console.log(errorThrown);
              return "error: ajax failed";
            }
          }));

        case 5:
          return _context.abrupt("return", history);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

function get_public_key(receiver) {
  var to, data, publicKey;
  return regeneratorRuntime.async(function get_public_key$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          to = receiver;
          data = {
            username: to
          };
          publicKey = '';
          _context2.next = 5;
          return regeneratorRuntime.awrap($.ajax({
            method: 'POST',
            dataType: 'text',
            contentType: 'application/json',
            headers: {
              'X-CSRF-TOKEN': Cookies.get('csrf_access_token')
            },
            data: JSON.stringify(data),
            url: '/api/public_keys/',
            success: function success(result, statusText) {
              // Handle success
              publicKey = result;
              return result;
            },
            error: function error(jqXHR, textStatus, errorThrown) {
              //handle error
              console.log(jqXHR);
              console.log(textStatus);
              console.log(errorThrown);
            }
          }));

        case 5:
          return _context2.abrupt("return", publicKey);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function padding(msg) {
  if (msg.length % 16 != 0) {
    var count = msg.length % 16; // console.log(count);

    var array = new Uint8Array(16 - count);
    array = crypto.getRandomValues(array); // console.log(array);

    var pad = '';

    for (var i = 0; i < array.length; i++) {
      pad += String.fromCharCode((array[i] + 32) % 127);
    } // console.log(msg + pad);


    return msg + pad;
  } else {
    return msg;
  }
}

function encryptMsg(msg, to, receiver_public_key) {
  var key_256, iv, msgBytes, aesCbc, encryptedBytes, encryptedHex, aes_key, msg_info, encrypted_msg_info, encrypted_msg_info_for_sender, data;
  return regeneratorRuntime.async(function encryptMsg$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // let msg = document.getElementById('message').value;
          // console.log("to:",to);
          key_256 = crypto.getRandomValues(new Uint8Array(32));
          iv = crypto.getRandomValues(new Uint8Array(16));
          msgBytes = aesjs.utils.utf8.toBytes(padding(msg));
          aesCbc = new aesjs.ModeOfOperation.cbc(key_256, iv);
          encryptedBytes = aesCbc.encrypt(msgBytes);
          encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes); // console.log(encryptedHex);
          // console.log('receiver_public_key: ' + receiver_public_key);

          aes_key = {
            key_256: key_256.toString(),
            iv: iv.toString()
          };
          msg_info = {
            to: to,
            msg_length: msg.length,
            aes: aes_key
          };
          encrypted_msg_info = cryptico.encrypt(JSON.stringify(msg_info), receiver_public_key, SenderRSAkey);
          encrypted_msg_info_for_sender = cryptico.encrypt(JSON.stringify(msg_info), SenderPublicKeyString); // console.log(encrypted_msg_info);

          data = {
            msg: encryptedHex,
            msg_info: encrypted_msg_info,
            msg_info_for_sender: encrypted_msg_info_for_sender,
            to: to
          };
          return _context3.abrupt("return", data);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
}
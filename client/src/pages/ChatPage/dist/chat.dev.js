"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrypt_msg = decrypt_msg;
exports.refresh_token = refresh_token;
exports.get_history = get_history;
exports.get_public_key = get_public_key;
exports.encryptMsg = encryptMsg;

var _aesJs = _interopRequireDefault(require("aes-js"));

var _jquery = _interopRequireDefault(require("jquery"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _hashSha = require("src/hash-sha256.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function decrypt_msg(data, currrentUsername, SenderRSAkey) {
  var encryptedBytes, encrypted_msg_info, msg_info, aes, aesCbc, decryptedBytes, decryptedText, plaintext, msg, signature, hash, signature_info, new_hash;
  return regeneratorRuntime.async(function decrypt_msg$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // console.log(data);
          data = JSON.parse(data);
          encryptedBytes = _aesJs["default"].utils.hex.toBytes(data['data']['encryptedHex']);

          if (data['data']['to'] == currrentUsername) {
            encrypted_msg_info = data['data']['encrypted_msg_info'];
          } else {
            encrypted_msg_info = data['data']['encrypted_msg_info_for_sender'];
          } // console.log("---------decrypt_msg----------");
          // console.log(data);
          // console.log(encrypted_msg_info);


          msg_info = cryptico.decrypt(encrypted_msg_info['cipher'], SenderRSAkey);

          if (!(msg_info['status'] == "failure")) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", false);

        case 6:
          // console.log(msg_info['plaintext']);
          msg_info = msg_info['plaintext'];
          msg_info = JSON.parse(msg_info); // console.log(msg_info);

          aes = msg_info['aes']; // console.log(aes);

          aesCbc = new _aesJs["default"].ModeOfOperation.cbc(new Uint8Array(aes['key_256'].split(',')), new Uint8Array(aes['iv'].split(',')));
          decryptedBytes = aesCbc.decrypt(encryptedBytes);
          decryptedText = _aesJs["default"].utils.utf8.fromBytes(decryptedBytes);
          plaintext = JSON.parse(decryptedText.slice(0, msg_info['data_length']));
          msg = plaintext['msg'];

          if (!(data['data']['to'] == currrentUsername)) {
            _context.next = 30;
            break;
          }

          // verfiy signature
          signature = plaintext['signature'];
          hash = cryptico.decrypt(signature, SenderRSAkey);

          if (!(hash['status'] == "failure")) {
            _context.next = 20;
            break;
          }

          console.log("Invalid signature");
          return _context.abrupt("return", false);

        case 20:
          signature_info = {
            aes_key: aes_key,
            msg: msg
          };
          _context.next = 23;
          return regeneratorRuntime.awrap((0, _hashSha.sha256)(JSON.stringify(signature_info)));

        case 23:
          new_hash = _context.sent;

          if (!(new_hash == hash)) {
            _context.next = 28;
            break;
          }

          console.log("Valid signature");
          _context.next = 30;
          break;

        case 28:
          console.log("Invalid signature");
          return _context.abrupt("return", false);

        case 30:
          return _context.abrupt("return", msg);

        case 31:
        case "end":
          return _context.stop();
      }
    }
  });
}

function refresh_token() {
  _jquery["default"].ajax({
    method: 'GET',
    dataType: 'json',
    headers: {
      'X-CSRF-TOKEN': _jsCookie["default"].get('csrf_access_token')
    },
    url: '/api/token/refresh',
    success: function success(result, statusText) {
      // Handle success
      alert("Refresh Token Successfully!");
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      //handle error
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
      alert("Refresh Token Failed!");
    }
  });
}

function get_history(target, currrentUsername, SenderRSAkey) {
  var start_message_index,
      data,
      history,
      _args2 = arguments;
  return regeneratorRuntime.async(function get_history$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          start_message_index = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 0;
          data = {
            target: target,
            start_message_index: start_message_index
          };
          history = [];
          _context2.next = 5;
          return regeneratorRuntime.awrap(_jquery["default"].ajax({
            method: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            headers: {
              'X-CSRF-TOKEN': _jsCookie["default"].get('csrf_access_token')
            },
            data: JSON.stringify(data),
            url: '/api/history/',
            success: function success(result, statusText) {
              // Handle success
              var msg = result.msgs; // console.log(msg);

              for (var i = 0; i < msg.length; i++) {
                var plaintext = decrypt_msg(msg[i], currrentUsername, SenderRSAkey);
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
          return _context2.abrupt("return", history);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function get_public_key(receiver) {
  var to, data, publicKey;
  return regeneratorRuntime.async(function get_public_key$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          to = receiver;
          data = {
            username: to
          };
          publicKey = '';
          _context3.next = 5;
          return regeneratorRuntime.awrap(_jquery["default"].ajax({
            method: 'POST',
            dataType: 'text',
            contentType: 'application/json',
            headers: {
              'X-CSRF-TOKEN': _jsCookie["default"].get('csrf_access_token')
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
          return _context3.abrupt("return", publicKey);

        case 6:
        case "end":
          return _context3.stop();
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

function encryptMsg(msg, to, receiver_public_key, SenderRSAkey, SenderPublicKeyString) {
  var key_256, iv, aes_key, signature_info, hash, signature, data, data_length, padded_dataBytes, aesCbc, encryptedBytes, encryptedHex, msg_info, encrypted_msg_info, encrypted_msg_info_for_sender, encrypted_data;
  return regeneratorRuntime.async(function encryptMsg$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          // let msg = document.getElementById('message').value;
          // console.log("to:",to);
          key_256 = crypto.getRandomValues(new Uint8Array(32));
          iv = crypto.getRandomValues(new Uint8Array(16));
          aes_key = {
            key_256: key_256.toString(),
            iv: iv.toString()
          };
          signature_info = {
            aes_key: aes_key,
            msg: msg
          };
          _context4.next = 6;
          return regeneratorRuntime.awrap((0, _hashSha.sha256)(JSON.stringify(signature_info)));

        case 6:
          hash = _context4.sent;
          signature = cryptico.encrypt(hash, receiver_public_key, SenderRSAkey);
          data = JSON.stringify({
            msg: msg,
            signature: signature
          });
          data_length = data.length;
          padded_dataBytes = _aesJs["default"].utils.utf8.toBytes(padding(data));
          aesCbc = new _aesJs["default"].ModeOfOperation.cbc(key_256, iv);
          encryptedBytes = aesCbc.encrypt(padded_dataBytes);
          encryptedHex = _aesJs["default"].utils.hex.fromBytes(encryptedBytes); // let msgBytes = aesjs.utils.utf8.toBytes(padding(msg));
          // let aesCbc = new aesjs.ModeOfOperation.cbc(key_256, iv);
          // let encryptedBytes = aesCbc.encrypt(msgBytes);
          // let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
          // console.log(encryptedHex);
          // console.log('receiver_public_key: ' + receiver_public_key);

          msg_info = {
            data_length: data_length,
            aes: aes_key
          };
          encrypted_msg_info = cryptico.encrypt(JSON.stringify(msg_info), receiver_public_key);
          encrypted_msg_info_for_sender = cryptico.encrypt(JSON.stringify(msg_info), SenderPublicKeyString); // const encrypted_msg_info = cryptico.encrypt(JSON.stringify(msg_info), receiver_public_key, SenderRSAkey);
          // const encrypted_msg_info_for_sender = cryptico.encrypt(JSON.stringify(msg_info), SenderPublicKeyString);
          // console.log(encrypted_msg_info);
          // const data = {
          //     msg: encryptedHex,
          //     msg_info: encrypted_msg_info,
          //     msg_info_for_sender: encrypted_msg_info_for_sender,
          //     to,
          // };

          encrypted_data = {
            encryptedHex: encryptedHex,
            encrypted_msg_info: encrypted_msg_info,
            encrypted_msg_info_for_sender: encrypted_msg_info_for_sender,
            to: to
          };
          console.log(encrypted_data);
          return _context4.abrupt("return", encrypted_data);

        case 20:
        case "end":
          return _context4.stop();
      }
    }
  });
}
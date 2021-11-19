"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeRSAKey = serializeRSAKey;
exports.deserializeRSAKey = deserializeRSAKey;
exports.gen_key_pair = gen_key_pair;
exports.gen_public_key = gen_public_key;

var _crypticoJs = _interopRequireWildcard(require("cryptico-js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function serializeRSAKey(key) {
  return JSON.stringify({
    coeff: key.coeff.toString(16),
    d: key.d.toString(16),
    dmp1: key.dmp1.toString(16),
    dmq1: key.dmq1.toString(16),
    e: key.e.toString(16),
    n: key.n.toString(16),
    p: key.p.toString(16),
    q: key.q.toString(16)
  });
}

function deserializeRSAKey(key) {
  var json = JSON.parse(key);
  var rsa = new _crypticoJs.RSAKey();
  rsa.setPrivateEx(json.n, json.e, json.d, json.p, json.q, json.dmp1, json.dmq1, json.coeff);
  return rsa;
}

function gen_key_pair(username, password) {
  var password_salt = "407e0fce8fcb1cee870e19575260b6f2"; // let username = document.getElementById('username').value;
  // let password = document.getElementById('password').value;

  var passphrase = username + password + password_salt;
  var Bits = 1024;

  var SenderRSAkey = _crypticoJs["default"].generateRSAKey(passphrase, Bits);

  return SenderRSAkey; // let SenderPublicKeyString = cryptico.publicKeyString(SenderRSAkey);
  // document.getElementById('public_key').value = SenderPublicKeyString;
  // console.log(SenderRSAkey);
  // localStorage.setItem('SenderRSAkey', serializeRSAKey(SenderRSAkey));
  // localStorage.setItem('username', username);
  // console.log(deserializeRSAKey(localStorage.getItem('MattsRSAkey')));
  // g
  // document.getElementById('signup_form').submit();
}

function gen_public_key(SenderRSAkey) {
  return _crypticoJs["default"].publicKeyString(SenderRSAkey);
}
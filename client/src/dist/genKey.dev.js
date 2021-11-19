"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serializeRSAKey = serializeRSAKey;
exports.deserializeRSAKey = deserializeRSAKey;
exports.gen_key_pair = gen_key_pair;
exports.gen_public_key = gen_public_key;

// import cryptico , { RSAKey } from 'cryptico.js';
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
  var rsa = new RSAKey();
  rsa.setPrivateEx(json.n, json.e, json.d, json.p, json.q, json.dmp1, json.dmq1, json.coeff);
  return rsa;
}

function gen_key_pair(username, password) {
  var password_salt = "407e0fce8fcb1cee870e19575260b6f2"; // let username = document.getElementById('username').value;
  // let password = document.getElementById('password').value;

  var passphrase = username + password + password_salt;
  var Bits = 1024;
  var SenderRSAkey = cryptico.generateRSAKey(passphrase, Bits);
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
  return cryptico.publicKeyString(SenderRSAkey);
}
import {cryptico} from 'cryptico-js';

export function serializeRSAKey(key) {
    return JSON.stringify({
    coeff: key.coeff.toString(16),
    d: key.d.toString(16),
    dmp1: key.dmp1.toString(16),
    dmq1: key.dmq1.toString(16),
    e: key.e.toString(16),
    n: key.n.toString(16),
    p: key.p.toString(16),
    q: key.q.toString(16)
    })
}

export function deserializeRSAKey(key) {
    let json = JSON.parse(key);
    let rsa = new RSAKey();
    rsa.setPrivateEx(json.n, json.e, json.d, json.p, json.q, json.dmp1, json.dmq1, json.coeff);
    return rsa;
}

export function gen_key_pair(username,password){
    let password_salt = "407e0fce8fcb1cee870e19575260b6f2";
    // let username = document.getElementById('username').value;
    // let password = document.getElementById('password').value;
    let passphrase = username+password + password_salt;
    
    let Bits = 1024;
    
    let SenderRSAkey = cryptico.generateRSAKey(passphrase, Bits);

    return SenderRSAkey;

    // let SenderPublicKeyString = cryptico.publicKeyString(SenderRSAkey);
    
    // document.getElementById('public_key').value = SenderPublicKeyString;

    // console.log(SenderRSAkey);

    // localStorage.setItem('SenderRSAkey', serializeRSAKey(SenderRSAkey));
    // localStorage.setItem('username', username);
    // console.log(deserializeRSAKey(localStorage.getItem('MattsRSAkey')));
    // g
    // document.getElementById('signup_form').submit();
}

export function gen_public_key(SenderRSAkey){
    return cryptico.publicKeyString(SenderRSAkey);
}

import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {serializeRSAKey,gen_public_key,gen_key_pair} from 'src/genKey.js';
import $ from 'jquery';

const FormDialog = ({ open, setOpen }) => {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleChange = (e) => {
        if(e.target.id == "username"){
            setUsername(e.target.value);
        }
        if(e.target.id == "password"){
            setPassword(e.target.value);
        } 
    }

    const handleClickOpen = () => {
        // setOpen(true);

        const senderRSAkey = gen_key_pair(username,password);
        const senderPublicKeyString = gen_public_key(senderRSAkey);

        const data = {
            'username': username,
            'password': password,
            'public_key': senderPublicKeyString
        }

        $.ajax({
            method: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(data),
            url: "/api/signup/",
            success: function(result, statusText){
                console.log(result);

                localStorage.setItem('SenderRSAkey', serializeRSAKey(senderRSAkey));
                localStorage.setItem('username', username);
                
                alert(result['msg']);
            },
            error: function(result, statusText){
                console.log(result);
                
                alert(result['responseJSON']['msg']);
            },
        })

        localStorage.setItem('SenderRSAkey', serializeRSAKey(senderRSAkey));
        localStorage.setItem('username', username);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Register</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To register to this website, please enter your username and also password here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={username}
                        onChange={handleChange}
                    />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={password}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClickOpen}>Register</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default FormDialog;

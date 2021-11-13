import React, { useState } from "react";
import styles from './styles.scss';
import { useHistory } from 'react-router-dom';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Register from 'components/Register';


import {serializeRSAKey,gen_key_pair,gen_public_key} from 'src/genKey.js';
import $ from 'jquery';

const Login = () => {
    const [open, setOpen] = useState(false);
    // const history = useHistory();

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

    const signUp = () => {
        // history.push('/chatpage');

        const senderRSAkey = gen_key_pair(username,password);

        const data = {
            'username': username,
            'password': password
        }

        localStorage.setItem('SenderRSAkey', serializeRSAKey(senderRSAkey));
        localStorage.setItem('username', username);

        $.ajax({
            method: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify(data),
            url: "/api/login/",
            success: function(result, statusText){
                console.log(result);
            },
            error: function(result, statusText){
                console.log(result);
            },
        })

    };

    const onClick = () => {
        setOpen(true);
    };

    return (
        <>
            <div className={styles.container}>
                <Register open={open} setOpen={setOpen} />
                <div className={styles.background} />
                <div className={styles.content}>
                    <div className={styles.register} role="button" onClick={onClick}>
                        Register
                    </div>
                    <FormControl className={styles.form}>
                        <h1 className={styles.heading}>Login</h1>
                        <div className={styles.input}>
                            <label htmlFor="name">Login Name</label>
                            <input type="text" name="username" id="username" autoComplete="none" value={username} onChange={handleChange} />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password"  value={password} onChange={handleChange} />
                        </div>
                        <div className={styles.submitContainer}>
                            <Button variant="contained" onClick={signUp}>
                                Login
                            </Button>
                        </div>
                    </FormControl>
                </div>
            </div>
        </>
    );
};

export default Login;

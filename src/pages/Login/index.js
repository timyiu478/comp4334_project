import React, { useState } from 'react';
import styles from './styles.scss';
import { useHistory } from 'react-router-dom';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Register from 'components/Register';

const Login = () => {
    const [open, setOpen] = useState(false);
    const history = useHistory();
    const signUp = () => {
        history.push('/chatpage');
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
                            <input type="text" name="name" id="name" autoComplete="none" />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
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

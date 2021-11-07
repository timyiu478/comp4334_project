import React, { useState } from 'react';
import styles from './styles.scss';

import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Register from 'components/Register';

const Login = () => {
    const [open, setOpen] = useState(false);
    // const signUp = () => {
    //     const { dispatch, history } = this.props;
    //     const { username, password } = this.state;

    //     dispatch(globalActions.showTopLoadingBar({ progress: 10 }));
    //     dispatch(userActions.signInWithAccount({ username, password })).then((resp) => {
    //         dispatch(globalActions.showTopLoadingBar({ progress: 100 }));
    //         if (resp && resp.id) {
    //             history.push(`${RoutePaths.DashboardPaths.key}`);
    //         }
    //     });
    // };

    const onClick = () => {
        setOpen(true);
        // dispatch(
        //     globalActions.showAlertModal({
        //         title: 'Login',
        //         message: 'Login Testing, press "Ok" to login',
        //         closeCallback: () => {
        //             history.push('/dashboard');
        //         },
        //     })
        // );
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
                            <Button variant="contained">Login</Button>
                        </div>
                    </FormControl>
                </div>
            </div>
        </>
    );
};

export default Login;

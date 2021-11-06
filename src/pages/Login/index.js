import React from 'react';
import styles from './styles.scss';
import withConnect from 'utils/withConnect';
import { withRouter } from 'react-router-dom';
import globalActions from 'store/global/actions';
import RoutePaths from 'config/RoutePaths';
import userActions from 'store/user/actions';
import { useDispatch } from 'react-redux';
const RegisterPage = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(
            globalActions.showAlertModal({
                title: 'Testing',
                message: 'Testing',
                closeCallback: () => {},
            })
        );
    };
    return <button onClick={onClick}>Click me</button>;
};
class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    signUp = () => {
        const { dispatch, history } = this.props;
        const { username, password } = this.state;

        dispatch(globalActions.showTopLoadingBar({ progress: 10 }));
        dispatch(userActions.signInWithAccount({ username, password })).then((resp) => {
            dispatch(globalActions.showTopLoadingBar({ progress: 100 }));
            if (resp && resp.id) {
                history.push(`${RoutePaths.DashboardPaths.key}`);
            }
        });
    };

    onClick = () => {
        const { dispatch } = this.props;
        dispatch(
            globalActions.showAlertModal({
                title: 'Testing',
                message: 'Testing',
                closeCallback: () => {},
            })
        );
    };

    render() {
        return (
            <div className={styles.container}>
                <h1>Login</h1>
                <button type="button" onClick={this.onClick}>
                    Click
                </button>
            </div>
        );
    }
}

export default RegisterPage;

import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import withConnect from 'utils/withConnect';
import NotFoundPage from 'pages/NotFoundPage';
import RoutePaths from 'config/RoutePaths';
import { store } from '../../store';
import userActions from 'store/user/actions';
import globalActions from 'store/global/actions';

class DashboardRouter extends Component {
    componentDidUpdate() {
        const rootState = store.getState();
        if (!(rootState && rootState.user && rootState.user.memberInfo && rootState.user.memberInfo.token)) {
            const { history, dispatch } = this.props;
            dispatch(
                globalActions.showErrorModal({
                    code: '100101',
                    onComplete: (item) => {
                        history.index = 0;
                        history.replace(RoutePaths.LoginPath);
                        dispatch(userActions.logoutUser());
                    },
                })
            );
        }
    }

    render() {
        const { basePath } = this.props;
        return (
            <Switch>
                {Object.keys(RoutePaths.DashboardPaths).map((item, index) => {
                    return (
                        <Route
                            key={RoutePaths.DashboardPaths[item].name}
                            exact
                            path={`${RoutePaths.DashboardPaths[item].path}`}
                            component={RoutePaths.DashboardPaths[item].component}
                        />
                    );
                })}
                {Object.keys(RoutePaths.DashboardDetailPaths).map((item, index) => {
                    return (
                        <Route
                            key={RoutePaths.DashboardDetailPaths[item].name}
                            exact
                            path={`${RoutePaths.DashboardDetailPaths[item].path}`}
                            component={RoutePaths.DashboardDetailPaths[item].component}
                        />
                    );
                })}
                <Redirect
                    exact
                    from={basePath}
                    to={`${RoutePaths.DashboardPaths[Object.keys(RoutePaths.DashboardPaths)[0]].path}`}
                />
                <Route component={NotFoundPage} />
            </Switch>
        );
    }
}

export default withConnect()(withRouter(DashboardRouter));

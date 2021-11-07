import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import Login from 'pages/Login';
import ScrollToTop from 'components/ScrollToTop';

import RoutePaths from 'config/RoutePaths';

const AppRouter = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path={RoutePaths.LoginPath} component={Login} />

            <Redirect from="*" to="/" />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;

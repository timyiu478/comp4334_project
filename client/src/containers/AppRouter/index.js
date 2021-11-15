import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import Login from 'pages/Login';
import ScrollToTop from 'components/ScrollToTop';
import chatBox from 'pages/ChatPage';
import RoutePaths from 'config/RoutePaths';

const AppRouter = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path={RoutePaths.LoginPath} component={Login} />
            <Route exact path={RoutePaths.ChatPage} component={chatBox} />
            <Redirect from="*" to="/"></Redirect>
            {/* <Route component={NotFoundPage} /> */}
        </Switch>
    </BrowserRouter>
);

export default AppRouter;

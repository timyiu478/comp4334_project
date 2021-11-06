import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import Login from 'pages/Login';
import ScrollToTop from 'components/ScrollToTop';
import DashboardRouter from 'containers/DashboardRouter';
import RoutePath from 'config/RoutePaths';

const AppRouter = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path={RoutePath.LoginPath} component={Login} />

            <Route path={RoutePath.DashboardPaths.key} 
                render={() => 
                    <DashboardRouter basePath={RoutePath.DashboardPaths.key} />
                } 
            />

            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;

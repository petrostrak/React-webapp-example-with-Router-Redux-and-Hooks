
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardComponent from '../components/DashboardComponent';
import CreateComponent from '../components/CreateComponent';
import EditComponent from '../components/EditComponent';
import HelpComponent from '../components/HelpComponent';
import ErrorComponent from '../components/ErrorComponent';
import Header from '../components/Header';

const AppRouter = () =>(
    <BrowserRouter>
        <di>
            <Header />
            <Switch>
                <Route path="/" component={DashboardComponent} exact={true} />
                <Route path="/create" component={CreateComponent} />
                <Route path="/edit" component={EditComponent} />
                <Route path="/help" component={HelpComponent} />
                <Route component={ErrorComponent} />
            </Switch>
        </di>
    </BrowserRouter>
);

export default AppRouter;
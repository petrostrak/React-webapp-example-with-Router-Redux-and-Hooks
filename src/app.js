import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const DashboardComponent = () => (
    <div>
        This is from my DashboardComponent!
    </div>
);


const CreateComponent = () => (
    <div>
        This is from my CreateComponent!
    </div>
);

const EditComponent = () => (
    <div>
        This is from my EditComponent!
    </div>
);

const HelpComponent = () => (
    <div>
        This is from my HelpComponent!
    </div>
);

const ErrorComponent = () => (
    <div>
        #ERROR404
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={DashboardComponent} exact={true}/>
            <Route path="/create" component={CreateComponent}/>
            <Route path="/edit" component={EditComponent} />
            <Route path="/help" component={HelpComponent} />
            <Route component={ErrorComponent} />
        </Switch>
    </BrowserRouter>    
);

ReactDOM.render(routes, document.getElementById('app'));

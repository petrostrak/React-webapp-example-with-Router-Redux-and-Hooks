import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';
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
        #ERROR404 <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink><br/>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));

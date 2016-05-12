var React = require('react');
var App = require("./js/Components/App");
var MainPage = require("./js/Components/MainPage");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
import {browserHistory} from "react-router";
import ReactDOM from "react-dom";
import "./css/global.scss";

const routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/">
                <IndexRoute component={MainPage}/>
                <Route path="home" component={MainPage}/>
            </Route>
        </Route>
    </Router>
);

ReactDOM.render((routes), document.getElementById('root'));

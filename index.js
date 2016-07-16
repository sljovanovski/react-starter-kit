var React = require('react');
var App = require("./js/Components/App");
import MainPage from "./js/Components/MainPage";
import SecondPage from "./js/Components/SecondPage";
import {browserHistory} from "react-router";
import ReactDOM from "react-dom";
import "./css/global.scss";
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

const routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/">
                <IndexRoute component={MainPage}/>
                <Route path="home" component={MainPage}/>
                <Route path="second" component={SecondPage}/>
            </Route>
        </Route>
    </Router>
);

ReactDOM.render((routes), document.getElementById('root'));

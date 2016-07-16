var React = require("react");
import {browserHistory} from "react-router";

const App = React.createClass({
    getInitialState: function () {
        return {
            firstPage: "Main Page",
            secondPage: "Second Page"
        }
    },
    redirect: function (route) {
        browserHistory.push(route);
    },
    render: function () {
        return React.cloneElement(this.props.children, {
            ...this.state,
            redirect: this.redirect
        })
    }
});

module.exports = App;
var React = require("react");

const App = React.createClass({
    getInitialState: function () {
        return {
            data: "pero"
        }
    },
    render: function () {
        return React.cloneElement(this.props.children, {
            ...this.state
        })
    }
});

module.exports = App;
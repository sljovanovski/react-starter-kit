var React = require("react");

const MainPage = React.createClass({
    render: function () {
        return <div>
            {this.props.data}
        </div>
    }
});

module.exports = MainPage;
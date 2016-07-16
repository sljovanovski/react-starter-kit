import React, {Component} from "react";

export default class MainPage extends Component {
    render() {
        return <div>
            This is {this.props.firstPage}
            <br/>
            <button onClick={() => this.props.redirect("/second")}>
                GO TO SECOND PAGE <i className="fa fa-arrow-right"/>
            </button>
        </div>
    }
}
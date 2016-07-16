import React, {Component} from "react";

export default class SecondPage extends Component {
    render() {
        return <div>
            This is {this.props.secondPage}
            <br/>
            <button onClick={() => this.props.redirect("/home")}>
                <i className="fa fa-arrow-left"/> GO BACK
            </button>
        </div>
    }
}
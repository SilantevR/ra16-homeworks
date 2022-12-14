import { Component } from "react";

export default class IconSwitch extends Component {
  render() {
    return (
      <span className="material-icons" onClick={this.props.onSwitch}>
        {this.props.icon}
      </span>
    );
  }
}

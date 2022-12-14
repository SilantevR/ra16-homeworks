import { Component } from "react";

export default class Button extends Component {
  isSelected = false;

  render() {
    if (this.props.selected === this.props.text) {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
    return (
      <button
        type={this.props.type}
        className={this.isSelected ? "button button_selected" : "button"}
        onClick={this.props.onSelect}
      >
        {this.props.text}
      </button>
    );
  }
}

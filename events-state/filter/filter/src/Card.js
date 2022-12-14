import { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <img alt={this.props.category} className="project" src={this.props.src} />
    );
  }
}

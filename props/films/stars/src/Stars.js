import React, { Component } from "react";
import Star from "./Star";

export default class Stars extends Component {
  render() {
    this.stars = [];
    if (this.props.count >= 1 && this.props.count <= 5) {
      for (let i = 1; i <= this.props.count; i++) {
        this.stars.push(i);
      }
    }
    return (
      <ul className="card-body-stars u-clearfix">
        {this.stars.map((i) => {
          return <Star key={i} />;
        })}
      </ul>
    );
  }
}

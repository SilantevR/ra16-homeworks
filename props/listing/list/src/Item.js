import { Component } from "react";

export default class item extends Component {
  render() {
    return (
      <div className="item">
        <div className="item-image">
          <a href={this.props.url}>
            <img alt="product" src={this.props.image} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{this.props.title}</p>
          <p className="item-price">
            {this.props.currency}
            {this.props.price}
          </p>
          <p className={this.props.level}>
            {this.props.quantity ? this.props.quantity + " left" : ""}
          </p>
        </div>
      </div>
    );
  }
}

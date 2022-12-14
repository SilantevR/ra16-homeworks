import { Component } from "react";

export default class ShopCard extends Component {
  render() {
    return (
      <div className="shop_card">
        <h1 className="card_header">{this.props.name}</h1>
        <h3 className="card_color">{this.props.color}</h3>
        <img
          alt={this.props.name}
          className="card_image"
          src={this.props.src}
        />
        <div className="card_price_container">
          <div className="card_price">
            {"$"}
            {this.props.price}
          </div>
          <button className="button">add to cart</button>
        </div>
      </div>
    );
  }
}

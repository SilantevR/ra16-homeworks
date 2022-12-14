import { Component } from "react";

export default class ShopItem extends Component {
  render() {
    return (
      <div className="shop_item">
        <img
          alt={this.props.name}
          className="item_image"
          src={this.props.src}
        />
        <h1 className="item_header">{this.props.name}</h1>
        <h3 className="item_color">{this.props.color}</h3>

        <div className="item_price">
          {"$"}
          {this.props.price}
        </div>
        <button className="button">add to cart</button>
      </div>
    );
  }
}

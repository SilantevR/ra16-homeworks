import { Component } from "react";
import Item from "./Item";

export default class Listing extends Component {
  render() {
    this.itemsForRender = this.props.items.map((item) => {
      if (item.title && item.title.length > 50) {
        item.title = item.title.slice(0, 50) + "...";
      }
      if (item.price) {
        if (item.currency_code === "USD") {
          item.currency_code = "$";
        } else if (item.currency_code === "EUR") {
          item.currency_code = "€";
        } else {
          item.currency_code = "GBP";
        }
      }
      if (item.quantity <= 10) {
        item.level = "item-quantity level-low";
      } else if (item.quantity > 10 && item.quantity <= 20) {
        item.level = "item-quantity level-medium";
      } else if (item.quantity > 20) {
        item.level = "item-quantity level-high";
      }
      return item;
    });

    return (
      <div className="item-list">
        {this.itemsForRender.map((item) => {
          return (
            <Item
              key={item.listing_id}
              url={item.url ? item.url : ""}
              image={item.MainImage ? item.MainImage.url_570xN : ""}
              title={item.title ? item.title : ""}
              currency={item.currency_code ? item.currency_code : ""}
              price={item.price ? item.price : ""}
              level={item.level ? item.level : ""}
              quantity={item.quantity ? item.quantity : ""}
            />
          );
        })}
      </div>
    );
  }
}

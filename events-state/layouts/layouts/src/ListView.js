import { Component } from "react";
import ShopItem from "./ShopItem";

export default class ListView extends Component {
  render() {
    return (
      <div className="list_view">
        {this.props.items.map((card) => {
          return (
            <ShopItem
              src={card.img}
              name={card.name}
              color={card.color}
              price={card.price}
            />
          );
        })}
      </div>
    );
  }
}

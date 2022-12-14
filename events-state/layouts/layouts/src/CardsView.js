import { Component } from "react";
import ShopCard from "./ShopCard";

export default class CardsView extends Component {
  render() {
    return (
      <div className="cards_view">
        {this.props.cards.map((card) => {
          return (
            <ShopCard
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

import React from "react";
import List from "./List";
import ListItem from "./ListItem";
import MoreBtn from "./MoreBtn";

/* 
Различные курсы валют + кнопка с дополнительной информацией
*/

export default function Rates({ items, onSelectMore }) {
  const renderRates = (items) => {
    return items.map((item) => {
      const { id, cur, diff } = item;

      return (
        <ListItem key={id} className="rate-item">
          <div>{cur}</div>
          <div>{diff}</div>
        </ListItem>
      );
    });
  };

  return (
    <div className="rates-block">
      <List className="rates-list" items={items}>
        {renderRates}
      </List>
      <MoreBtn
        mode="horizont"
        block="rates"
        text="..."
        onSelectMore={onSelectMore}
      />
    </div>
  );
}

import React from "react";
import Widget from "./Widget";

/*
  Запускает отрисовку виджетов
 */

export default function Widgets({ items }) {
  const renderWidgetContent = (item) => {
    return (
      <div className="widget">
        <div className="widget-title">{item.title}</div>
        <div className="widget-title">{item.content}</div>
      </div>
    );
  };

  return (
    <div className="widgets-block">
      {items.map((item) => {
        return (
          <Widget key={item.id} item={item}>
            {renderWidgetContent}
          </Widget>
        );
      })}
    </div>
  );
}

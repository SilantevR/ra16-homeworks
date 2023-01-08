import React from "react";

/*
 Отображает виджет
 */

export default function Widget({ item, children }) {
  return <div className="widget">{children(item)}</div>;
}

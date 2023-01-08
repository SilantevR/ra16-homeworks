import React from "react";

/*
 Элемент списка
 */

export default function ListItem({ className, children }) {
  return <li className={className}>{children}</li>;
}

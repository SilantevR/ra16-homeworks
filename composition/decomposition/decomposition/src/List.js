import React from "react";

/*
 Запускает функцию рендера дочерних элементов
 */

export default function List({ className, items, children }) {
  return <ul className={className}>{children(items)}</ul>;
}

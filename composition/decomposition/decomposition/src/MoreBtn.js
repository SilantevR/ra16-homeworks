import React from "react";

/*
Кнопка "Еще" вызывает alert
*/

export default function MoreBtn({ mode, block, text, onSelectMore }) {
  return (
    <span className={`${mode} more-icon`} onClick={() => onSelectMore(block)}>
      {text}
    </span>
  );
}

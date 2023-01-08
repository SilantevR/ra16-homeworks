import React from "react";

/*
Рекламный баннер
*/

export default function Banner({ item }) {
  const { link, url, title } = item;

  return (
    <div className="promo-block">
      <a href={link}>
        <img src={url} alt={title} />
      </a>
    </div>
  );
}

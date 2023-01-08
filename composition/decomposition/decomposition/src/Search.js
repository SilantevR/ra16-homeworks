import React from "react";
import logo from "./logo.svg";
import List from "./List";
import ListItem from "./ListItem";
import MoreBtn from "./MoreBtn";

/*
 Логотип + поле поиска + ссылки сервисов + кнопка дополнительных сервисов
*/

export default function Search({ titles, dayLink, onSelectMore }) {
  const renderTitles = (items) => {
    return items.map((item, index) => {
      return (
        <ListItem key={index} className="title-item">
          <a href={item.link}>{item.title}</a>
        </ListItem>
      );
    });
  };

  return (
    <div className="search-block">
      <img src={logo} alt="Логотип Яндекс" />
      <div className="wrap">
        <div className="titles-search-menu">
          <List className="titles-list" items={titles}>
            {renderTitles}
          </List>
          <MoreBtn
            mode="horizont"
            block="services"
            text="Ещё"
            onSelectMore={onSelectMore}
          />
        </div>
        <form method="GET" action="/search/" className="search">
          <input type="text" name="search" placeholder="Поиск..." />
        </form>
        <div className="day-link">
          Найдется всё, например
          <a href={dayLink.link}>{dayLink.title}</a>
        </div>
      </div>
    </div>
  );
}

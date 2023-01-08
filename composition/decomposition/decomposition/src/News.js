import { React, useState } from "react";
import List from "./List";
import ListItem from "./ListItem";

/*
 Новости по вкладкам:
 хранит state активной вкладки новостей
 отрисовывает новости согласно фильтра
*/

export default function News({ titles, items, date }) {
  const [activeTitle, setActiveTitle] = useState(titles[0]);

  const onSelectTitle = (title) => {
    setActiveTitle(title);
  };

  const renderTitles = (items) => {
    return items.map((item, index) => {
      const isActive = item === activeTitle && "active";
      return (
        <li
          key={index}
          className={`title-item ${isActive}`}
          onClick={() => onSelectTitle(item)}
        >
          {item}
        </li>
      );
    });
  };

  const renderNews = (items) => {
    return items
      .filter((item) => item.titlesList.includes(activeTitle))
      .map((item) => {
        const { id, link, icon, descr, text } = item;
        return (
          <ListItem key={id} className="news-item">
            <img src={icon} alt={descr} />
            <a href={link}>
              <div>{text}</div>
            </a>
          </ListItem>
        );
      });
  };

  return (
    <div className="news-block">
      <div className="news-block-titles">
        <List className="titles-list" items={titles}>
          {renderTitles}
        </List>
        <div>
          {date.toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
            weekday: "long",
          })}
        </div>
      </div>
      <List className="news-list" items={items}>
        {renderNews}
      </List>
    </div>
  );
}

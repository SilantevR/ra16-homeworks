import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <NavLink className="menu__item" to="/">
        Гоночн​ое такси
      </NavLink>
      <NavLink className="menu__item" to="/drift">
        Дрифт-такси
      </NavLink>
      <NavLink className="menu__item" to="/timeattack">
        Time Attack
      </NavLink>
      <NavLink className="menu__item" to="/forza">
        Forza Carting
      </NavLink>
    </div>
  );
}

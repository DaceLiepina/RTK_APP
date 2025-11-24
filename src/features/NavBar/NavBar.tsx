import type { JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        <li className={style.listelElement}>
          <NavLink to="home" className={style.home}>
            Home
          </NavLink>
        </li>
        <li className={style.listelElement}>
          <NavLink to="counter" className={style.link}>
            Counter
          </NavLink>
        </li>
        <li className={style.listelElement}>
          <NavLink to="userslist" className={style.link}>
            Users
          </NavLink>
        </li>
        <li className={style.listelElement}>
          <NavLink to="sandwich" className={style.link}>
            Sandwich
          </NavLink>
        </li>
        {/* <li className={style.listelElement}>
          <NavLink to="randomjoke" className={style.link}>
            Randome Joke
          </NavLink>
        </li> */}
        <li className={style.listelElement}>
          <NavLink to="products" className={style.link}>
            Products
          </NavLink>
        </li>
    
      </ul>
    </nav>
  );
}

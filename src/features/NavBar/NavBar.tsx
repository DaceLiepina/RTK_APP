import type { JSX } from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../auth/selectors";

export default function NavBar(): JSX.Element {
  const user = useAppSelector(selectUser);

  return (
    <nav className={style.navigation}>
      <ul className={style.list}>
        {user?.username ? (
          <>
            <li className={style.listelElement}>
              <NavLink to="/" className={style.home}>Home</NavLink>
            </li>

            <li className={style.listelElement}>
              <NavLink to="/counter" className={style.link}>Counter</NavLink>
            </li>

            <li className={style.listelElement}>
              <NavLink to="/userslist" className={style.link}>Users</NavLink>
            </li>

            <li className={style.listelElement}>
              <NavLink to="/weather" className={style.link}>Weather 🌦️</NavLink>
            </li>

            <li className={style.listelElement}>
              <NavLink to="/sandwich" className={style.link}>Sandwich</NavLink>
            </li>

            <li className={style.listelElement}>
              <NavLink to="/products" className={style.link}>Products</NavLink>
            </li>
          </>
        ) : (
          <>
            <li className={style.listelElement}>
              <NavLink to="/login" className={style.link}>Login</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
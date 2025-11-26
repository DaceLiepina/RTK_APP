import type { JSX } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Feedback from "../Feedback/Feedback";
import style from './Layout.module.css';


export default function Layout(): JSX.Element {
  return (
    <div className={style.layout}>
      <NavBar/>
      <main className={style.mainContent}>
        <Outlet/>
      </main>
      <Feedback/>
    </div>
  );
}
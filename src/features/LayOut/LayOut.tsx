import type { JSX } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Feedback from "../Feedback/Feedback";
import style from './LayOut.module.css';


export default function LayOut(): JSX.Element {
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
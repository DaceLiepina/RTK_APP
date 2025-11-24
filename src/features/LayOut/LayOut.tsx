import type { JSX } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Feedback from "../Feedback/Feedback";


export default function Layout():JSX.Element {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Feedback/>
    </div>
  )
}

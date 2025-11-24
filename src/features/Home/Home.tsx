import type { JSX } from "react";
import style from './Home.module.css'


export default function Home():JSX.Element {
  return (
    <div>
      <h1 className={style.mainTitle}>Welcome on our website</h1>
      <p className={style.subTitle}>Here you can see our Redux Toolkit projects</p>
    </div>
  )
}
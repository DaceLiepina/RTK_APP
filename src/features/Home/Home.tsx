import type { JSX } from "react";
import style from './Home.module.css'


export default function Home(): JSX.Element {
  return (
    <div className={style.homeContainer}>
      <h1 className={style.mainTitle}>Redux Toolkit App</h1>
      <p className={style.subTitle}>
        Modern React application with Redux Toolkit, TypeScript and Router
      </p>
      <img 
        src="https://www.mitrais.com/wp-content/uploads/2022/12/Blog_Banner_-_The_Easy_Way_to_Use_Redux_Toolkit_in_React.png" 
        alt="Redux Toolkit" 
        className={style.homeImage}
      />
    </div>
  );
}
import type { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addIngredient, clear } from "./sandwichSlice";
import style from './sandwich.module.css'

export default function Sandwich(): JSX.Element {
  const sandwich = useAppSelector((state) => state.sandwich.value);
  const dispatch = useAppDispatch();
  
  function handleAddCheese(): void {
    dispatch(addIngredient('🧀 cheese'));
  }
  
  function handleAddSalami(): void {
    dispatch(addIngredient('🍖 salami'));
  }
  
  function handleAddBread(): void {
    dispatch(addIngredient('🍞 bread'));
  }
  
  
  function handleClear(): void {
    dispatch(clear());
  }

  return (
     <div>
      <h1>Sandwich: </h1>
      <img src="https://tse1.mm.bing.net/th/id/OIP.mlS3WpqIIBOhaGDWnczEWwHaE7?pid=Api&P=0&h=180" alt="" style={{width:'60%'}} />
      <p>{sandwich}</p>
      <button type="button"  className={style.button} onClick={handleAddCheese} >Add 🧀 cheese</button>
      <button type="button" className={style.button} onClick={handleAddSalami}>Add 🍖 salami</button>
      <button type="button" className={style.button} onClick={handleAddBread}>Add 🍞 bread</button>
      <button type="button" className={style.button} onClick={handleClear}>🧹 Clear ingredients</button>
    </div>
  );
}
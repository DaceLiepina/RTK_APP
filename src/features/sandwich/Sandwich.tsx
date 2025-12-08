import type { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addIngredient, clear } from "./sandwichSlice";
import styles from './sandwich.module.css'

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
    <div className={styles.sandwichWrapper}>
      <h1 className={styles.sandwichTitle}>Sandwich Builder</h1>
      
      <img 
        src="https://tse1.mm.bing.net/th/id/OIP.mlS3WpqIIBOhaGDWnczEWwHaE7?pid=Api&P=0&h=180" 
        alt="Delicious sandwich"
        className={styles.sandwichImage}
      />
      
      <div className={styles.ingredientsDisplay}>
        {sandwich || "No ingredients yet. Add some!"}
      </div>
      
      <div className={styles.buttonsContainer}>
        <button 
          type="button"  
          className={styles.button} 
          onClick={handleAddCheese}
        >
          Add 🧀 Cheese
        </button>
        
        <button 
          type="button" 
          className={styles.button} 
          onClick={handleAddSalami}
        >
          Add 🍖 Salami
        </button>
        
        <button 
          type="button" 
          className={styles.button} 
          onClick={handleAddBread}
        >
          Add 🍞 Bread
        </button>
        
        <button 
          type="button" 
          className={`${styles.button} ${styles.clearButton}`}
          onClick={handleClear}
        >
          🧹 Clear All
        </button>
      </div>
    </div>
  );
}
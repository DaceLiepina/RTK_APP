import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { decrement, increment, incrementByAmount } from "./counterSlice";
import styles from "./Counter.module.css";

export const Counter = () => {
    const value = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.counterWrapper}>
            <h1 className={styles.counterTitle}>Counter</h1>
            <div className={styles.counterValue}>{value}</div>
            <div className={styles.buttonsContainer}>
                <button 
                    className={styles.counterButton}
                    onClick={() => dispatch(increment())}
                >
                    +1
                </button>
                <button 
                    className={styles.counterButton}
                    onClick={() => dispatch(decrement())}
                >
                    -1
                </button>
                <button 
                    className={styles.counterButton}
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    +5
                </button>
            </div>
        </div>
    );
}
//npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { removeFromCart, decreaseQuantity, addToCart } from "./cartSlice";

import styles from "./Cart.module.css";

const Cart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  if (items.length === 0) {
    return <h2 className={styles.title}>Cart is empty</h2>;
  }

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );  // seit tiek aprekjinata summa grozaa

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.title}>Cart</h2>

      <h3 className={styles.total}>Total: ${totalPrice.toFixed(2)}</h3>

      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <img src={item.image} className={styles.image} />

          <div className={styles.info}>
            <h3 className={styles.name}>{item.title}</h3>
            <p className={styles.price}>${item.price}</p>
            <p className={styles.quantity}>Quantity: {item.quantity}</p>

            <div className={styles.controls}>
              <button
                className={styles.btn}
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </button>

              <button
                className={styles.btn}
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                −
              </button>

              <button
                className={`${styles.btn} ${styles.remove}`}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
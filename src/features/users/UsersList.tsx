// src/features/users/UsersList.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers, selectUsers, selectLoading } from "./usersSlice";
import styles from "./UsersList.module.css";
import type { AppDispatch } from "../../app/store";


export const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector(selectUsers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); 
// "Ты используешь переменную в эффекте?
// Значит, добавь её в массив зависимостей".


// Тогда почему React  не знает что dispatch — это стабильная функция
//   и она не пересоздаётся и не меняется между рендерами. ?

// Потому что React не знает, что:

// мы используем Redux

// dispatch — стабилен

// он не изменится

// React-хуки устроены универсально и говорят:


  

  if (loading) return <p className={styles.loading}>Загрузка...</p>;

  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <div key={user.id} className={styles.card}>
          <h2 className={styles.name}>
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className={styles.field}>
            <span>Email:</span> {user.email}
          </p>

          <p className={styles.field}>
            <span>Username:</span> {user.username}
          </p>

          <p className={styles.field}>
            <span>Phone:</span> {user.phone}
          </p>

          <div className={styles.address}>
            <span>Address:</span>
            <p>
              {user.address.city}, {user.address.street} {user.address.number}
            </p>
            <p>ZIP: {user.address.zipcode}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
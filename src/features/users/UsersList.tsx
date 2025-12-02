// features/users/UsersList.tsx
import { useGetUsersQuery } from "./userApi";
import styles from "./UsersList.module.css";

export const UsersList = () => {
  const { 
    data: users = [], 
    isLoading, 
    isError, 
    error,
    refetch 
  } = useGetUsersQuery();

  if (isLoading) {
    return <p className={styles.loading}>Loading users...</p>;
  }

  if (isError) {
    return (
      <div>
        <p>Error: {error?.toString()}</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users List (RTK Query)</h1>
      {/* <button onClick={() => refetch()} className={styles.refetchBtn}>
        Refresh
      </button> */}
      
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
    </div>
  );
};
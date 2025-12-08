// features/users/UsersList.tsx
import { useGetUsersQuery } from "./userApi";
import styles from "./UsersList.module.css";

export const UsersList = () => {
  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch,
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
    <div className={styles.userListContainer}>
      <h1 className={styles.userListTitle}>Users List (RTK Query)</h1>
      {/* <button onClick={() => refetch()} className={styles.refetchBtn}>
        Refresh
      </button> */}

      <div className={styles.usersGrid}>
        {users.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <h2 className={styles.userName}>
              {user.name.firstname} {user.name.lastname}
            </h2>

            <p className={styles.userField}>
              <span>Email:</span> {user.email}
            </p>

            <p className={styles.userField}>
              <span>Username:</span> {user.username}
            </p>

            <p className={styles.userField}>
              <span>Phone:</span> {user.phone}
            </p>

            <div className={styles.userAddress}>
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

import styles from './UserTable.module.scss'

type User = { id: string; name: string; email: string; role: string }

export default function UserTable({ users }: { users: User[] }) {
  return (
    <>
      <h2>User Information</h2>
      <table className={styles.table} aria-label='User Table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

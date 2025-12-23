import styles from './EmptyState.module.scss'

export default function EmptyState() {
  return (
    <>
      <h1>Empty State Screen</h1>
      <div className={styles.empty}>No users found!!!</div>
    </>
  )
}

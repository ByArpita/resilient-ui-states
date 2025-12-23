import styles from './LoadingState.module.scss'

export default function LoadingState() {
  return (
    <>
      <h1>Loading State Screen</h1>
      <div className={styles.loading}>Loading users...</div> 
    </>
  )
}

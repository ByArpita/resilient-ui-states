import styles from './LoadingState.module.scss'

export default function LoadingState() {
  return (
    <>
      <h1>Loading State Screen</h1> 
      <div className={styles.container}>
      <div className={styles.header} />

      {[...Array(5)].map((_, i) => (
        <div key={i} className={styles.row}>
          <div className={styles.cell} />
          <div className={styles.cell} />
          <div className={styles.cellSmall} />
        </div>
      ))}
    </div>
    </>
  )
}

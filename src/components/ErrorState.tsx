import styles from './ErrorState.module.scss'

export default function ErrorState({ message }: { message: string }) {
  return (
    <>
      <h1>Error State Screen</h1>
      <div className={styles.error}>{message} :(</div>
    </>
  )
}

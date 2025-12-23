import styles from './PartialStateBanner.module.scss'

export default function PartialStateBanner() {
  return (
    <>
      <h1>Partial State Banner</h1>
      <div className={styles.banner}>Partial data loaded</div>
    </>
  )
}

import styles from './not-found.module.css';

export function NotFound() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>404: Not Found</h1>
      <p className={styles.message}>It's gone :(</p>
    </section>
  );
}

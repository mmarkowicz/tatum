import tatumLogo from '../../assets/tatum.avif';
import { Form } from './form';
import styles from './home.module.css';

export function Home() {
  return (
    <div>
      <a href="https://tatum.io/" target="_blank" rel="noreferrer">
        <img src={tatumLogo} alt="Tatum logo" className={styles.img} />
      </a>
      <h2 className={styles.header}>Tatum Hello</h2>
      <Form />
    </div>
  );
}

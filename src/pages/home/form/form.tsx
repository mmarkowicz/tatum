import { useState } from 'react';

import styles from './form.module.css';
import { useEthereumBalance } from './useEthereumBalance';

export const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const { message, isLoading, isError, fetchBalance } = useEthereumBalance();

  const handleCalculateBalance = async () => {
    if (inputValue) {
      await fetchBalance(inputValue);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={(e: Event) =>
          setInputValue((e.currentTarget as HTMLInputElement).value)
        }
        placeholder="Enter ETH wallet address to get balance"
        className={styles.input}
      />
      <button
        onClick={handleCalculateBalance}
        disabled={isLoading}
        className={styles.button}
      >
        {isLoading ? 'Loading...' : 'Get Balance'}
      </button>
      <div
        className={`${styles.message} ${isError ? styles.error : styles.primary}`}
      >
        {message}
      </div>
    </div>
  );
};

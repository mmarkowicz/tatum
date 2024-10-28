import { Ethereum, Network, TatumSDK } from '@tatumio/tatum';
import { useState } from 'react';

const isValidEthereumAddress = (address: string) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const useEthereumBalance = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchBalance = async (address: string) => {
    setIsLoading(true);

    if (!isValidEthereumAddress(address)) {
      setMessage('Invalid Ethereum address. Please check and try again.');
      setIsError(true);
      setIsLoading(false);
      return;
    }

    try {
      const tatum = await TatumSDK.init<Ethereum>({
        network: Network.ETHEREUM,
        apiKey: { v4: import.meta.env.VITE_APP_TATUM_API_KEY },
      });
      const balance = await tatum.address.getBalance({
        addresses: [address],
      });
      const balanceData = balance.data.filter(
        (asset) => asset.asset === 'ETH'
      )[0];

      if (isError) {
        setIsError(false);
      }

      if (balanceData) {
        setMessage(`Balance: ${balanceData.balance} ETH`);
      } else {
        setMessage('ETH balance not found for this address');
      }
    } catch (error) {
      setIsError(true);
      setMessage(`Error fetching balance: ${error} Please try again`);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchBalance, isError, isLoading, message };
};

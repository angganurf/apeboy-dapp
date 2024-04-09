import { useWallet } from '@solana/wallet-adapter-react';
import React, { useState, ChangeEvent } from 'react';
import { PublicKey } from '@solana/web3.js';

import {
  useGetBalance,
  useGetSignatures,
  useGetTokenAccounts,
  useRequestAirdrop,
  useTransferSol,
} from './account/account-data-access';
import { BuyButton } from './BuyButton';

export function InputSol({ address }: { address: PublicKey }) {
  const wallet = useWallet();
  const mutation = useTransferSol({ address });
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState('1');

  return (
    <>
      <input
        type="number"
        step="any"
        min="0.1"
        placeholder="Amount"
        className="w-[150px] text-center bg-none border-[1px] border-black"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <BuyButton
        submitLabel="buy $apeboy"
        submit={() => {
          mutation.mutateAsync({
            destination: new PublicKey(
              'A4mhNQ6ZrYGfZtAcsSEX3Rdo16RKYsD9siPzsrAEK7Bt'
            ),
            amount: parseFloat(amount),
          });
        }}
      />
    </>
  );
}

export default InputSol;

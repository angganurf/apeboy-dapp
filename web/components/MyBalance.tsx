import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { useGetBalance } from './account/account-data-access';

function BalanceSol({ balance }: { balance: number }) {
  return (
    <span>{Math.round((balance / LAMPORTS_PER_SOL) * 100000) / 100000}</span>
  );
}

export function MyBalance({ address }: { address: PublicKey }) {
  const query = useGetBalance({ address });

  return (
    <div className="w-full pt-2">
      <p className="text-sm" onClick={() => query.refetch()}>
        my bal : {query.data ? <BalanceSol balance={query.data} /> : '...'} SOL
      </p>
    </div>
  );
}

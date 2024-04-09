import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { useGetBalance } from './account/account-data-access';

export function Tokenomics() {
  return (
    <div className="flex flex-row justify-center mt-3">
      <div className="text-center bg-white text-black px-1">
        0.1 sol min buy | dist. after presale
      </div>
    </div>
  );
}

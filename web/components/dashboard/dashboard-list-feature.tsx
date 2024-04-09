'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletButton } from '../solana/solana-provider';

import { redirect } from 'next/navigation';
import Link from 'next/link';
import TitleBar from '../TitleBar';
import { AppHero } from '../ui/ui-layout';
import { Tokenomics } from '../Tokenomics';

export default function DashboardListFeature() {
  const { publicKey } = useWallet();

  if (publicKey) {
    return redirect(`${publicKey.toString()}`);
  }

  return (
    <div>
      <AppHero title="gm" subtitle="Say hi to apeboy." />
      <div className="max-w-xl mx-auto py-1 text-center center">
        <div className="w-full flex flex-row justify-center mb-5">
          <img src="/logo.png" width={100} />
        </div>
        <div className="mx-auto w-[400px] h-[350px] border-2 border-black rounded-sm bg-white px-1">
          <div className="flex flex-row justify-between relative w-full h-[25px] border-b-2 border-black">
            <TitleBar />
            <div className="flex justify-center flex-col">apeboy</div>
            <TitleBar />
          </div>
          <div className="relative w-full flex justify-center items-center h-[324px] flex-row">
            <div>
              <div className="flex flex-col justify-center items-center gap-[40px]">
                <Link
                  className="text-white bg-black px-2 my-1"
                  href={'/leaderboard'}
                >
                  presale leaderboards
                </Link>
                <WalletButton className="bg-white text-black" />
              </div>
            </div>
          </div>
        </div>
        <Tokenomics />
      </div>
    </div>
  );
}

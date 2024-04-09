'use client';

import { PublicKey } from '@solana/web3.js';
import { useMemo } from 'react';

import { redirect, useParams } from 'next/navigation';

import { ExplorerLink } from '../cluster/cluster-ui';
import { AppHero, ellipsify } from '../ui/ui-layout';
import Link from 'next/link';
import TitleBar from '../TitleBar';
import { WalletButton } from '../solana/solana-provider';
import { useWallet } from '@solana/wallet-adapter-react';
import CopyText from '../CopyText';
import InputSol from '../InputValue';
import { BuyButton } from '../BuyButton';
import { AccountBalance } from '../account/account-ui';
import { MyBalance } from '../MyBalance';
import { Tokenomics } from '../Tokenomics';

export default function DashboardDetailFeature() {
  const { publicKey } = useWallet();
  const params = useParams();
  const address = useMemo(() => {
    if (!publicKey) {
      return redirect(``);
    }
    try {
      return new PublicKey(params.address);
    } catch (e) {
      console.log(`Invalid public key`, e);
    }
  }, [params]);
  if (!address) {
    return <div>Error loading account</div>;
  }

  return (
    <div>
      <AppHero title="gm" subtitle="Say hi to apeboy." />
      <div className="max-w-xl mx-auto py-1 text-center center">
        <div className="w-full flex flex-row justify-center mb-5">
          <img src="/logo.png" width={100} />
        </div>
        <div className="mx-auto w-[400px] h-auto mb-3 pb-3 border-2 border-black rounded-sm bg-white px-1">
          <div className="flex flex-row justify-between relative w-full h-[25px] border-b-2 border-black">
            <TitleBar />
            <div className="flex justify-center flex-col">apeboy</div>
            <TitleBar />
          </div>
          <div className="relative w-auto flex justify-center items-center h-auto flex-col p-2.5 mt-5">
            <div>
              <div className="flex flex-col justify-center items-center">
                <Link
                  className="text-white bg-black px-2 my-1"
                  href={'/leaderboard'}
                >
                  go to presale leaderboard
                </Link>
                <div className="py-3 px-[40px] text-center break-all text-[15px]">
                  Presale Address :{' '}
                  <span className="hover:cursor-pointer tooltip">
                    <CopyText textToCopy="A4mhNQ6ZrYGfZtAcsSEX3Rdo16RKYsD9siPzsrAEK7Bt" />
                    <span className="tooltiptext">copy</span>
                  </span>
                </div>
                <div className="pb-1 px-[40px] text-center break-all text-[15px]">
                  <InputSol address={new PublicKey(params.address)} />
                </div>
                <WalletButton className="bg-white text-black" />
                <MyBalance address={address} />
              </div>
            </div>
          </div>
        </div>
        <Tokenomics />
      </div>
    </div>
  );
}

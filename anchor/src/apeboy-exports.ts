// Here we export some useful types and functions for interacting with the Anchor program.
import { PublicKey } from '@solana/web3.js';
import type { Apeboy } from '../target/types/apeboy';
import { IDL as ApeboyIDL } from '../target/types/apeboy';

// Re-export the generated IDL and type
export { Apeboy, ApeboyIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const programId = new PublicKey(
  '4FDDmdCN562ehMwnVLBnEDAZpH8dBKghycL7Hf3uEvqN'
);

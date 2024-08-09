import type { Options } from '@/lib/types';
import type { Address } from 'viem';
export declare const isMember: (address: Address | undefined, options: Options) => Promise<boolean>;

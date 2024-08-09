import type { Address } from 'viem';
import type { Config } from 'wagmi';
import { type Options, type TreeMember } from '../types';
export declare const fetchTreeMember: (address: string, options: Options) => Promise<TreeMember>;
export declare const fetchInviteStakingVolume: (member: Address, config: Config) => Promise<bigint>;
export declare const fetchInviteBettingVolume: (member: Address, config: Config) => Promise<bigint>;

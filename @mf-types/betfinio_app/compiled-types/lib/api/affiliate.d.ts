import { Options, TreeMember } from "../types";
import { Config } from "wagmi";
import { Address } from "viem";
export declare const fetchTreeMember: (address: string, options: Options) => Promise<TreeMember>;
export declare const fetchInviteStakingVolume: (member: Address, config: Config) => Promise<bigint>;
export declare const fetchInviteBettingVolume: (member: Address, config: Config) => Promise<bigint>;

import { WriteContractReturnType } from "@wagmi/core";
import { Options } from "@/lib/types";
import { Address } from "viem";
export declare const fetchBalance: (address: Address | undefined, options: Options, block?: bigint) => Promise<bigint>;
export declare const fetchAllowance: (address: Address | undefined, options: Options) => Promise<bigint>;
export declare const increaseAllowance: (options: Options) => Promise<WriteContractReturnType>;

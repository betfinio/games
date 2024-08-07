import { Address } from "viem";
export declare const useUsername: (address: Address | undefined) => import("@tanstack/react-query").UseQueryResult<string, Error>;
export declare const useCustomUsername: (address: Address | undefined, user: Address | undefined) => import("@tanstack/react-query").UseQueryResult<any, Error>;
export declare const useChangeUsername: () => import("@tanstack/react-query").UseMutationResult<boolean, any, string, unknown>;
export declare const useChangeCustomUsername: () => import("@tanstack/react-query").UseMutationResult<any, any, {
    username: string;
    address: Address;
}, unknown>;

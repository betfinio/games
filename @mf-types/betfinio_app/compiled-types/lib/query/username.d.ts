import { Address } from "viem";
export declare const useUsername: (address: Address | undefined) => import("@tanstack/react-query").UseQueryResult<string, Error>;
export declare const useCustomUsername: (address: Address | undefined, user: Address | undefined) => import("@tanstack/react-query").UseQueryResult<any, Error>;

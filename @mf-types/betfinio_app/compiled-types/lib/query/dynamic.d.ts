import { Stat, Timeframe } from "@/lib/types/staking";
export declare const useTotalStakedStat: (timeframe: Timeframe) => import("@tanstack/react-query").UseQueryResult<Stat[], Error>;
export declare const useTotalStakersStat: (timeframe: Timeframe) => import("@tanstack/react-query").UseQueryResult<Stat[], Error>;
export declare const useTotalProfitStat: (timeframe: Timeframe) => import("@tanstack/react-query").UseQueryResult<Stat[], Error>;

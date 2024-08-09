import { SupabaseClient } from "@supabase/supabase-js";
import { Stat, Timeframe } from "@/lib/types/staking";
import { Config } from "wagmi";
export declare const fetchTotalStakedStat: (timeframe: Timeframe, supabase: SupabaseClient) => Promise<Stat[]>;
export declare const fetchTotalStakersStat: (timeframe: Timeframe, supabase: SupabaseClient) => Promise<Stat[]>;
export declare const fetchTotalProfitStat: (timeframe: Timeframe, supabase: SupabaseClient) => Promise<Stat[]>;
export declare const fetchTotalStaked: (config: Config, block?: bigint) => Promise<bigint>;

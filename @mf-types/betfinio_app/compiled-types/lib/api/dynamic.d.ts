import type { Stat, Timeframe } from '@/lib/types/staking';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Config } from 'wagmi';
export declare const fetchTotalStakedStat: (timeframe: Timeframe, supabase: SupabaseClient | undefined) => Promise<Stat[]>;
export declare const fetchTotalStakersStat: (timeframe: Timeframe, supabase: SupabaseClient | undefined) => Promise<Stat[]>;
export declare const fetchTotalProfitStat: (timeframe: Timeframe, supabase: SupabaseClient | undefined) => Promise<Stat[]>;
export declare const fetchTotalStaked: (config: Config, block?: bigint) => Promise<bigint>;
export declare const fetchTotalProfit: (config: Config) => Promise<bigint>;

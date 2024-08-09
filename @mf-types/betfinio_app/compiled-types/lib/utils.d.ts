import { type ClassValue } from "clsx";
import { Config } from "@wagmi/core";
import { SupabaseClient } from "@supabase/supabase-js";
export declare function cn(...inputs: ClassValue[]): string;
export declare function getBlockByTimestamp(timestamp: number, supabase: SupabaseClient): Promise<bigint>;
export declare function getTimeByBlock(block: bigint, config: Config): Promise<number>;

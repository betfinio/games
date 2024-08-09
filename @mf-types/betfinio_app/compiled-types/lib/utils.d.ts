import type { SupabaseClient } from '@supabase/supabase-js';
import { type Config } from '@wagmi/core';
import { type ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export declare function getBlockByTimestamp(timestamp: number, supabase: SupabaseClient): Promise<bigint>;
export declare function getTimeByBlock(block: bigint, config: Config): Promise<number>;

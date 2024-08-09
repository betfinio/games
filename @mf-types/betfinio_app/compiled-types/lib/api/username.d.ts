import type { Options } from '@/lib/types';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Address } from 'viem';
export declare const fetchUsername: (member: Address | undefined, options: Options) => Promise<string>;
export declare const fetchCustomUsername: (address: Address | undefined, user: Address | undefined, supabase: SupabaseClient | undefined) => Promise<any>;
export declare const saveUsername: (username: string, me: Address, sign: any, options: Options) => Promise<boolean>;
export declare const saveCustomUsername: (username: string, address: Address, user: Address, sign: any, options: Options) => Promise<boolean>;

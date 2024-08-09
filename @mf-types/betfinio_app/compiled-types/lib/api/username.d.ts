import { Address } from "viem";
import { Options } from "@/lib/types";
import { SupabaseClient } from "@supabase/supabase-js";
export declare const fetchUsername: (member: Address | undefined, options: Options) => Promise<string>;
export declare const fetchCustomUsername: (address: Address | undefined, user: Address | undefined, supabase: SupabaseClient) => Promise<any>;
export declare const saveUsername: (username: string, me: Address, sign: any, options: Options) => Promise<boolean>;
export declare const saveCustomUsername: (username: string, address: Address, user: Address, sign: any, options: Options) => Promise<boolean>;

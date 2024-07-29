import { Address } from "viem";
import { Options } from "@/lib/types";
import { SupabaseClient } from "@supabase/supabase-js";
export declare const fetchUsername: (member: Address | undefined, options: Options) => Promise<string>;
export declare const fetchCustomUsername: (address: Address | undefined, user: Address | undefined, supabase: SupabaseClient) => Promise<any>;

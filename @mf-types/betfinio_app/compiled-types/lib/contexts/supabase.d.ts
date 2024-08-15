import { SupabaseClient } from '@supabase/supabase-js';
import { type FC, type PropsWithChildren } from 'react';
import type { PublicClient } from 'viem';
interface SupabaseContextProps {
    client: SupabaseClient | undefined;
    archiveClient: PublicClient | undefined;
}
export declare const SupabaseProvider: FC<PropsWithChildren<SupabaseContextProps>>;
export declare const useSupabase: () => SupabaseContextProps;
export { SupabaseClient };

import { FC, PropsWithChildren } from "react";
import { SupabaseClient } from "@supabase/supabase-js";
interface SupabaseContextProps {
    client: SupabaseClient | undefined;
}
export declare const SupabaseProvider: FC<PropsWithChildren<SupabaseContextProps>>;
export declare const useSupabase: () => SupabaseContextProps;
export { SupabaseClient };

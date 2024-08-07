import { ColumnDef, TableMeta } from "@tanstack/react-table";
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    isLoading?: boolean;
    meta?: TableMeta<TData>;
}
export declare function DataTable<TData, TValue>({ columns, data, isLoading, meta }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
export {};

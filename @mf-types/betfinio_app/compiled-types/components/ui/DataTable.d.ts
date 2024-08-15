import { type ColumnDef, type TableMeta } from '@tanstack/react-table';
import type { InitialTableState } from '@tanstack/react-table';
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    isLoading?: boolean;
    meta?: TableMeta<TData>;
    state?: InitialTableState;
    onRowClick?: (row: TData) => void;
}
export declare function DataTable<TData, TValue>({ columns, data, isLoading, meta, state, onRowClick }: DataTableProps<TData, TValue>): import("react/jsx-runtime").JSX.Element;
export {};

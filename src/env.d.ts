/// <reference types="@rsbuild/core/types" />
import '@tanstack/react-table';
import '@tanstack/react-router';

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

declare module '@tanstack/react-table' {
	interface ColumnMeta {
		className?: string;
		colSpan?: number;
	}
}

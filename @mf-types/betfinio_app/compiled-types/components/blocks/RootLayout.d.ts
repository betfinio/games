import type { FC, PropsWithChildren, ReactNode } from 'react';
interface RootLayoutProps {
    header: ReactNode;
    footer: ReactNode;
    sidebar: ReactNode;
    id: string;
}
declare const RootLayout: FC<PropsWithChildren<RootLayoutProps>>;
export default RootLayout;

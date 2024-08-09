import type { FC, PropsWithChildren } from 'react';
import { type NavItemProps } from './NavItem';
declare const NavGroup: FC<PropsWithChildren<{
    links: NavItemProps[];
    minimized?: boolean;
}>>;
export default NavGroup;

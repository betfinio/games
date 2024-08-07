import { FC, ReactNode } from "react";
export interface NavItemProps {
    icon?: ReactNode;
    label: string;
    href: string;
    soon?: boolean;
    active?: boolean;
    children?: NavItemProps[];
    disabled?: boolean;
    className?: string;
    external?: boolean;
    minimized?: boolean;
}
declare const NavItem: FC<NavItemProps>;
export default NavItem;

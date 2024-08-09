import { FC, PropsWithChildren } from "react";
import { NavItemProps } from "@/components/ui/NavItem.tsx";
declare const Sidebar: FC<PropsWithChildren<{
    links: NavItemProps[][];
}>>;
export default Sidebar;

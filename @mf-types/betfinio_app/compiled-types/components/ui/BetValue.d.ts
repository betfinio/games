import { FC } from 'react';
interface BetValueProps {
    value: number | bigint;
    tooltipId?: string;
    withIcon?: boolean;
    precision?: number;
    place?: 'top' | 'bottom' | 'left' | 'right';
    prefix?: string;
    postfix?: string;
    iconClassName?: string;
    className?: string;
}
export declare const BetValue: FC<BetValueProps>;
export {};

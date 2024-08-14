import { mapBetsToAuthors } from '@/src/lib/luro';
import { useRoundBets, useVisibleRound } from '@/src/lib/luro/query';
import { addressToColor } from '@/src/lib/roulette';
import { ZeroAddress } from '@betfinio/abi';
import { truncateEthAddress, valueToNumber } from '@betfinio/abi';
import Fox from '@betfinio/ui/dist/icons/Fox';
import { BetValue } from 'betfinio_app/BetValue';
import { useCustomUsername, useUsername } from 'betfinio_app/lib/query/username';
import cx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import {type CSSProperties, type FC, useEffect, useMemo, useRef, useState} from 'react';
import { FixedSizeList as List } from 'react-window';
import type { Address } from 'viem';
import { useAccount } from 'wagmi';

export const PlayersTab = () => {
	const { data: round } = useVisibleRound();
	const { data: bets = [] } = useRoundBets(round);
	const [listHeight, setListHeight] = useState(460);

	const totalVolume = useMemo(() => {
		return bets.reduce((acc, val) => acc + val.amount, 0n);
	}, [bets]);

	const players = useMemo(() => {
		return mapBetsToAuthors([...bets]).sort((a, b) => Number(b.amount - a.amount));
	}, [bets]);
	const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
		const player = players[index];
		return (
			<div className={'px-2'} style={style}>
				<TabItem key={index} player={player.player} amount={valueToNumber(player.amount)} percent={(Number(player.amount) / Number(totalVolume)) * 100} />
			</div>
		);
	};

	const ref = useRef<HTMLDivElement>(null);
	console.log(ref)

	useEffect(() => {
		if (ref.current) {
			setListHeight(ref.current.offsetHeight)
		} else {
			setListHeight(460)
		}
	}, [ref.current]);

	return (
		<div className={'grow flex flex-col gap-2 h-full'} ref={ref}>
			<AnimatePresence mode="popLayout">
				<List
					height={listHeight} // Adjust height to fit your layout
					itemCount={players.length}
					itemSize={74} // Adjust item size if necessary
					width={'100%'}
				>
					{Row}
				</List>
			</AnimatePresence>
		</div>
	);
};

export interface TabItemProps {
	player: Address;
	amount: number;
	percent: number;
	className?: string;
}

export const TabItem: FC<TabItemProps> = ({ player, amount, percent, className }) => {
	const { data: username } = useUsername(player);
	const { address = ZeroAddress } = useAccount();
	const { data: customUsername } = useCustomUsername(address, player);

	const formatPlayer = (player: string) => {
		if (player.length > 12) {
			return `${player.slice(0, 12)}...`;
		}
		return player;
	};

	return (
		<motion.div
			key={player}
			layout
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
			transition={{ duration: 0.5, type: 'spring' }}
			className={cx('rounded-lg flex bg-primary justify-between', className as string)}
		>
			<div className={'py-3 px-2 flex justify-between items-center grow'}>
				<div className={'flex items-start gap-[10px]'}>
					<Fox className={'w-5 h-5'} />
					<div className={'flex flex-col text-[#6A6F84] text-xs gap-2'}>
						<p className={'font-semibold text-sm !text-gray-300'}>{formatPlayer(customUsername || username || truncateEthAddress(player))}</p>
						<p className={cx('opacity-0')}>{truncateEthAddress(player)}</p>
					</div>
				</div>
				<div className={'flex flex-col items-end text-xs gap-2'}>
					<p className={'font-semibold text-sm'}>{percent.toFixed(2)}%</p>
					<p>
						<BetValue precision={2} value={amount} withIcon={true} />
					</p>
				</div>
			</div>
			<div className={'w-[10px] rounded-r-[10px]'} style={{ backgroundColor: addressToColor(player) }} />
		</motion.div>
	);
};

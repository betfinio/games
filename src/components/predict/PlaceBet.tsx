import { ETHSCAN } from '@/src/global.ts';
import { useCurrentRound, usePlaceBet, usePlayerBets, useRoundBets } from '@/src/lib/predict/query';
import type { Game, RoundPool } from '@/src/lib/predict/types';
import { ZeroAddress, valueToNumber } from '@betfinio/abi';
import { Bet } from '@betfinio/ui/dist/icons';
import { useAllowanceModal } from 'betfinio_app/allowance';
import { useIsMember } from 'betfinio_app/lib/query/pass';
import { useAllowance, useBalance, useIncreaseAllowance } from 'betfinio_app/lib/query/token';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'betfinio_app/tooltip';
import { toast } from 'betfinio_app/use-toast';
import cx from 'clsx';
import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import millify from 'millify';
import { type FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { useAccount } from 'wagmi';

const PlaceBet: FC<{ game: Game }> = ({ game }) => {
	const { t } = useTranslation('', { keyPrefix: 'games.predict.placeBet' });
	const [amount, setAmount] = useState<string>('5000');
	const { address = ZeroAddress } = useAccount();
	const { data: isMember = false } = useIsMember(address);
	const { data: allowance = 0n, isFetching: loading } = useAllowance(address);
	const { data: balance = 0n } = useBalance(address);
	const { data: round } = useCurrentRound(game.interval);
	const { requestAllowance, requested, setResult } = useAllowanceModal();
	useEffect(() => {
		if (requested) {
			handleBet(s);
		}
	}, [requested]);
	const { mutate: placeBet, data, isSuccess } = usePlaceBet();
	useEffect(() => {
		if (data && isSuccess) {
			setResult?.(data);
		}
	}, [isSuccess, data]);
	const { data: roundBets = [] } = useRoundBets(game.address, round);
	const [pool, setPool] = useState<RoundPool>({
		long: 0n,
		short: 0n,
		longPlayersCount: 0,
		shortPlayersCount: 0,
		longCount: 0,
		shortCount: 0,
	});

	useEffect(() => {
		const p: RoundPool = {
			long: roundBets.filter((e) => e.side).reduce((a, b) => a + b.amount, 0n),
			short: roundBets.filter((e) => !e.side).reduce((a, b) => a + b.amount, 0n),
			longPlayersCount: new Set(roundBets.filter((e) => e.side).map((e) => e.player)).size,
			shortPlayersCount: new Set(roundBets.filter((e) => !e.side).map((e) => e.player)).size,
			longCount: roundBets.filter((e) => e.side).length,
			shortCount: roundBets.filter((e) => !e.side).length,
		};
		setPool(p);
	}, [roundBets]);

	const [s, setSide] = useState<boolean>(false);

	const handleBet = async (side: boolean) => {
		if (address === ZeroAddress) {
			toast({
				description: 'Please connect your wallet',
				variant: 'destructive',
			});
			return;
		}
		if (!isMember) {
			toast({
				description: 'Connected wallet is not member of Betfin. Ask someone for an invitation',
				variant: 'destructive',
			});
			return;
		}
		if (amount === '') {
			toast({
				title: 'Please enter amount',
				variant: 'destructive',
			});
			return;
		}
		if (Number(amount) < 1) {
			toast({
				title: 'Minimum bet amount is 1 BET',
				variant: 'destructive',
			});
			return;
		}
		try {
			BigInt(Number(amount));
		} catch (e) {
			toast({
				title: 'Invalid amount',
				variant: 'destructive',
			});
			return;
		}
		if (valueToNumber(allowance) < Number(amount)) {
			setSide(s);
			requestAllowance?.('bet', BigInt(amount) * 10n ** 18n);
			toast({
				title: "You don't have enough allowance",
				variant: 'destructive',
			});
			return;
		}
		placeBet({ amount: BigInt(amount) * 10n ** 18n, side, game: game.address });
	};

	const handleBetChange = (value: string) => {
		setAmount(value);
	};
	return (
		<div className={'flex flex-col gap-4 col-span-4 md:col-span-3 items-center drop-shadow-[0_0_35px_rgba(87,101,242,0.75)]'}>
			<h2 className={'font-medium uppercase hidden md:block'}>{t('title')}</h2>
			<div className={cx('w-full border border-gray-800 rounded-[10px] bg-primaryLight py-5 px-10 flex flex-col items-center gap-6 relative')}>
				<div className={'w-full'}>
					<NumericFormat
						className={'w-full rounded-[10px] text-center text-sm bg-primary p-3 font-semibold text-white disabled:cursor-not-allowed'}
						thousandSeparator={','}
						min={1}
						disabled={loading || balance === 0n}
						placeholder={allowance === 0n ? 'Please increase allowance' : balance === 0n ? 'Please top-up balance' : 'Amount'}
						value={amount === null ? '' : amount}
						suffix={' BET'}
						onValueChange={(values) => {
							const { value } = values;
							handleBetChange(value);
						}}
					/>
				</div>

				<div className={'grid grid-cols-2 gap-3 w-full'}>
					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						onClick={() => handleBet(true)}
						disabled={loading || amount === null || Number(amount) < 1 || BigInt(amount) * 10n ** 18n > balance}
						className={
							' rounded-lg flex flex-col items-center pb-2 p-3 gap-2 leading-[0px] justify-between bg-green-500 font-semibold  disabled:cursor-not-allowed disabled:grayscale duration-500'
						}
					>
						<span className={'text-lg leading-3'}>{t('long')}</span>
						<div className={'flex flex-row items-center text-xs leading-3 gap-1 whitespace-nowrap'}>
							{millify(Number(amount) + (valueToNumber(pool.short) / (valueToNumber(pool.long) + Number(amount))) * Number(amount) || 0, { precision: 2 })}
							<Bet className={'w-3 h-3'} color={'white'} /> + bonus
						</div>
					</motion.button>
					<motion.button
						whileHover={{ scale: 1.03 }}
						whileTap={{ scale: 0.97 }}
						onClick={() => handleBet(false)}
						disabled={loading || amount === null || Number(amount) < 1 || BigInt(amount) * 10n ** 18n > balance}
						className={
							' rounded-lg flex flex-col items-center pb-2 p-3 gap-2 leading-[0px] justify-between bg-red-500 font-semibold disabled:cursor-not-allowed disabled:grayscale duration-500'
						}
					>
						<span className={'text-lg leading-3'}>{t('short')}</span>
						<div className={'flex flex-row items-center text-xs leading-3 gap-1 whitespace-nowrap'}>
							{millify(Number(amount) + (valueToNumber(pool.long) / (valueToNumber(pool.short) + Number(amount))) * Number(amount) || 0, { precision: 2 })}
							<Bet className={'w-3 h-3'} color={'white'} /> + bonus
						</div>
					</motion.button>
				</div>
				<PlayersBets game={game} />
				<CoefficientRatio pool={pool} amount={amount} />
				{/*<PlayersBets game={game}/>*/}
				<div className={'w-full text-xs'}>
					<h4 className={'font-medium text-gray-500 text-center mb-2'}>Expected winnings</h4>
					<PlayersExpectedWinnings game={game} />
				</div>
				{/*{open && (*/}
				{/*	<ActionModal*/}
				{/*		open={open}*/}
				{/*		onClose={() => setOpen(false)}*/}
				{/*		onAction={handleAction}*/}
				{/*		requiredAllowance={BigInt(amount) * 10n ** 18n}*/}
				{/*		allowance={allowance}*/}
				{/*		tx={data}*/}
				{/*		scan={ETHSCAN}*/}
				{/*	/>*/}
				{/*)}*/}
			</div>
		</div>
	);
};

export default PlaceBet;

const CoefficientRatio: FC<{ pool: RoundPool; amount: string | number }> = ({ pool, amount }) => {
	const longWidth = useMemo(() => {
		if (pool.long > 0) {
			return (valueToNumber(pool.long) / (valueToNumber(pool.long) + valueToNumber(pool.short))) * 100;
		}
		return 50;
	}, [pool]);

	const longCoef = useMemo(() => {
		if (Number(amount) > 0) {
			return (Number(amount) + (valueToNumber(pool.short) / (valueToNumber(pool.long) + Number(amount))) * Number(amount)) / Number(amount);
		}
		return 1;
	}, [pool, amount]);

	const shortCoef = useMemo(() => {
		if (Number(amount) > 0) {
			return (Number(amount) + (valueToNumber(pool.long) / (valueToNumber(pool.short) + Number(amount))) * Number(amount)) / Number(amount);
		}
		return 1;
	}, [pool, amount]);

	const shortWidth = useMemo(() => {
		if (pool.short > 0) {
			return (valueToNumber(pool.short) / (valueToNumber(pool.long) + valueToNumber(pool.short))) * 100;
		}
		return 50;
	}, [pool]);
	return (
		<div className={'flex  text-xs flex-row w-full text-white items-center rounded-md overflow-hidden'}>
			<div className={'px-3 py-1 h-full bg-opacity-30 bg-green-900 text-green-500 flex flex-row items-center gap-1'} style={{ width: `${longWidth}%` }}>
				{millify(longCoef, { precision: 2 })}x
			</div>
			<div
				className={'px-3 py-1 h-full bg-opacity-30 bg-red-900 text-red-500 flex flex-row items-center gap-1 justify-end'}
				style={{ width: `${shortWidth}%` }}
			>
				{millify(shortCoef, { precision: 2 })}x
			</div>
		</div>
	);
};

const PlayersBets: FC<{ game: Game }> = ({ game }) => {
	const { data: round } = useCurrentRound(game.interval);
	const { address = ZeroAddress } = useAccount();
	const { data: playerBets = [], isFetched: isBetsFetched } = usePlayerBets(address, game.address, round);
	const userPool: RoundPool = {
		long: 0n,
		short: 0n,
		longCount: 0,
		shortCount: 0,
		longPlayersCount: 0,
		shortPlayersCount: 0,
	};
	for (const bet of playerBets) {
		if (bet.side) {
			userPool.longCount += 1;
			userPool.long += bet.amount;
		} else {
			userPool.shortCount++;
			userPool.short += bet.amount;
		}
	}

	return (
		<div className={'hidden md:grid grid-cols-2 gap-4 w-full'}>
			<div className={'bg-primary rounded-lg p-2 flex justify-center gap-2 items-center text-green-500 font-semibold'}>
				<ArrowUpIcon className={'h-3 w-3'} />
				<div className={cx('flex flex-row gap-1 items-center text-sm', { 'animate-pulse blur-sm': !isBetsFetched })}>
					{millify(valueToNumber(userPool.long), { precision: 2 })}
					<Bet className={'w-3 h-3'} color={'green'} />
				</div>
			</div>
			<div className={'bg-primary rounded-lg p-2 flex justify-center gap-2 items-center text-red-500 font-semibold'}>
				<ArrowDownIcon className={'h-3 w-3'} />
				<div className={cx('flex flex-row gap-1 items-center text-sm', { 'animate-pulse blur-sm': !isBetsFetched })}>
					{millify(valueToNumber(userPool.short), { precision: 2 })}
					<Bet color={'red'} className={'w-3 h-3'} />
				</div>
			</div>
		</div>
	);
};

const PlayersExpectedWinnings: FC<{ game: Game }> = ({ game }) => {
	const { data: round } = useCurrentRound(game.interval);
	const { address = ZeroAddress } = useAccount();
	const { data: bets, isFetching: isBetsFetched } = useRoundBets(game.address, round);

	const expected = useMemo(() => {
		const userPool = bets.reduce(
			(st, bet) => {
				if (bet.player.toLowerCase() !== address.toLowerCase()) return st;
				return {
					long: st.long + valueToNumber(bet.amount) * (bet.side ? 1 : 0),
					short: st.short + valueToNumber(bet.amount) * (bet.side ? 0 : 1),
				};
			},
			{ long: 0, short: 0 },
		);
		if (userPool.long === 0 && userPool.short === 0) return { long: 0, short: 0, longBonus: 0, shortBonus: 0 };
		const pool = bets.reduce(
			(st, bet) => {
				return {
					long: st.long + valueToNumber(bet.amount) * (bet.side ? 1 : 0),
					short: st.short + valueToNumber(bet.amount) * (bet.side ? 0 : 1),
				};
			},
			{ long: 0, short: 0 },
		);

		if (pool.long === 0 || pool.short === 0) {
			return { long: userPool.long, short: userPool.short, longBonus: 0, shortBonus: 0 };
		}

		const totalPool = pool.long + pool.short;
		const bonusPool = (totalPool * 4) / 100;
		const winPool = totalPool - bonusPool;
		const longShares = bets.map((bet, index) => valueToNumber(bet.amount) * (bet.side ? 1 : 0) * (bets.length - index)).reduce((a, b) => a + b, 0);
		const shortShares = bets.map((bet, index) => valueToNumber(bet.amount) * (bet.side ? 0 : 1) * (bets.length - index)).reduce((a, b) => a + b, 0);
		const predictedWinLong: { player: string; bonus: number; win: number }[] = [];
		for (let i = 0; i < bets.length; i++) {
			const bet = bets[i];
			if (!bet.side) {
				predictedWinLong.push({ player: bet.player.toLowerCase(), bonus: 0, win: 0 });
				continue;
			}
			const win = (winPool * valueToNumber(bet.amount)) / pool.long;
			const bonus = (bonusPool * valueToNumber(bet.amount) * (bets.length - i)) / longShares;
			predictedWinLong.push({ player: bet.player.toLowerCase(), bonus, win });
		}
		const predictedWinShort: { player: string; bonus: number; win: number }[] = [];
		for (let i = 0; i < bets.length; i++) {
			const bet = bets[i];
			if (bet.side) {
				predictedWinShort.push({ player: bet.player.toLowerCase(), bonus: 0, win: 0 });
				continue;
			}
			const win = (winPool * valueToNumber(bet.amount)) / pool.short;
			const bonus = (bonusPool * valueToNumber(bet.amount) * (bets.length - i)) / shortShares;
			predictedWinShort.push({ player: bet.player.toLowerCase(), bonus, win });
		}

		return {
			long: predictedWinLong.filter((bet) => bet.player.toLowerCase() === address.toLowerCase()).reduce((s, b) => s + b.win, 0),
			short: predictedWinShort.filter((bet) => bet.player.toLowerCase() === address.toLowerCase()).reduce((s, b) => s + b.win, 0),
			longBonus: predictedWinLong.filter((bet) => bet.player.toLowerCase() === address.toLowerCase()).reduce((s, b) => s + b.bonus, 0),
			shortBonus: predictedWinShort.filter((bet) => bet.player.toLowerCase() === address.toLowerCase()).reduce((s, b) => s + b.bonus, 0),
		};
	}, [bets]);
	return (
		<div className={'grid grid-cols-2 gap-4 w-full'}>
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger>
						<div className={'bg-primary rounded-lg p-2 flex flex-col justify-center items-center '}>
							<div className={'w-full flex flex-row justify-center gap-1 text-green-500 font-semibold'}>
								<ArrowUpIcon className={'h-3 w-3'} />
								<div className={cx('flex flex-row gap-1 items-center', { 'animate-pulse blur-sm': isBetsFetched })}>
									{millify(expected.long, { precision: 2 })}
									<Bet className={'w-3 h-3'} color={'green'} />
								</div>
							</div>
							<div className={'w-full flex flex-row items-center  gap-1 justify-center text-yellow-400 opacity-70 text-xs'}>
								+ {expected.longBonus.toFixed(2)} <Bet className={'w-[10px] h-[10px]'} />
							</div>
						</div>
					</TooltipTrigger>
					<TooltipContent>{`${(expected.longBonus + expected.long).toFixed(2)} BET`}</TooltipContent>
				</Tooltip>
				<Tooltip>
					<div className={'bg-primary rounded-lg p-2 flex flex-col justify-center items-center '}>
						<TooltipTrigger>
							<div className={'w-full flex flex-row justify-center gap-1 text-red-500 font-semibold'}>
								<ArrowDownIcon className={'h-3 w-3'} />
								<div className={cx('flex flex-row gap-1 items-center', { 'animate-pulse blur-sm': isBetsFetched })}>
									{millify(expected.short, { precision: 2 })}
									<Bet className={'w-3 h-3'} color={'red'} />
								</div>
							</div>
							<div className={'w-full flex flex-row items-center  gap-1 justify-center text-yellow-400 opacity-70 text-xs'}>
								+ {expected.shortBonus.toFixed(2)} <Bet className={'w-[10px] h-[10px]'} />
							</div>
						</TooltipTrigger>
						<TooltipContent>{`${(expected.shortBonus + expected.short).toFixed(2)} BET`}</TooltipContent>
					</div>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};

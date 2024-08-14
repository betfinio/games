import { jumpToCurrentRound } from '@/src/lib/luro';
import { getCurrentRoundInfo } from '@/src/lib/luro/api';
import { useLuroState, usePlaceBet, useRound, useRoundBank, useRoundBets, useRoundBonusShare, useStartRound, useVisibleRound } from '@/src/lib/luro/query';
import { ZeroAddress } from '@betfinio/abi';
import { valueToNumber } from '@betfinio/abi';
import { LuckyRound } from '@betfinio/ui/dist/icons/LuckyRound';
import { useQueryClient } from '@tanstack/react-query';
import { BetValue } from 'betfinio_app/BetValue';
import { useAllowanceModal } from 'betfinio_app/allowance';
import { useIsMember } from 'betfinio_app/lib/query/pass';
import { useAllowance, useBalance } from 'betfinio_app/lib/query/token';
import { Tooltip, TooltipContent, TooltipTrigger } from 'betfinio_app/tooltip';
import { toast } from 'betfinio_app/use-toast';
import cx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Coins, Loader } from 'lucide-react';
import millify from 'millify';
import { type FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NumericFormat } from 'react-number-format';
import { useAccount } from 'wagmi';

export const PlaceBet = () => {
	const { data: round } = useVisibleRound();

	const { state: luroState } = useLuroState();

	const renderScreen = () => {
		switch (luroState.data.state) {
			case 'waiting':
				return <WaitingScreen round={round} />;
			case 'spinning':
			case 'landed':
				return <SpinningScreen round={round} />;
			case 'stopped':
				return <RoundResult round={round} />;
			default:
				return <StandByScreen round={round} />;
		}
	};

	return <AnimatePresence>{renderScreen()}</AnimatePresence>;
};

const StandByScreen: FC<{ round: number }> = ({ round }) => {
	const { t } = useTranslation('', { keyPrefix: 'games.luro.placeBet' });
	const [amount, setAmount] = useState<string>('10000');
	const { address = ZeroAddress } = useAccount();
	const { data: allowance = 0n, isFetching: loading } = useAllowance(address);
	const { data: balance = 0n } = useBalance(address);
	const { data: isMember = false } = useIsMember(address);
	const { mutate: placeBet, isPending, isSuccess, data } = usePlaceBet(address);
	const { data: bets = [] } = useRoundBets(round);
	const { requestAllowance, setResult, requested } = useAllowanceModal();
	useEffect(() => {
		if (data && isSuccess) {
			setResult?.(data);
		}
	}, [isSuccess, data]);
	useEffect(() => {
		if (requested) {
			handleBet();
		}
	}, [requested]);
	const handleBetChange = (value: string) => {
		setAmount(value);
	};

	const handleBet = () => {
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
				description: '',
				variant: 'destructive',
			});
			return;
		}
		if (Number(amount) < 1000) {
			toast({
				title: 'Minimal bet amount is 1000 BET',
				description: '',
				variant: 'destructive',
			});
			return;
		}

		try {
			BigInt(Number(amount));
		} catch (e) {
			toast({
				title: 'Invalid amount',
				description: '',
				variant: 'destructive',
			});
			return;
		}

		if (allowance < BigInt(Number(amount))) {
			requestAllowance?.('bet', BigInt(Number(amount)) * 10n ** 18n);
			return;
		}

		placeBet({ round: round, amount: Number(amount), player: address });
	};

	const myBetVolume = useMemo(() => {
		return bets.filter((bet) => bet.player === address).reduce((acc, val) => acc + val.amount, 0n);
	}, [bets, address]);

	const roundInfo = useMemo(() => {
		return getCurrentRoundInfo(bets);
	}, [bets]);

	const bank = useMemo(() => bets.reduce((acc, val) => acc + val.amount, 0n), [bets, address, round]);
	const expectedWinning = (valueToNumber(bank) + Number(amount) - valueToNumber(myBetVolume)) * 0.914;
	const coef = expectedWinning / Number(amount);

	const myPercent = roundInfo.volume === 0 ? 0 : ((valueToNumber(myBetVolume) / roundInfo.volume) * 100).toFixed(2);
	const potentialWin = roundInfo.volume * 0.914;
	const myCoef = myBetVolume === 0n ? 0 : potentialWin / valueToNumber(myBetVolume);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className={'flex flex-col grow justify-between duration-300 lg:max-w-[300px]'}
		>
			<div className={'uppercase text-xl flex items-center justify-center w-full font-semibold gap-2 z-10 my-2'}>
				{t('title')}
				<LuckyRound className={'w-5 h-5 text-yellow-400'} />
			</div>
			<Tooltip>
				<div className={cx('rounded-xl bg-primaryLight border drop-shadow-[0_0_35px_rgba(87,101,242,0.75)] border-gray-800 p-4 relative w-full')}>
					<h4 className={'font-medium text-center text-gray-500 text-xs '}>{t('amount')}</h4>
					<NumericFormat
						className={'w-full mt-2 rounded-lg text-center text-base lg:text-lg bg-primary py-3 font-semibold text-white disabled:cursor-not-allowed'}
						thousandSeparator={','}
						min={1}
						maxLength={15}
						disabled={loading}
						placeholder={allowance === 0n ? 'Please increase allowance' : balance === 0n ? 'Please top-up balance' : 'Amount'}
						value={amount ? amount : ''}
						onValueChange={(values) => {
							const { value } = values;
							handleBetChange(value);
						}}
					/>
					<h4 className={'font-medium text-gray-500 text-xs text-center mt-[10px]'}>{t('expected')}</h4>
					<p className={'mt-[20px] text-center font-semibold text-[#27AE60]'}>
						{expectedWinning.toLocaleString()} <span className={'text-blue-500'}>(+bonus)</span>
					</p>
					<div className={'text-center text-yellow-400 font-thin text-xs'}>{(coef === Number.POSITIVE_INFINITY ? 0 : coef).toFixed(3)}x</div>
					<motion.button
						whileTap={{ scale: 0.95 }}
						onClick={handleBet}
						disabled={isPending}
						className={
							'text-xs font-semibold flex flex-col items-center justify-center h-[40px] text-center w-full mt-[30px] bg-[#FFC800] rounded-lg min-w-[210px] text-primary'
						}
					>
						{isPending ? (
							<Loader size={30} color={'black'} className={'animate-spin'} />
						) : (
							<span className={'flex flex-row items-center gap-1 text-base uppercase'}>
								{t('bet')}
								<Coins className={'text-black w-4'} />
							</span>
						)}
					</motion.button>
				</div>

				<div className={cx('rounded-xl bg-primaryLight p-3 relative w-full lg:w-full mt-3 border border-gray-800')}>
					<div className={'grid grid-cols-2 gap-2 text-xs'}>
						<div className={'bg-primary py-2 text-center flex flex-col gap-1 rounded-[8px]'}>
							<div className={'text-gray-500'}>Your active bets</div>
							<div className={'text-yellow-400 font-semibold flex justify-center gap-1'}>
								<BetValue value={valueToNumber(myBetVolume)} /> ({myPercent}%)
							</div>
						</div>
						<div className={'bg-primary py-2 text-center flex flex-col gap-1 rounded-[8px]'}>
							<p className={'text-gray-500'}>Potential win</p>
							<div className={'text-green-500 font-semibold flex justify-center gap-1'}>
								<TooltipTrigger>
									{millify(potentialWin)} {myBetVolume > 0 && `(${myCoef.toFixed(2)}x)`}
								</TooltipTrigger>
								<TooltipContent className={'font-semibold'}>{`${potentialWin.toLocaleString()} BET`}</TooltipContent>
							</div>
						</div>
					</div>
				</div>
			</Tooltip>
		</motion.div>
	);
};

const WaitingScreen: FC<{ round: number }> = () => {
	const { mutate: startRound, isPending } = useStartRound(19948);

	const handleSpin = () => {
		startRound();
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className={'grow flex flex-col items-center justify-center min-h-[390px]'}
		>
			<span>Waiting for polygon block...</span>
			<button
				type={'button'}
				onClick={handleSpin}
				disabled={isPending}
				className={'bg-yellow-400 disabled:bg-gray-500 rounded-lg px-6 py-2 text-black font-medium'}
			>
				{isPending ? 'Spinning...' : 'Spin the wheel'}
			</button>
		</motion.div>
	);
};

const SpinningScreen: FC<{ round: number }> = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className={'grow flex flex-col items-center justify-center min-h-[390px]'}
		>
			<span>The winner is being decided....</span>
		</motion.div>
	);
};

const RoundResult: FC<{ round: number }> = ({ round }) => {
	const queryClient = useQueryClient();

	const { data: roundData } = useRound(round);
	const { address = ZeroAddress } = useAccount();
	if (!roundData) return null;

	const { data: bets = [] } = useRoundBets(round);
	const { data: volume = 0n } = useRoundBank(round);
	const { data: bonusShare = 0n } = useRoundBonusShare(round);

	const bonus = useMemo(() => {
		const bonuses = bets.map((bet, index) => {
			if (bonusShare === 0n) return { bet, bonus: 0 };
			const bonusPool = (volume / 100n) * 5n;
			const weight = bet.amount * BigInt(bets.length - index);
			return {
				bet,
				bonus: valueToNumber((bonusPool * weight) / bonusShare),
			};
		});
		return bonuses.find((bonus) => bonus?.bet?.address === roundData?.winner?.bet);
	}, [bets, volume, address]);

	if (roundData.player.bets === 0n) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
				className={'grow flex flex-col gap-5 items-center justify-center min-h-[390px]'}
			>
				<div className={'flex flex-col w-3/4 h-[200px] items-center justify-center border rounded-[10px] border-yellow-400'}>
					<div className={'text-xl font-semibold mb-4'}>Round is over</div>
					<div className={'w-full flex flex-row items-center justify-center gap-1'}>
						You could win
						<BetValue className={'text-yellow-400 text-sm'} value={valueToNumber((roundData.total.volume * 935n) / 1000n)} withIcon />
					</div>
					<div className={'text-blue-500 text-xs'}>+bonus</div>
				</div>
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					onClick={() => {
						jumpToCurrentRound(queryClient);
					}}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, delay: 2 }}
					className={'w-3/4 bg-yellow-400 py-3 text-black rounded-[10px]'}
				>
					Back to the game
				</motion.button>
			</motion.div>
		);
	}

	if (roundData.winner?.player === address) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
				className={'grow flex flex-col gap-5 items-center justify-center min-h-[390px]'}
			>
				<div className={'flex flex-col w-3/4 h-[200px] items-center justify-center border rounded-[10px] border-yellow-400'}>
					<div className={'text-xl font-semibold mb-4'}>You WIN!</div>
					<div className={'w-full flex flex-row items-center justify-center gap-1'}>
						<BetValue className={'text-yellow-400 text-lg font-semibold'} value={valueToNumber((roundData.total.volume * 935n) / 1000n)} withIcon />
					</div>
					<div className={'text-blue-500 text-sm flex flex-row items-center justify-center gap-1'}>
						+bonus <BetValue value={bonus?.bonus || 0} withIcon />
					</div>

					<div className={'text-gray-400 text-xs mt-2'}>total</div>
					<BetValue
						className={'text-yellow-400 text-lg font-semibold'}
						value={valueToNumber((roundData.total.volume * 935n) / 1000n) + (bonus?.bonus ?? 0)}
						withIcon
					/>
				</div>

				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					onClick={() => {
						jumpToCurrentRound(queryClient);
					}}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, delay: 2 }}
					className={'w-3/4 bg-yellow-400 py-3 text-black rounded-[10px]'}
				>
					Back to the game
				</motion.button>
			</motion.div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
			className={'grow flex flex-col gap-5 items-center justify-center min-h-[390px]'}
		>
			<div className={'flex flex-col w-3/4 h-[200px] items-center justify-center border rounded-[10px] border-yellow-400'}>
				<div className={'text-xl font-semibold mb-4'}>Your bonus:</div>
				<div className={'text-blue-500 text-sm flex flex-row items-center justify-center gap-1'}>
					+<BetValue value={bonus?.bonus ?? 0} withIcon />
				</div>
			</div>

			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1, delay: 2 }}
				onClick={() => {
					jumpToCurrentRound(queryClient);
				}}
				className={'w-3/4 bg-yellow-400 py-3 text-black rounded-[10px]'}
			>
				Back to the game
			</motion.button>
		</motion.div>
	);
};

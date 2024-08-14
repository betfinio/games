import { valueToNumber } from '@betfinio/abi';
import cx from 'clsx';
import { motion } from 'framer-motion';
import millify from 'millify';
import Slider from 'rc-slider';
import { type ChangeEvent, type FC, useEffect, useMemo, useState } from 'react';
import 'rc-slider/assets/index.css';
import { getRequiredAllowance } from '@/src/lib/roulette/api';
import { useChangeChip, useDoublePlace, useLimits, usePlace, useRouletteState, useSelectedChip, useSpin, useUndoPlace } from '@/src/lib/roulette/query';
import { ZeroAddress } from '@betfinio/abi';
import { Chip } from '@betfinio/ui/dist/icons';
import CloseIcon from '@betfinio/ui/dist/icons/Close';
import { useAllowanceModal } from 'betfinio_app/allowance';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from 'betfinio_app/dialog';
import { useAllowance, useIncreaseAllowance } from 'betfinio_app/lib/query/token';
import { toast } from 'betfinio_app/use-toast';
import { Loader, Undo2 } from 'lucide-react';
import { useAccount } from 'wagmi';

const RouletteControls = () => {
	const { state: wheelStateData } = useRouletteState();
	const wheelState = wheelStateData.data;
	const { address = ZeroAddress } = useAccount();
	const { data: value = 0 } = useSelectedChip();
	const { mutate: change } = useChangeChip();
	const { mutate: undo } = useUndoPlace();
	const { mutate: double } = useDoublePlace();
	const { mutate: place } = usePlace();
	const { mutate: spin, data, isPending, isSuccess } = useSpin();
	const { requestAllowance, setResult, requested } = useAllowanceModal();
	useEffect(() => {
		if (data && isSuccess) {
			setResult?.(data);
		}
	}, [isSuccess, data]);
	useEffect(() => {
		if (requested) {
			handleSpin();
		}
	}, [requested]);
	const { data: limitsRaw = [], isFetched: isLimitsFetched } = useLimits();
	const limits = useMemo(() => {
		if (limitsRaw.length > 0) {
			return { min: Math.min(...limitsRaw.map((limit) => valueToNumber(limit.min))), max: Math.max(...limitsRaw.map((limit) => valueToNumber(limit.max))) };
		}
		return { min: 10000, max: 1000000 };
	}, [limitsRaw]);

	const bigValue = BigInt(value) * 10n ** 18n;
	const handleChange = (val: number | number[]) => {
		change({ amount: val as number });
	};
	const handlePlus = () => {
		console.log(limits.max - limits.max / 100);
		if (value > limits.max - limits.max / 100) return;
		change({ amount: value + limits.max / 100 });
	};
	const handleMinus = () => {
		if (value < limits.min + limits.max / 100) return;
		change({ amount: value - limits.max / 100 });
	};
	const marks = useMemo(() => {
		return {
			[limits.min]: {
				style: {
					// color: '#4f46e5',
					fontSize: '12px',
				},
				label: millify(limits.min),
			},
			[limits.max / 4]: {
				style: {
					// color: '#9333ea',
					fontSize: '12px',
				},
				label: millify(limits.max / 4),
			},
			[(limits.max / 4) * 2]: {
				style: {
					// color: '#dc2626',
					fontSize: '12px',
				},
				label: millify((limits.max / 4) * 2),
			},
			[(limits.max / 4) * 3]: {
				style: {
					// color: '#dc2626',
					fontSize: '12px',
				},
				label: millify((limits.max / 4) * 3),
			},
			[limits.max]: {
				style: {
					// color: '#f59e0b',
					fontSize: '12px',
				},
				label: millify(limits.max),
			},
		};
	}, [limits]);
	const handleClear = () => {
		place({ item: 0, numbers: [] });
	};

	const handleDouble = () => {
		double();
	};
	const handleUndo = () => {
		undo();
	};

	const { data: allowance = 0n, isFetching: loading } = useAllowance(address);

	const handleSpin = () => {
		if (wheelState.state === 'spinning') return;

		if (valueToNumber(allowance) < Number(getRequiredAllowance())) {
			toast({
				description: 'Please increase your allowance',
				variant: 'destructive',
			});
			requestAllowance?.('bet', BigInt(getRequiredAllowance()) * 10n ** 18n);
			return;
		}

		spin({ bets: JSON.parse(localStorage.getItem('bets') || '[]') });
	};
	return (
		<div
			className={
				'lg:border border-gray-800 lg:bg-primaryLighter gap-1 lg:gap-3 lg:p-4 lg:my-4 rounded-xl flex-grow w-1/2 lg:w-full  flex-row flex-wrap lg:items-center items-end justify-start lg:justify-between  md:flex'
			}
		>
			<Dialog>
				<DialogContent className={'games w-[300px]'}>
					<ChangeBetModal min={limits.min} max={limits.max} initialValue={value} />
				</DialogContent>
				<div className={'flex lg:hidden w-full'}>
					<div className={'flex-grow flex-row items-center flex'}>
						<motion.div
							whileTap={{ scale: 0.95 }}
							className={
								'aspect-square p-2 px-4 flex flex-row items-center rounded-lg justify-center bg-primary cursor-pointer text-yellow-400 font-medium text-xl'
							}
							onClick={handleMinus}
						>
							-
						</motion.div>
						<Slider
							className={cx('mx-3', { 'blur-sm animate-pulse': !isLimitsFetched })}
							styles={{
								rail: {
									backgroundColor: '#333  !important',
								},
								handle: { background: '#facc15', border: '#0088cc' },
							}}
							value={valueToNumber(bigValue)}
							dotStyle={{ background: '#10121D', borderColor: '#facc15', fontSize: '8px' }}
							min={limits.min}
							max={limits.max}
							step={limits.max / 100}
							included={false}
							marks={marks}
							onChange={handleChange}
						/>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className={'p-2 px-4 flex flex-row items-center rounded-lg justify-center gap-2 bg-primaryLight cursor-pointer'}
						>
							<DialogTrigger>
								<motion.div className={'font-normal text-xs whitespace-nowrap w-[70px] '}>{millify(valueToNumber(bigValue))} BET</motion.div>
							</DialogTrigger>
							<span className={'text-yellow-400 font-medium text-xl'} onClick={handlePlus}>
								+
							</span>
						</motion.div>
					</div>
				</div>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className={
						'rounded-md flex-grow h-[40px] flex justify-center lg:flex-grow-0 lg:rounded-lg bg-yellow-400 text-black px-6 py-2 font-semibold pointer disabled:grayscale disabled:pointer-events-none'
					}
					disabled={wheelState.state === 'spinning' || address === undefined || loading}
					onClick={handleSpin}
				>
					{isPending ? <Loader color={'black'} className={'animate-spin'} size={'24px'} /> : 'SPIN'}
				</motion.button>
				<motion.button
					onClick={handleDouble}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className={'rounded-lg text-yellow-400 bg-primaryLight px-6 py-2 font-semibold'}
				>
					Double
				</motion.button>
				<div className={'flex-grow flex-row items-center hidden lg:flex'}>
					<motion.div
						whileTap={{ scale: 0.95 }}
						className={
							'aspect-square w-[40px] h-[40px] p-2 px-4 flex flex-row items-center rounded-lg justify-center bg-primary cursor-pointer text-yellow-400 font-medium text-xl'
						}
						onClick={handleMinus}
					>
						-
					</motion.div>
					<Slider
						className={cx('mx-3', { 'blur-sm animate-pulse': !isLimitsFetched })}
						styles={{
							rail: {
								backgroundColor: '#333  !important',
							},
							handle: { background: '#facc15', border: '#0088cc' },
						}}
						value={valueToNumber(bigValue)}
						dotStyle={{ background: '#10121D', borderColor: '#facc15' }}
						min={limits.min}
						max={limits.max}
						step={limits.max / 100}
						included={false}
						marks={marks}
						onChange={handleChange}
					/>
					<DialogTrigger>
						<motion.div
							className={
								'font-normal border rounded-full border-transparent hover:border-yellow-400 p-1 duration-300 cursor-pointer relative whitespace-nowrap w-20  flex flex-row items-center  gap-1'
							}
						>
							<Chip
								labelClassName={''}
								className={cx('duration-300 flex items-center justify-center', {
									'text-amber-500': valueToNumber(bigValue) > 1000000,
									'text-red-500': valueToNumber(bigValue) > 500000 && valueToNumber(bigValue) <= 1000000,
									'text-purple-600': valueToNumber(bigValue) > 200000 && valueToNumber(bigValue) <= 500000,
									'text-indigo-600': valueToNumber(bigValue) > 50000 && valueToNumber(bigValue) <= 200000,
									'text-sky-600': valueToNumber(bigValue) >= 10000 && valueToNumber(bigValue) <= 50000,
								})}
								value={valueToNumber(bigValue)}
								fontSize={11}
							/>
						</motion.div>
					</DialogTrigger>
					<motion.div
						whileTap={{ scale: 0.95 }}
						onClick={handlePlus}
						className={'py-2 px-4 flex items-center rounded-lg justify-center gap-2 bg-primaryLight cursor-pointer'}
					>
						<span className={'text-yellow-400 font-medium text-xl'}>+</span>
					</motion.div>
				</div>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleClear}
					className={'rounded-lg h-[40px] text-yellow-400 bg-primaryLight p-3 lg:px-6 py-2 font-semibold flex flex-row gap-2 justify-center items-center'}
				>
					<CloseIcon className={'w-4 h-4'} />
					<span className={'hidden lg:block'}>Clear</span>
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleUndo}
					className={'rounded-lg h-[40px] text-yellow-400 bg-primaryLight p-3 lg:px-6 py-2 font-semibold flex flex-row gap-2 justify-center items-center'}
				>
					<Undo2 className={'w-4 h-4'} />
					<span className={'hidden lg:block'}>Undo</span>
				</motion.button>
			</Dialog>

			{/*{open && (*/}
			{/*	<ActionModal*/}
			{/*		open={open}*/}
			{/*		onClose={() => setOpen(false)}*/}
			{/*		onAction={handleAction}*/}
			{/*		requiredAllowance={BigInt(getRequiredAllowance()) * 10n ** 18n}*/}
			{/*		allowance={allowance}*/}
			{/*		tx={data}*/}
			{/*		scan={ETHSCAN}*/}
			{/*	/>*/}
			{/*)}*/}
		</div>
	);
};

export default RouletteControls;

const ChangeBetModal: FC<{ initialValue: number; max: number; min: number }> = ({ initialValue, max, min }) => {
	const [value, setValue] = useState(initialValue);
	const { mutate: change } = useChangeChip();
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;

		if ((inputValue === '' || Number.isInteger(inputValue)) && Number(inputValue) >= 0) {
			setValue(Number(inputValue));
		}
	};
	const handleSave = () => {
		const num = Number(value);
		if (num > max) {
			toast({
				description: `Max bet is ${millify(max)}`,
				variant: 'destructive',
			});
		} else if (num < min) {
			toast({
				description: `Min bet is ${millify(min)}`,
				variant: 'destructive',
			});
		} else {
			handleClose();
		}
	};

	const handleClose = () => {
		change({ amount: Number(value) });
	};
	return (
		<motion.div layoutId={'chip'} className={'bg-primary rounded-lg p-3 flex flex-col gap-2 text-white'}>
			<h2 className={'text-sm text-gray-500'}>Custom amount of chip:</h2>
			<div className={'relative'}>
				<input type="number" min={0} className={'rounded-lg p-2 px-4 bg-primaryLighter border border-gray-800 pr-10'} value={value} onChange={handleChange} />
				<span className={'absolute right-2 top-[9px]'}>BET</span>
			</div>
			<DialogClose>
				<div className={'flex flex-row justify-between'}>
					<button className={'bg-red-roulette rounded-lg px-4 p-2 w-2/5'} type={'button'} onClick={handleClose}>
						Cancel
					</button>
					<button className={'bg-green-500 rounded-lg px-4 lg-2 w-2/5'} type={'button'} onClick={handleSave}>
						Save
					</button>
				</div>
			</DialogClose>
		</motion.div>
	);
};

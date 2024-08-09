import { ETHSCAN } from '@/src/global.ts';
import { getBlack, getColor, getRed } from '@/src/lib/roulette';
import { getRequiredAllowance } from '@/src/lib/roulette/api';
import { useLocalBets, usePlace, useRouletteState, useSpin, useUnplace } from '@/src/lib/roulette/query';
import type { FuncProps } from '@/src/lib/roulette/types.ts';
import { ZeroAddress } from '@betfinio/hooks';
import arrayFrom, { valueToNumber } from '@betfinio/hooks/dist/utils';
import Additional from '@betfinio/ui/dist/icons/Additional';
import Chip from '@betfinio/ui/dist/icons/Chip';
import ActionModal from '@betfinio/ui/dist/shared/modal/ActionModal';
import type { Action } from '@betfinio/ui/dist/shared/modal/types';
import { useAllowance, useIncreaseAllowance } from 'betfinio_app/lib/query/token';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from 'betfinio_app/tooltip';
import cx from 'clsx';
import { motion } from 'framer-motion';
import { Loader } from 'lucide-react';
import { type FC, type MouseEvent, useState } from 'react';
import { useAccount } from 'wagmi';

const RouletteBetTable: FC = () => {
	return (
		<div className={'grid grid-cols-3 md:grid-cols-1 gap-1 md:gap-2 '}>
			<TableDesktop />
		</div>
	);
};

const items: Record<number, number[]> = {
	30: [0],
	147: [0, 1],
	177: [1, 2, 3],
	179: [4, 5, 6],
	121: [4, 5],
	63: [5, 6],
	59: [0],
	89: [0, 2],
	61: [3, 2],
	119: [1, 2],
	178: [1, 2, 3, 4, 5, 6],
	149: [1, 4],
	88: [0],
	118: [0, 1, 2],
	120: [1, 2, 4, 5],
	91: [2, 5],
	62: [2, 3, 5, 6],
	33: [3, 6],
	117: [0],
	176: [0, 1, 2, 3],
	180: [4, 5, 6, 7, 8, 9],
	151: [4, 7],
	122: [4, 5, 7, 8],
	93: [5, 8],
	146: [0],
	60: [0, 2, 3],
	64: [5, 6, 8, 9],
	35: [6, 9],
	181: [7, 8, 9],
	182: [7, 8, 9, 10, 11, 12],
	183: [10, 11, 12],
	184: [10, 11, 12, 13, 14, 15],
	148: [1],
	31: [0, 3],
	185: [13, 14, 15],
	186: [13, 14, 15, 16, 17, 18],
	187: [16, 17, 18],
	188: [16, 17, 18, 19, 20, 21],
	189: [19, 20, 21],
	190: [19, 20, 21, 22, 23, 24],
	90: [2],
	191: [22, 23, 24],
	192: [22, 23, 24, 25, 26, 27],
	193: [25, 26, 27],
	194: [25, 26, 27, 28, 29, 30],
	195: [28, 29, 30],
	196: [28, 29, 30, 31, 32, 33],
	32: [3],
	197: [31, 32, 33],
	198: [31, 32, 33, 34, 35, 36],
	199: [34, 35, 36],
	66: [8, 9, 11, 12],
	68: [11, 12, 14, 15],
	70: [14, 15, 17, 18],
	72: [17, 18, 20, 21],
	74: [20, 21, 23, 24],
	76: [23, 24, 26, 27],
	78: [26, 27, 29, 30],
	80: [29, 30, 32, 33],
	82: [32, 33, 35, 36],
	65: [8, 9],
	67: [11, 12],
	69: [14, 15],
	71: [17, 18],
	73: [20, 21],
	75: [23, 24],
	77: [26, 27],
	79: [29, 30],
	81: [32, 33],
	83: [35, 36],
	95: [8, 11],
	97: [11, 14],
	99: [14, 17],
	101: [17, 20],
	103: [20, 23],
	105: [23, 26],
	107: [26, 29],
	109: [29, 32],
	111: [32, 35],
	123: [7, 8],
	124: [7, 8, 10, 11],
	125: [10, 11],
	126: [10, 11, 13, 14],
	127: [13, 14],
	128: [13, 14, 16, 17],
	129: [16, 17],
	130: [16, 17, 19, 20],
	131: [19, 20],
	132: [19, 20, 22, 23],
	133: [22, 23],
	134: [22, 23, 25, 26],
	135: [25, 26],
	136: [25, 26, 28, 29],
	137: [28, 29],
	138: [28, 29, 31, 32],
	139: [31, 32],
	140: [31, 32, 34, 35],
	141: [34, 35],
	153: [7, 10],
	155: [10, 13],
	157: [13, 16],
	159: [16, 19],
	161: [19, 22],
	163: [22, 25],
	165: [25, 28],
	167: [28, 31],
	169: [31, 34],
	37: [9, 12],
	39: [12, 15],
	41: [15, 18],
	43: [18, 21],
	45: [21, 24],
	47: [24, 27],
	49: [27, 30],
	51: [30, 33],
	53: [33, 36],
	150: [4],
	92: [5],
	34: [6],
	152: [7],
	94: [8],
	36: [9],
	154: [10],
	96: [11],
	38: [12],
	156: [13],
	98: [14],
	40: [15],
	158: [16],
	100: [17],
	42: [18],
	160: [19],
	102: [20],
	44: [21],
	162: [22],
	104: [23],
	46: [24],
	164: [25],
	106: [26],
	48: [27],
	166: [28],
	108: [29],
	50: [30],
	168: [31],
	110: [32],
	52: [33],
	170: [34],
	112: [35],
	54: [36],
	1069: getRed(),
	1070: getRed(),
	1071: getRed(),
	1073: getBlack(),
	1074: getBlack(),
	1075: getBlack(),
	1003: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	1004: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	1005: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	1006: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	1007: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	1008: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	1009: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	1011: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	1012: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	1013: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	1014: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	1015: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	1016: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	1017: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
	1019: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
	1020: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
	1021: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
	1022: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
	1023: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
	1024: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
	1025: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
	1061: arrayFrom(18).map((e) => e + 1),
	1062: arrayFrom(18).map((e) => e + 1),
	1063: arrayFrom(18).map((e) => e + 1),
	1081: arrayFrom(18).map((e) => e + 19),
	1082: arrayFrom(18).map((e) => e + 19),
	1083: arrayFrom(18).map((e) => e + 19),
	1065: arrayFrom(36)
		.map((e) => e + 1)
		.filter((e) => e % 2 === 0),
	1066: arrayFrom(36)
		.map((e) => e + 1)
		.filter((e) => e % 2 === 0),
	1067: arrayFrom(36)
		.map((e) => e + 1)
		.filter((e) => e % 2 === 0),
	1077: arrayFrom(36)
		.map((e) => e + 1)
		.filter((e) => e % 2 === 1),
	1078: arrayFrom(36)
		.map((e) => e + 1)
		.filter((e) => e % 2 === 1),
	1079: arrayFrom(36)
		.map((e) => e + 1)
		.filter((e) => e % 2 === 1),
	56: arrayFrom(36)
		.map((e) => e + 1)
		.filter((e) => e % 3 === 0),
	114: arrayFrom(36)
		.map((e) => e + 1)
		.filter((e) => e % 3 === 2),
	172: arrayFrom(36)
		.map((e) => e + 1)
		.filter((e) => e % 3 === 1),
};

const getCombination = (item: number) => {
	if (item === 1006 || item === 1014 || item === 1022) {
		return 'Dozen';
	}

	if (item === 1062 || item === 1082) {
		return 'High/Low';
	}

	if (item === 1066 || item === 1078) {
		return 'Odd/Even';
	}

	if (item === 1070 || item === 1074) {
		return 'Red/Black';
	}

	if (item === 56 || item === 114 || item === 172) {
		return 'Column';
	}

	if (item === 31 || item === 89 || item === 147) {
		return 'Split';
	}

	if (item === 60 || item === 118) {
		return 'Street';
	}

	if (item === 176) {
		return 'Corner';
	}

	if ((item >= 32 && item <= 54) || (item >= 90 && item <= 112) || (item >= 148 && item <= 170)) {
		if (item % 2 === 1) {
			return 'Split';
		}
		return 'Straight';
	}

	if ((item >= 61 && item <= 83) || (item >= 119 && item <= 141)) {
		if (item % 2 === 0) {
			return 'Corner';
		}
		return 'Split';
	}

	if (item >= 177 && item <= 199) {
		if (item % 2 === 1) {
			return 'Street';
		}
		return 'Line';
	}
	return 'Straight';
};

const TableDesktop = () => {
	const [highlight, setHighlight] = useState<number[]>([]);
	const [highlightCombination, setHighlightCombination] = useState<number>(0);
	const { data: bets = [] } = useLocalBets();
	const nums = [3, 2, 1, 6, 5, 4, 9, 8, 7, 12, 11, 10, 15, 14, 13, 18, 17, 16, 21, 20, 19, 24, 23, 22, 27, 26, 25, 30, 29, 28, 33, 32, 31, 36, 35, 34];
	const redClass = 'bg-red-roulette flex items-center justify-center font-semibold rounded-md lg:rounded-lg';
	const blackClass = 'bg-gray-800 flex items-center justify-center font-semibold rounded-md lg:rounded-lg';
	const greenClass = 'bg-green-400 text-black flex items-center justify-center font-semibold rounded-md lg:rounded-lg';
	const helperClass = 'bg-primaryLighter flex items-center justify-center font-semibold rounded-md lg:rounded-lg';
	const highlightClass = 'border-[1px] lg:border-[4px] border-blue-500';
	const selectedClass = 'border-[1px] lg:border-[4px] border-yellow-400';
	const selected = bets.flatMap((e) => e.numbers);
	const selectedItems = bets.flatMap((e) => e.item);

	const { mutate: place } = usePlace();

	const handleAdditionalClick = (numbers: number[]) => {
		for (const number of numbers) {
			const id = Object.keys(items).find((key) => items[Number(key)].length === 1 && items[Number(key)][0] === number);
			place({ item: Number(id), numbers: [number] });
		}
	};
	const handleAdditionalHover = (numbers: number[]) => {
		setHighlight(numbers);
	};

	const handleAdditionalMouseLeave = () => {
		setHighlight([]);
	};
	// spin controls

	const { state: wheelStateData } = useRouletteState();
	const wheelState = wheelStateData.data;
	const { mutate: spin, data, isPending } = useSpin();
	const { address = ZeroAddress } = useAccount();
	const { data: allowance = 0n, isFetching: loading } = useAllowance(address);
	const { mutate: increase } = useIncreaseAllowance();

	const [open, setOpen] = useState(false);

	const handleAction = (action: Action) => {
		if (action.type === 'sign_transaction') {
			console.log(allowance);
			handleSpin();
		} else if (action.type === 'request_allowance') {
			increase();
		}
	};

	const handleSpin = () => {
		if (wheelState.state === 'spinning') return;

		if (valueToNumber(allowance) < Number(getRequiredAllowance())) {
			setOpen(true);
			return;
		}
		spin({ bets });
	};

	return (
		<div>
			<div className={'hidden lg:grid row-start-1 grid-cols-3'}>
				<div className={'col-span-2 my-3 relative'}>
					<Additional
						className={'w-[800px] max-w-full h-auto'}
						selected={selected}
						highlight={highlight}
						onClick={handleAdditionalClick}
						onHover={handleAdditionalHover}
						onMouseLeave={handleAdditionalMouseLeave}
					/>
				</div>

				<div className={'col-span-1 flex items-center justify-center'}>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className={
							'rounded-md flex-grow flex justify-center lg:flex-grow-0 lg:rounded-lg bg-yellow-400 border-4 border-transparent text-black text-4xl px-10 py-4 font-semibold pointer disabled:bg-transparent disabled:text-gray-800 disabled:border-gray-800 disabled:cursor-not-allowed transition-all duration-300'
						}
						disabled={wheelState.state === 'spinning' || isPending || bets.length === 0 || address === undefined || loading}
						onClick={handleSpin}
					>
						{isPending ? <Loader color={'black'} className={'animate-spin'} size={'24px'} /> : 'SPIN'}
					</motion.button>
				</div>
			</div>

			<div
				className={`
				grid grid-cols-5
				lg:grid-cols-1 lg:grid-rows-5
				gap-1 lg:gap-1.5 relative text-xs lg:text-base
		`}
			>
				{/*row-span-3 grid grid-rows-3 grid-cols-14 gap-1 lg:gap-1.5 grid-flow-col*/}
				<div
					className={`
						col-span-3 grid-rows-14 grid-cols-3
						lg:row-span-3 lg:grid-rows-3 lg:grid-cols-14
						grid gap-1 lg:gap-1.5 grid-flow-row lg:grid-flow-col
			`}
				>
					<div
						className={cx(greenClass, 'col-span-3 lg:col-span-1 lg:row-span-3', highlight.includes(0) && highlightClass, selected.includes(0) && selectedClass)}
					>
						0
					</div>
					{nums.map((item) => (
						<motion.div
							key={item}
							className={cx(
								'aspect-square',
								selected.includes(item) && selectedClass,
								highlight.includes(item) && highlightClass,
								getColor(item) === 'RED' ? redClass : blackClass,
							)}
						>
							{item}
						</motion.div>
					))}
					{arrayFrom(3).map((item) => (
						<div key={item + 100} className={cx(helperClass, 'aspect-square')}>
							1:2
						</div>
					))}
				</div>

				<div
					className={`
					col-span-2 grid-rows-14 grid-cols-2
					lg:row-span-2 lg:col-span-1 lg:grid-cols-14 lg:grid-rows-2
					grid gap-1 lg:gap-1.5
			`}
				>
					<div className={'col-span-1 row-span-1 aspect-square'} />
					<div
						className={cx(
							helperClass,
							'row-span-4 row-start-2 lg:row-span-1 lg:row-start-1 lg:col-span-4 lg:col-start-2 vertical-rl lg:horizontal-tb',
							highlightCombination >= 1003 && highlightCombination <= 1009 && highlightClass,
							selectedItems.includes(1006) && selectedClass,
						)}
					>
						1 to 12
					</div>
					<div
						className={cx(
							helperClass,
							'row-span-4 row-start-6 lg:row-span-1 lg:row-start-1 lg:col-span-4 lg:col-start-6 vertical-rl lg:horizontal-tb',
							highlightCombination >= 1011 && highlightCombination <= 1017 && highlightClass,
							selectedItems.includes(1014) && selectedClass,
						)}
					>
						13 to 24
					</div>
					<div
						className={cx(
							helperClass,
							'row-span-4 row-start-10 lg:row-span-1 lg:row-start-1 lg:col-span-4 lg:col-start-10 vertical-rl lg:horizontal-tb',
							highlightCombination >= 1019 && highlightCombination <= 1025 && highlightClass,
							selectedItems.includes(1022) && selectedClass,
						)}
					>
						25 to 36
					</div>
					<div
						className={cx(
							helperClass,
							'row-span-2 row-start-2 col-start-2 lg:row-span-1 lg:row-start-2 lg:col-span-2 lg:col-start-2 vertical-rl lg:horizontal-tb',
							highlightCombination >= 1061 && highlightCombination <= 1063 && highlightClass,
							selectedItems.includes(1062) && selectedClass,
						)}
					>
						1 to 18
					</div>
					<div
						className={cx(
							helperClass,
							'row-span-2 row-start-4 col-start-2 lg:row-span-1 lg:row-start-2 lg:col-span-2 lg:col-start-4 vertical-rl lg:horizontal-tb',
							highlightCombination >= 1065 && highlightCombination <= 1067 && highlightClass,
							selectedItems.includes(1066) && selectedClass,
						)}
					>
						Even
					</div>
					<div
						className={cx(
							redClass,
							'row-span-2 row-start-6 col-start-2 lg:row-span-1 lg:row-start-2 lg:col-span-2 lg:col-start-6 vertical-rl lg:horizontal-tb',
							highlightCombination >= 1069 && highlightCombination <= 1071 && highlightClass,
							selectedItems.includes(1070) && selectedClass,
						)}
					>
						Red
					</div>
					<div
						className={cx(
							blackClass,
							'row-span-2 row-start-8 col-start-2 lg:row-span-1 lg:row-start-2 lg:col-span-2 lg:col-start-8 vertical-rl lg:horizontal-tb',
							highlightCombination >= 1073 && highlightCombination <= 1075 && highlightClass,
							selectedItems.includes(1074) && selectedClass,
						)}
					>
						Black
					</div>
					<div
						className={cx(
							helperClass,
							'row-span-2 row-start-10 col-start-2 lg:row-span-1 lg:row-start-2 lg:col-span-2 lg:col-start-10 vertical-rl lg:horizontal-tb',
							highlightCombination >= 1077 && highlightCombination <= 1079 && highlightClass,
							selectedItems.includes(1078) && selectedClass,
						)}
					>
						Odd
					</div>
					<div
						className={cx(
							helperClass,
							'row-span-2 row-start-12 col-start-2 lg:row-span-1 lg:row-start-2 lg:col-span-2 lg:col-start-12 vertical-rl lg:horizontal-tb',
							highlightCombination >= 1081 && highlightCombination <= 1083 && highlightClass,
							selectedItems.includes(1082) && selectedClass,
						)}
					>
						19 to 36
					</div>
				</div>
				<TableDesktopControls
					onHighlight={(value) => {
						setHighlight(value.numbers);
						setHighlightCombination(value.item);
					}}
				/>

				{open && (
					<ActionModal
						open={open}
						onClose={() => setOpen(false)}
						onAction={handleAction}
						requiredAllowance={BigInt(getRequiredAllowance()) * 10n ** 18n}
						allowance={allowance}
						tx={data}
						scan={ETHSCAN}
					/>
				)}
			</div>
		</div>
	);
};

interface TableDesktopControlsProps {
	onHighlight: (value: FuncProps) => void;
}

const TableDesktopControls: FC<TableDesktopControlsProps> = ({ onHighlight }) => {
	const { mutate } = usePlace();
	const { mutate: unplace } = useUnplace();
	const highlight = (item: number) => {
		onHighlight({ item, numbers: items[item] || [] });
	};
	const handleClick = (iItem: number) => {
		let item = iItem;
		if (items[item] === undefined) return;
		if ([30, 59, 88, 117, 146].includes(item)) item = 88;
		if (
			arrayFrom(8)
				.map((e) => e + 1002)
				.includes(item)
		)
			item = 1006;
		if (
			arrayFrom(7)
				.map((e) => e + 1011)
				.includes(item)
		)
			item = 1014;
		if (
			arrayFrom(7)
				.map((e) => e + 1019)
				.includes(item)
		)
			item = 1022;
		if (
			arrayFrom(3)
				.map((e) => e + 1061)
				.includes(item)
		)
			item = 1062;
		if (
			arrayFrom(3)
				.map((e) => e + 1065)
				.includes(item)
		)
			item = 1066;
		if (
			arrayFrom(3)
				.map((e) => e + 1069)
				.includes(item)
		)
			item = 1070;
		if (
			arrayFrom(3)
				.map((e) => e + 1073)
				.includes(item)
		)
			item = 1074;
		if (
			arrayFrom(3)
				.map((e) => e + 1077)
				.includes(item)
		)
			item = 1078;
		if (
			arrayFrom(3)
				.map((e) => e + 1081)
				.includes(item)
		)
			item = 1082;
		mutate({ item, numbers: items[item] || [] });
	};

	const handleContextMenu = (iItem: number, e: MouseEvent<HTMLDivElement>) => {
		let item = iItem;
		e.preventDefault();
		if (items[item] === undefined) return;
		if ([30, 59, 88, 117, 146].includes(item)) item = 88;
		if (
			arrayFrom(8)
				.map((e) => e + 1002)
				.includes(item)
		)
			item = 1006;
		if (
			arrayFrom(7)
				.map((e) => e + 1011)
				.includes(item)
		)
			item = 1014;
		if (
			arrayFrom(7)
				.map((e) => e + 1019)
				.includes(item)
		)
			item = 1022;
		if (
			arrayFrom(3)
				.map((e) => e + 1061)
				.includes(item)
		)
			item = 1062;
		if (
			arrayFrom(3)
				.map((e) => e + 1065)
				.includes(item)
		)
			item = 1066;
		if (
			arrayFrom(3)
				.map((e) => e + 1069)
				.includes(item)
		)
			item = 1070;
		if (
			arrayFrom(3)
				.map((e) => e + 1073)
				.includes(item)
		)
			item = 1074;
		if (
			arrayFrom(3)
				.map((e) => e + 1077)
				.includes(item)
		)
			item = 1078;
		if (
			arrayFrom(3)
				.map((e) => e + 1081)
				.includes(item)
		)
			item = 1082;
		unplace({ item, numbers: items[item] || [] });
	};
	const clear = () => {
		onHighlight({ item: 0, numbers: [] });
	};

	const { data: bets = [] } = useLocalBets();
	const chipClass = 'aspect-square  border-blue-500 flex items-center justify-center font-semibold rounded-lg  cursor-pointer';
	const renderChip = (item: number) => {
		const chip = bets.filter((e) => e.item === item);
		if (chip.length === 0) return null;
		const total = chip.reduce((acc, e) => acc + e.amount, 0);
		return (
			<Tooltip>
				<TooltipTrigger>
					<div>
						{chip.map((e, i) => (
							<Chip
								key={i}
								value={e.amount}
								fontSize={6}
								className={cx('CHIP w-full h-full lg:w-8 lg:h-8 absolute', {
									'top-0 left-0 lg:top-0.5 lg:left-1': i === 0,
									'top-0.5 left-0.5 lg:top-1 lg:left-1.5': i === 1,
									'top-1 left-1 lg:top-1.5 lg:left-2': i === 2,
									'top-1.5 left-1.5 lg:top-2 lg:left-2.5': i === 3,
									'top-2 left-2 lg:top-2.5 lg:left-3': i === 4,
									hidden: i >= 5,
									'text-amber-500': e.amount > 1000000,
									'text-red-500': e.amount > 500000 && e.amount <= 1000000,
									'text-purple-600': e.amount > 200000 && e.amount <= 500000,
									'text-indigo-600': e.amount > 50000 && e.amount <= 200000,
									'text-sky-600': e.amount >= 10000 && e.amount <= 50000,
								})}
							/>
						))}
					</div>
				</TooltipTrigger>
				<TooltipContent className={'bg-primary !bg-opacity-100 flex flex-col gap-1 p-4 text-white text-sm rounded-md'}>
					<p>
						Total: <span className={'font-bold text-yellow-400'}>{`${total.toLocaleString()} BET`}</span>
					</p>
					<p>
						Potential win: <span className={'font-bold text-green-400'}>{(total * (36 / chip[0].numbers.length)).toLocaleString()} BET</span>
					</p>
					<p>
						Combination: <span className={'font-bold text-yellow-400'}>{getCombination(chip[0].item)}</span>{' '}
						<span className={'text-green-400 text-xs'}>({36 / chip[0].numbers.length}x)</span>
					</p>
				</TooltipContent>
			</Tooltip>
		);
	};
	return (
		<TooltipProvider delayDuration={0}>
			<div className={'absolute top-[-5.1%] left-[-1.8%] w-[103.5%] grid grid-cols-29 grid-rows-7'}>
				{arrayFrom(203).map((item) => (
					<div
						onClick={() => handleClick(item)}
						onContextMenu={(e) => {
							handleContextMenu(item, e);
						}}
						key={item}
						onMouseLeave={clear}
						onMouseEnter={() => highlight(item)}
						className={cx(chipClass, 'relative')}
					>
						{renderChip(item)}
					</div>
				))}
			</div>
			<div className={'absolute bottom-[4.5%] left-[-1.8%] w-[103.5%] grid grid-cols-29 grid-rows-3'}>
				{arrayFrom(87)
					.map((e) => e + 1000)
					.map((item) => (
						<div
							onClick={() => handleClick(item)}
							onContextMenu={(e) => {
								handleContextMenu(item, e);
							}}
							key={item}
							onMouseLeave={clear}
							onMouseEnter={() => highlight(item)}
							className={cx(chipClass, 'relative')}
						>
							{renderChip(item)}
						</div>
					))}
			</div>
		</TooltipProvider>
	);
};

export default RouletteBetTable;

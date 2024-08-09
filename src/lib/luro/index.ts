import type { LuroBet, RoundModalPlayer } from '@/src/lib/luro/types.ts';
import type { QueryClient } from '@tanstack/react-query';
import { toast } from 'betfinio_app/use-toast';
import type { TFunction } from 'i18next';
import type { Address } from 'viem';

export const mapBetsToAuthors = (bets: LuroBet[]): LuroBet[] => {
	return [...bets].reduce((acc: LuroBet[], val) => {
		const author = acc.findIndex((bet) => bet.player === val.player);
		if (author === -1) {
			// biome-ignore lint/performance/noAccumulatingSpread: <explanation>
			return [...acc, { ...val }];
		}
		acc[author].amount += val.amount;
		return acc;
	}, []);
};

export const mapBetsToRoundTable = (bets: LuroBet[], winner: Address, volume: bigint, bonusShare: bigint, address: Address): RoundModalPlayer[] => {
	const bonusPool = (volume / 100n) * 4n;
	return [...bets]
		.map((e) => ({
			...e,
			player: e.player.toLowerCase() as Address,
		}))
		.reduce((acc: RoundModalPlayer[], val, index) => {
			const author = acc.findIndex((bet) => bet.player.toLowerCase() === val.player.toLowerCase());
			const weight = val.amount * BigInt(bets.length - index);
			const bonus = bonusShare === 0n ? 0n : (bonusPool * weight) / bonusShare;
			if (author === -1) {
				acc.push({
					player: val.player.toLowerCase() as Address,
					count: 1,
					volume: val.amount,
					win: val.player.toLowerCase() === winner.toLowerCase() ? val.amount : 0n,
					bonus: bonus,
				});
			} else {
				acc[author].volume += val.amount;
				acc[author].count += 1;
				acc[author].win += val.player.toLowerCase() === winner.toLowerCase() ? val.amount : 0n;
				acc[author].bonus += bonus;
			}
			console.log(acc);
			return acc;
			//TODO: sorting algorhytm for largest volume
		}, [])
		.sort((a, b) => {
			if (a.player === address) {
				return -1;
			}
			if (b.player === address) {
				return 1;
			}
			if (a.volume > b.volume) {
				return -1;
			}
			return 1;
		});
};

export const animateNewBet = (address: Address, strength: number, queryClient: QueryClient) => {
	queryClient.setQueryData(['luro', 'bets', 'newBet'], { address, strength });
};

export const handleError = (e: Error, t: TFunction) => {
	// @ts-ignore
	toast({ variant: 'destructive', description: t(e.cause?.reason || 'unknown') });
};

export const getLuroInterval = () => {
	if (import.meta.env.PUBLIC_ENVIRONMENT.includes('prod')) {
		return 60 * 60 * 24;
	}
	return 60 * 2;
};

export const getCurrentRound = () => {
	if (import.meta.env.PUBLIC_ENVIRONMENT.includes('prod')) {
		return ((Math.floor(Date.now() / 1000) + 60 * 60 * 6) / 60) * 60 * 24;
	}
	return (Math.floor(Date.now() / 1000) / 60) * 60 * 24;
};

export const jumpToCurrentRound = (queryClient: QueryClient) => {
	queryClient.invalidateQueries({ queryKey: ['luro', 'visibleRound'] });
	queryClient.setQueryData(['luro', 'state'], { state: 'standby' });
};

export function hexToRgbA(hex: string) {
	let c: string | string[];
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length === 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = `0x${c.join('')}`;
		return `rgba(${[(Number.parseInt(c, 16) >> 16) & 255, (Number.parseInt(c, 16) >> 8) & 255, Number.parseInt(c, 16) & 255].join(',')},1)`;
	}
	throw new Error('Bad Hex');
}

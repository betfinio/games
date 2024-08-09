import { type FC, useState } from 'react';

import { useAvailableBonus } from '@/src/lib/luro/query';
import { LotteryContract } from '@betfinio/abi';
import { ZeroAddress } from '@betfinio/abi';
import { valueToNumber } from '@betfinio/hooks/dist/utils';
import { writeContract } from '@wagmi/core';
import { BetValue } from 'betfinio_app/BetValue';
import { useAccount, useConfig } from 'wagmi';

const BonusClaimBlock: FC = () => {
	const { address = ZeroAddress } = useAccount();
	const { data: availableBonus = 0n } = useAvailableBonus(address);
	const [loading, setLoading] = useState(false);
	const config = useConfig();

	const handleClaim = async () => {
		if (availableBonus === 0n) return;
		setLoading(true);
		try {
			const res = await writeContract(config, {
				...LotteryContract,
				functionName: 'claimBonus',
				args: [address],
			});
			//todo: implement
			// await submit(res)
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className={'border border-gray-800 min-h-[100px] bg-primaryLight flex flex-row items-center justify-between rounded-lg p-4 md:px-8'}>
			<div className={'flex flex-col items-start justify-between'}>
				<span className={'text-gray-400 text-sm'}>Available for claim:</span>
				<BetValue value={valueToNumber(availableBonus)} className={'text-yellow-400 text-xl'} withIcon />
			</div>
			<button
				type={'button'}
				onClick={handleClaim}
				disabled={availableBonus === 0n || loading}
				className={
					'px-4 py-2 min-w-[100px] rounded-lg border border-yellow-400 hover:bg-yellow-400 hover:text-black duration-300 disabled:bg-gray-800 disabled:cursor-not-allowed'
				}
			>
				Claim
			</button>
		</div>
	);
};

export default BonusClaimBlock;

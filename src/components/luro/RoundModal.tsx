import { ModalContent } from '@/src/components/luro/ModalContent.tsx';
import { getLuroInterval } from '@/src/lib/luro';
import { useRound } from '@/src/lib/luro/query';
import { useNavigate } from '@tanstack/react-router';
import { Dialog, DialogContent, DialogPortal } from 'betfinio_app/dialog';
import type { FC } from 'react';

const RoundModal: FC<{ round: number; open: boolean }> = ({ round, open }) => {
	const { data } = useRound(round);
	const navigate = useNavigate();
	if (!data) return null;
	const handleClose = async () => {
		await navigate({ to: '/luro' });
	};
	return (
		<Dialog open={open}>
			<DialogPortal>
				<DialogContent>
					<div className={'max-h-[100vh] w-[100vw] overflow-y-scroll p-2 bg-black'} onClick={handleClose}>
						<ModalContent onClose={handleClose} interval={getLuroInterval()} roundId={round} round={data} />
					</div>
				</DialogContent>
			</DialogPortal>
		</Dialog>
	);
};

export default RoundModal;

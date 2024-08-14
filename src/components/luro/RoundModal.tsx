import { ModalContent } from '@/src/components/luro/ModalContent.tsx';
import { getLuroInterval } from '@/src/lib/luro';
import { useRound } from '@/src/lib/luro/query';
import { useNavigate } from '@tanstack/react-router';
import { Dialog, DialogContent, DialogDescription, DialogPortal, DialogTitle } from 'betfinio_app/dialog';
import type { FC } from 'react';

const RoundModal: FC<{ round: number }> = ({ round }) => {
	const { data } = useRound(round);
	const navigate = useNavigate();
	if (!data) return null;
	const handleClose = async () => {
		await navigate({ to: '/luro' });
	};
	return (
		<Dialog open={true} onOpenChange={handleClose}>
			<DialogPortal>
				<DialogContent className={'games max-w-0 w-auto rounded-xl'}>
					<DialogTitle className={'hidden'} />
					<DialogDescription className={'hidden'} />
					<ModalContent onClose={handleClose} interval={getLuroInterval()} roundId={round} round={data} />
				</DialogContent>
			</DialogPortal>
		</Dialog>
	);
};

export default RoundModal;

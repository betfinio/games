import {createFileRoute, useNavigate} from '@tanstack/react-router'

export const Route = createFileRoute('/predict/')({
	component: Redirect
})


function Redirect() {
	const navigate = useNavigate()
	navigate({to: '/predict/$pair', params: {pair: 'BTCUSDT'}, replace: true})
	return null;
}
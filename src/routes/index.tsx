import {createFileRoute, useNavigate} from '@tanstack/react-router'
import {redirect} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	beforeLoad: () => {
		throw redirect({
			to: '/predict/$pair',
			params: {pair: 'BTCUSDT'}
		})
	},
})


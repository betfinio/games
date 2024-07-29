import {FC} from "react";
import {motion} from "framer-motion";
import cx from "clsx";
import {games} from "@/src/lib/predict";
import {Game} from "@/src/lib/predict/types";
import {Dialog, DialogContent, DialogTrigger} from "betfinio_app/dialog";
import {Link} from "@tanstack/react-router";
import {Menu} from "lucide-react";
import btcSvg from "@/src/assets/predict/btc.svg";

const PairSwitcher: FC<Game> = (game) => {
	return <Dialog>
		<DialogTrigger asChild>
			<motion.div className={'flex gap-2 md:gap-4 items-center  cursor-pointer'}>
				<div>
					<Menu className={'w-8 md:w-10 aspect-square text-white'}/>
				</div>
				<div className={'w-8 md:w-10 aspect-square'}>
					{getImage(game.name)}
				</div>
				<div className={'flex flex-col'}>
					<span className={'text-lg leading-5'}>{game.name}</span>
					<span className={'text-sm leading-5'}>Predict {(game.interval) / 60}min</span>
				</div>
			</motion.div>
		</DialogTrigger>
		<DialogContent className={'w-fit games'}>
			<SwitchModal selected={game}/>
		</DialogContent>
	</Dialog>
}


export default PairSwitcher;

const SwitchModal: FC<{ selected: Game }> = ({selected}) => {
	const pairs = Object.keys(games).map(key => games[key])
	return <motion.div layoutId={'switcher'} className={'rounded-lg border border-gray-800 bg-primary p-2 w-[300px] mx-auto text-white'}>
		{pairs.map((pair, index) => <Link to={`/predict/` + pair.name} key={index}
		                                  className={cx(' flex flex-row items-center gap-2 p-4 py-2', pair.name === selected.name && 'border border-gray-800 bg-primaryLighter rounded-lg')}>
			{getImage(pair.name)}
			{pair.name}
		</Link>)}
	</motion.div>
	
}

const getImage = (name: string) => {
	switch (name) {
		case "BTCUSDT":
			return <img src={btcSvg} width={40} height={40} alt={'btc'}/>
		case "BTCUSDT_OLD":
			return <img src={'/predict/btc.svg'} width={40} height={40} alt={'btc'}/>
		case "ETHUSDT":
			return <img src={'/predict/eth.svg'} width={40} height={40} alt={'eth'}/>
		case "MATICUSDT":
			return <img src={'/predict/matic.svg'} width={40} height={40} alt={'matic'}/>
	}
}


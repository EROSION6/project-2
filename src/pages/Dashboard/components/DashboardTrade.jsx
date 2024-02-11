import silver from '../../../assets/Cards/Group 255Silver.svg'
import daimond from '../../../assets/Cards/Group 265.svg'
import {
	default as legendary,
	default as platina,
} from '../../../assets/Cards/Hosting.svg'
import bronza from '../../../assets/Cards/Server.svg'
import TradeCard from '../../../components/Dashboard/TradeCard'
import styles from '../../../media.module.scss'

const cards = [
	{
		imageUrl: bronza,
		metal: 'Bronze',
		plus: '0.5',
		color: 'text-orange-500',
	},
	{
		imageUrl: silver,
		metal: 'Silver',
		plus: '1.0',
		color: 'text-gray-200',
	},
	{
		imageUrl: platina,
		metal: 'platina',
		plus: '12.0',
		color: 'text-blue-600',
	},
	{
		imageUrl: daimond,
		metal: 'Daimond',
		plus: '38.0',
		color: 'text-purple-600',
	},
	{
		imageUrl: legendary,
		metal: 'Legendary',
		plus: '86.0',
		color: 'text-red-700',
	},
]
const DashboardTrade = () => {
	return (
		<div className='w-full h-full flex justify-center'>
			<div className='w-[80rem] h-full flex flex-col justify-center items-center overflow-hidden p-6 rounded-2xl bg-[#1C1C1C] bg-opacity-40 bg-fil xl2:w-full px-6 md:px-3'>
				<div
					className={`grid grid-cols-3 gap-7 lg:gap-3 md:grid-cols-2 ${styles.grid_card}`}
				>
					{cards.map(card => (
						<TradeCard key={card.plus} {...card} />
					))}
				</div>
			</div>
		</div>
	)
}

export default DashboardTrade

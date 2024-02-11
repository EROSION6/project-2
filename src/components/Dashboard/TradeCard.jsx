import { Button } from '../../UI/index'

const TradeCard = ({ imageUrl, metal, plus, color }) => {
	return (
		<div className='w-auto h-[23rem] rounded-2xl shadow bg-[#2525256b] flex flex-col lg:h-auto'>
			<div className='flex items-center h-[12rem] w-full space-x-2 p-3 xl:flex-col '>
				<img
					className='w-23 h-36 xl:w-full sm:h-28'
					src={imageUrl}
					alt={metal}
				/>
				<div className='xl:flex space-x-2'>
					<h4 className={`text-2xl font-[900] ${color} xl:text-xl`}>{metal}</h4>
					<b className={`text-3xl font-[700] ${color} xl:text-xl`}>X{plus}</b>
				</div>
			</div>
			<div className='p-5 lg:p-2'>
				<p className='mb-3 text-base text-[#898CA9] font-[400] xl:text-sm'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
				</p>
				<div className='flex w-full justify-center'>
					<Button variant='btn-bg'>Buy Now</Button>
				</div>
			</div>
		</div>
	)
}

export default TradeCard

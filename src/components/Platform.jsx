import { Button } from "../UI/Button"
import star from "../assets/star-img.svg"

const Platform = () => {
	return (
		<>
			<article className='w-full flex gap-5 mt-40 h-full justify-center px-6 relative z-20 md:flex-col'>
				<img
					src={star}
					alt='star'
					className='absolute top-0 left-0 hover:rotate-180 duration-500 ease-in-out z-50'
				/>
				<div className='w-[420px] h-[335px] relative md:flex justify-center md:w-full items-center'>
					<div className='w-44 h-40 mt-40 ml-[-30px] rounded-full bg-gradient-to-r from-[#F3DD16] from-11% via-[#BD391C] via-60% to-[#511] 30% md:ml-[-100px]'></div>
					<img
						src='https://shinobi-crypto.vercel.app/static/media/iconsshield.6e1f020f5f6aa112a13f.png'
						alt=''
						className='absolute top-0'
					/>
				</div>
				<div className='w-[580px] sm:w-full'>
					<h2 className='text-5xl text-white font-[900] smx:text-2xl'>
						24/7 access to full service customer support
					</h2>
					<p className='text-base text-[#898ca9] font-[500] mt-5 smx:text-sm'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempos Lorem ipsum dolor sit amet, consectetur
					</p>
					<Button styles='mt-6' type='btn-border'>
						Get Started
					</Button>
				</div>
			</article>
		</>
	)
}

export default Platform

import { Button } from "../UI/Button"
import star from "../assets/star-imgstar2.svg"
import star2 from "../assets/star-imgstar3.svg"

const SecureContainer = () => {
	return (
		<article className='w-full flex gap-5 mt-40 h-full justify-center px-6 relative z-20 md:flex-col-reverse'>
			<img
				src={star}
				alt='star'
				className='absolute top-0 right-0 cursor-pointer hover:rotate-180 duration-500 ease-in-out z-50'
			/>
			<img
				src={star2}
				alt='star'
				className='absolute bottom-0 right-[10rem] cursor-pointer hover:rotate-180 duration-500 ease-in-out z-20'
			/>
			<div className='w-[580px] sm:w-full'>
				<h2 className='text-5xl text-white font-[900] smx:text-2xl'>
					Take your first step into safe, secure crypto investing
				</h2>
				<p className='text-base text-[#898ca9] font-[500] mt-5 smx:text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempos
				</p>
				<Button styles='mt-6' variant='btn-bg'>
					Get Started
				</Button>
			</div>
			<div className='w-[420px] h-[335px] relative flex items-center md:flex justify-center md:w-full'>
				<img
					src='https://shinobi-crypto.vercel.app/static/media/icons.b07f64c310c9449061253b00d902a2d1.svg'
					alt=''
					className='absolute top-0'
				/>
			</div>
		</article>
	)
}

export default SecureContainer

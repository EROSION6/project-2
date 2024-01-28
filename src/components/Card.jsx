import { FaArrowRight } from "react-icons/fa"
import { Button } from "../UI/Button"

const Card = ({ title, imageUrl }) => {
	return (
		<article className='w-96 p-6 flex flex-col items-center bg-[#1A1B23] rounded-3xl md:w-full'>
			<div>
				<img src={imageUrl} alt='create' />
			</div>
			<div className='text-center mt-4'>
				<h2 className='text-white text-3xl font-[800]'>{title}</h2>
				<p className='text-[#898CA9] text-base font-[400] mt-4 lg:text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempos Lorem ipsum dolor
				</p>
			</div>
			<footer className='mt-8'>
				<Button
					type='btn-not-bg'
					className='text-[#B982FF] text-base font-[600] flex items-center gap-1'>
					Get Started{" "}
					<FaArrowRight className='text-[#B982FF]' />
				</Button>
			</footer>
		</article>
	)
}

export default Card

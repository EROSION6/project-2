import { FaArrowRight } from "react-icons/fa"
import { Button } from "../UI/index"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Card = ({ title, imageUrl }) => {
	const { users } = useSelector(state => state.users)
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
					variant='btn-not-bg'
					className='text-[#B982FF] text-base font-[600] '>
					<Link
						to={users ? "dashboard/dashboard" : "register"}
						className='flex items-center gap-1'>
						Get Started <FaArrowRight className='text-[#B982FF]' />
					</Link>
				</Button>
			</footer>
		</article>
	)
}

export default Card

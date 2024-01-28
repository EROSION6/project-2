import star2 from "../../../assets/star-imgstar2.svg"
import star3 from "../../../assets/star-imgstar3.svg"

const StarImg = () => {
	return (
		<>
			<img
				src={star3}
				alt='star'
				className='absolute right-[50px] top-0 z-30 cursor-pointer hover:rotate-180 duration-500 ease-in-out md:top-[-40px]'
			/>
			<img
				src={star2}
				alt='star'
				className='absolute right-[86px] top-[20px] z-10 cursor-pointer hover:rotate-180 duration-500 ease-in-out md:top-[-20px]'
			/>
		</>
	)
}

export default StarImg

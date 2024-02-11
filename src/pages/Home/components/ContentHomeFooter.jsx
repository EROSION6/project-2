import { Input } from "../../../UI/index"

const ContentHomeFooter = () => {
	return (
		<div className='relative z-10 flex flex-col text-center items-center mt-40'>
			<h2 className='text-5xl text-white font-[900] smx:text-2xl'>
				Receive transmissions
			</h2>
			<p className='text-base text-[#898ca9] font-[500] mt-4 smx:text-sm'>
				Unsubscribe at any time.
			</p>
			<Input
				styles='mt-6'
				variant='input-black'
				placeholder='Email Address'
			/>
		</div>
	)
}

export default ContentHomeFooter

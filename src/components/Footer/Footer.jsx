import { Input } from "../../UI/Input"
import { Right } from "./Right"
import { Left } from "./Left"
import "react-toastify/dist/ReactToastify.css"

const Footer = () => {
	return (
		<footer className='bg-transparent border-t-[1px] relative border-[#2B2C3B] my-28'>
			<div className='w-[1440px] mx-auto xl2:w-full flex justify-between mt-20 px-6 lg:flex-col space-y-10 lg:items-center'>
				<div>
					<p className='text-[#898ca9] text-sm font-[400] w-[400px] smx:w-full'>
						CoinFlip, the world’s leading bitcoin ATM operator, makes it so
						flippin’ easy to buy and sell bitcoin via cash, card, or bank
						transfer.
					</p>
					<p className='text-[#898ca9] text-sm font-[400] mt-5'>
						Sign up to get the latest in CoinFlip news, discounts, and
						more.
					</p>
					<Input
						variant='input-black'
						placeholder='Email Address'
						styles='mt-8'
					/>
					<h5 className='text-[#898ca9] text-sm font-[600] mt-5'>
						© 2021 GPD Holdings, LLC FinCEN MSB
					</h5>
				</div>
				<div className='flex justify-between w-[50%] lg:w-full lg:justify-center gap-10 smx:flex-col'>
					<Left />
					<Right />
				</div>
			</div>
		</footer>
	)
}

export default Footer

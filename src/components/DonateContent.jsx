import { Input } from "../UI/Input"
import { options } from "./DepositContent"
import { Button } from "../UI/Button"
import { Link } from "react-router-dom"
import { useState } from "react"

const DonateContent = () => {
	const [value, setValue] = useState(1)

	const increment = () => {
		if (value) {
			setValue(Number(value) + 200)
		}
	}

	const decrement = () => {
		if (value > 1) {
			setValue(Number(value) - 200)
		}
	}

	return (
		<div className='w-full h-full py-10 flex flex-col relative gap-10'>
			<select
				id='countries'
				className='w-full p-6 rounded-xl bg-[#4444446b] outline-none text-white text-base text-[600] uppercase flex'>
				<option selected>btc</option>
				{options.map(opt => (
					<option key={opt} value={opt}>
						{opt}
					</option>
				))}
			</select>
			<div className='w-full h-full flex flex-col'>
				<div className='mb-3'>
					<Input
						type='text'
						styles='w-full py-5 smy:py-3'
						variant='input-dashboard'
						placeholder='With drawal Address'
					/>
				</div>
				<div className='flex space-x-4 sm:flex-col sm:space-x-0 space-y-4'>
					<Input
						type='number'
						value={value}
						onChange={e => setValue(e.target.value)}
						styles='w-full py-5 smy:py-3'
						variant='input-dashboard'
						placeholder='with drawal amount'
					/>
					<Button onClick={increment} variant='btn-border'>
						All
					</Button>
					<Button onClick={decrement} variant='btn-border'>
						Min
					</Button>
				</div>
			</div>
			<div>
				<div className='flex justify-center mb-8 space-x-5 sm:flex-col sm:space-x-0'>
					<Link to='' className='text-white text-xl font-[500] sm:text-lg'>
						Fee: 0.003 BTC
					</Link>
					<Link to='' className='text-white text-xl font-[500] sm:text-lg'>
						you receive: 0.017 BTC
					</Link>
				</div>
				<Button variant='btn-bg' styles='w-full'>
					PLEACE WHITDRAWAL
				</Button>
			</div>
		</div>
	)
}

export default DonateContent

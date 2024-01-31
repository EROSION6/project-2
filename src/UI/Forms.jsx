import { Input } from "../UI/Input"

export const Forms = ({ title, value, onChange, ...props }) => {
	return (
		<div className='w-full mb-5 md:mb-4'>
			<label className='text-white text-base font-[500] block mb-3 md:mb-1'>
				{title}
			</label>
			<Input
				{...props}
				variant='input-dashboard'
				value={value}
				onChange={onChange}
				styles='w-full md:py-2'
			/>
		</div>
	)
}

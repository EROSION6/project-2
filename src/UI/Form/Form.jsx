import { Input } from '../Input/Input'

export const Form = ({ styles, placeholder, value, onChange, ...props }) => {
	return (
		<div {...props} className='mb-5'>
			<label className={`block mb-3 text-white text-xl font-[600] ${styles}`}>
				Email
			</label>
			<Input
				variant='input-blue'
				type='email'
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required
			/>
		</div>
	)
}

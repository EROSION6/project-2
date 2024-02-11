import { useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button } from '../../UI/index'
import Rectangle from '../../assets/Rectangle 39232.png'

const DepositContent = () => {
	const [copyValue, setCopyValue] = useState(
		'283h976qwe9ry25r817gf31f4fk17f9gEIskfeFskgfje34'
	)
	const notify = () =>
		toast.success('You copied', {
			position: 'top-right',
			autoClose: 5000,
		})

	const copyToClipboard = () => {
		if (copyValue) {
			navigator.clipboard.writeText(copyValue)
			notify()
		}
	}

	return (
		<div className='w-full h-full py-10 flex flex-col justify-between relative'>
			<select
				id='countries'
				className='w-full p-6 rounded-xl bg-[#4444446b] outline-none text-white text-base text-[600] uppercase flex smy:py-4'
			>
				<option selected>btc</option>
				{options.map(opt => (
					<option key={opt} value={opt}>
						{opt}
					</option>
				))}
			</select>
			<div className='w-full flex flex-col items-center'>
				<div className='absolute top-[23%] xl2:top-[20%]'>
					<img
						src={Rectangle}
						alt='Rectangle'
						className='w-[17rem] h-[17rem] sm:w-[14rem] sm:h-[14rem]'
					/>
				</div>
				<div className='w-full flex flex-col items-center'>
					<label
						htmlFor='input-copy'
						className='w-full p-6 rounded-xl bg-[#4444446b] flex justify-between items-center smy:py-4'
					>
						<span>
							<b className='text-2xl text-white font-[500] lg:text-base sm:hidden'>
								283h976qwe9ry25r817gf31f4fk17f9gEIskfeFskgfje34
							</b>
						</span>
						<span className='cursor-pointer' onClick={copyToClipboard}>
							<FaRegCopy className='text-white w-8 h-8 lg:w-6 lg:h-6 hover:text-[#4444446b] duration-150 ease-out ' />
							<ToastContainer />
						</span>
					</label>
					<input type='text' id='input' className='hidden' />
					<div className='flex flex-col items-center mt-7 space-y-4'>
						<p className='text-base text-[#898CA9] text-center font-[400] w-[30rem] sm:w-full sm:text-sm'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim a
							fugit repudiandae inventore, cumque voluptatem harum omnis
							debitis.
						</p>
						<Button variant='btn-bg'>PLEACE WHITDRAWAL</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DepositContent

export const options = ['btc', 'btc', 'btc', 'btc', 'btc']

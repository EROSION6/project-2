const Splendings = ({ progress, number, procent, color, title }) => {
	return (
		<>
			<div className='mb-2 text-base font-medium dark:text-white'>
				{title}
			</div>
			<div className='flex items-center gap-4 relative'>
				<div className='w-[85%] bg-gray-600 rounded-full h-2.5 mb-4'>
					<div
						className={`${color} h-2.5 rounded-full`}
						style={{ width: `${progress}` }}></div>
				</div>
				<div className='flex flex-col absolute right-0 -top-7'>
					<b className='text-white'>$ {number}B</b>
					<b className='text-white'>{procent}%</b>
				</div>
			</div>
		</>
	)
}

export default Splendings

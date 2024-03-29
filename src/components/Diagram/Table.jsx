import { meaning, titleTable } from "./data"

const Table = () => {
	return (
		<div className='relative shadow-md sm:rounded-lg'>
			<table className='w-[91rem] bg-[#131313] rounded-lg xl2:w-full'>
				<thead className='text-[#878787] text-sm font-[400]'>
					<tr className='border-b border-[#2B2C3B]'>
						{titleTable.map(table => (
							<th key={table} scope='col' className='px-6 py-3 smx:px-3'>
								{table}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{meaning.map(meaning => (
						<tr
							key={meaning.balance}
							className='text-white text-center text-base font-[600] uppercase border-b border-[#2B2C3B] smy:text-sm'>
							<th scope='row' className='px-6 py-4 smx:px-1 smx:py-2'>
								{meaning.name}
							</th>
							<td className='px-6 py-4 smx:px-1 smx:py-2'>{meaning.balance}</td>
							<td className='px-6 py-4 smx:px-1 smx:py-2'>{meaning.profit}</td>
							<td className='px-6 py-4 smx:px-1 smx:py-2'>
								<button className='bg-transparent border rounded-md text-white px-2 py-2'>
									Edit
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table

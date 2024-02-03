import { Link } from "react-router-dom"
import { tables } from "../pages/Home/date"
import { FaArrowRight } from "react-icons/fa"
import { useSelector } from "react-redux"

const Table = () => {
	const { users } = useSelector(state => state.users)

	return (
		<div className='relative overflow-x-auto mt-20 rounded-3xl mx-6'>
			<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
				<tbody>
					{tables.map(table => (
						<tr
							key={table.abbr}
							className='bg-[#1A1B23] border-b border-[#2B2C3B]'>
							<th
								scope='row'
								className='py-5 px-8 text-white text-xl font-[700] lg:py-4 lg:px-4 md:text-base sm:hidden'>
								{table.title}
							</th>
							<td className='px-6 py-4 text-[#B982FF] text-xl font-[700] lg:py-4 lg:px-4 md:text-base'>
								{table.abbr}
							</td>
							<td className='px-6 py-4 text-white text-xl font-[700] lg:py-4 lg:px-4 md:text-base'>
								${table.price}
							</td>
							<td
								className={
									table.percent.includes("-")
										? "px-6 py-4 text-[#FF8282] text-xl font-[700] lg:py-4 lg:px-4 md:text-base"
										: "px-6 py-4 text-[#0DBB7C] text-xl font-[700] lg:py-4 lg:px-4 md:text-base"
								}>
								{table.percent}%
							</td>
							<td className='px-6 py-4 lg:py-4 lg:px-4'>$2999</td>
							<td className='px-6 py-4 text-white text-base font-[600]  cursor-pointer lg:py-4 lg:px-4 md:text-sm smx:hidden'>
								<Link
									to={users ? "dashboard/trade" : "register"}
									className='flex items-center gap-1'>
									Trade Now <FaArrowRight />
								</Link>
							</td>
							<td className='px-6 py-4 text-white text-base hidden font-[600] cursor-pointer lg:py-4 lg:px-4 md:text-sm smx:flex items-center gap-1'>
								<Link
									to={users ? "dashboard/trade" : "register"}
									className='flex items-center gap-1'>
									Go <FaArrowRight className='smx:w-2 h-2' />
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table

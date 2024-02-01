import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import Splendings from "./Splendings"
import { Button } from "../../UI/Button"
import { options, progress } from "./date"
import "../../media.module.scss"

const DashboardChart = () => {
	return (
		<div className='flex '>
			<div className='flex gap-5 w-full mon:flex-col'>
				<div className='w-[60rem] h-[30rem] rounded-2xl bg-[#1C1C1C] bg-opacity-40 bg-fil xl:w-full px-6'>
					<HighchartsReact highcharts={Highcharts} options={options} />
				</div>
				<div className='w-[30rem] h-[30rem] rounded-2xl bg-[#1C1C1C] bg-opacity-40 bg-fil p-4 sm:w-full'>
					<h3 className='text-white text-xl font-[600] mb-4'>Assets</h3>
					{progress.map(prog => (
						<Splendings key={prog.number} {...prog} />
					))}
					<div className='mt-12'>
						<Button variant='btn-border' styles='w-full'>
							View All
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DashboardChart

import { useState } from "react"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import HeaderDashboard from "../../components/HeaderDashboard"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
	const [open, isOpen] = useState(true)

	return (
		<>
			<div className='flex w-full'>
				<Sidebar open={open} isOpen={isOpen} />
				<div className='w-full flex flex-col '>
					<HeaderDashboard open={open} isOpen={isOpen} />
					<div className='w-full h-full px-5'>
						<Outlet />
					</div>
				</div>
			</div>
		</>
	)
}

export default Dashboard

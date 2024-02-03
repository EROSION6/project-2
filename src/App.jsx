import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Register from "./pages/Authentication/Register"
import Dashboard from "./pages/Dashboard/Dashboard"
import {
	DashboardContent,
	DashboardDonate,
	DashboardProfile,
	DashboardProtocols,
	DashboardTrade,
} from "./pages/Dashboard/components/index"
import { useSelector } from "react-redux"

const App = () => {
	const { users } = useSelector(state => state.users)

	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				{users ? (
					<Route path='/dashboard' element={<Dashboard />}>
						<Route path='dashboard' element={<DashboardContent />} />
						<Route path='donate' element={<DashboardDonate />} />
						<Route path='protocols' element={<DashboardProtocols />} />
						<Route path='trade' element={<DashboardTrade />} />
						<Route path='profile' element={<DashboardProfile />} />
					</Route>
				) : (
					<>
						<Route path='/register' element={<Register />} />
					</>
				)}
			</Routes>
		</>
	)
}

export default App

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Authentication/Login"
import Register from "./pages/Authentication/Register"
import Dashboard from "./pages/Dashboard/Dashboard"
import DashboardContent from "./pages/Dashboard/components/DashboardContent"
import DashboardDonate from "./pages/Dashboard/components/DashboardDonate"
import DashboardProtocols from "./pages/Dashboard/components/DashboardProtocols"
import DashboardTrade from "./pages/Dashboard/components/DashboardTrade"
import DashboardProfile from "./pages/Dashboard/components/DashboardProfile"

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/dashboard' element={<Dashboard />}>
					<Route path='dashboard' element={<DashboardContent />} />
					<Route path='donate' element={<DashboardDonate />} />
					<Route path='protocols' element={<DashboardProtocols />} />
					<Route path='trade' element={<DashboardTrade />} />
					<Route path='profile' element={<DashboardProfile />} />
				</Route>
			</Routes>
		</>
	)
}

export default App

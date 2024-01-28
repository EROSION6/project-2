import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"

const App = () => {
	return (
		<>
			<div className='w-[1440px] mx-auto xl2:w-full'>
				<Navbar />
				<Home />
			</div>
			<Footer />
		</>
	)
}

export default App

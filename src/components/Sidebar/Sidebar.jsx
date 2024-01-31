import { Link } from "react-router-dom"
import { navigation } from "./date"
import logout from "../../assets/logout-1 1.svg"

export const Sidebar = ({ open }) => {
	return (
		<>
			<div
				className={
					!open
						? "flex flex-row bg-transparent fixed left-0 z-50 translate-x-[-100%] ease-linear duration-200"
						: "translate-x-[0%] ease-linear duration-200"
				}>
				<div className='flex flex-col min-h-screen w-56 bg-transparent rounded-r-3xl overflow-hidden border-r border-[#1C1C1C] h-full justify-between md:w-24'>
					<div className='flex flex-col'>
						<div className='flex items-center justify-center h-20 shadow-md md:justify-center'>
							<Link to='/'>
								<h1 className='flex items-center gap-2 text-2xl font-[600] text-white'>
									<span>
										<img
											src='data:image/png;base64,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'
											alt='logo'
										/>
									</span>
									<strong className='md:hidden'>Crypto</strong>
								</h1>
							</Link>
						</div>
						<ul className='w-full flex flex-col py-4 items-baseline justify-center'>
							{navigation.map(link => (
								<li key={link.title}>
									<Link
										to={link.href}
										className='flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 p-9'>
										<span className='inline-flex items-center justify-center w-12 text-lg text-gray-400 md:w-auto'>
											<img src={link.icon} className='h-6 w-7' />
										</span>
										<span className='text-xl text-white font-[500] md:hidden'>
											{link.title}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<footer className='flex justify-center -mt-12 relative'>
						<Link className='absolute bottom-12 flex items-center space-x-3'>
							<span>
								<img src={logout} alt='logout' />
							</span>
							<span className='text-white text-xl font-[400] hover:text-red-400 duration-300 ease-out md:hidden'>
								Log Out
							</span>
						</Link>
					</footer>
				</div>
			</div>
		</>
	)
}

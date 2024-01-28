import { useState } from "react"
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx"
import { Button } from "../UI/Button"

const Navbar = () => {
	const [open, isOpen] = useState(false)
	const navigate = ["Buy / Sell", "Grow", "Markets", "Business", "Support"]

	return (
		<header className='w-full flex text-white justify-between p-6 items-center relative z-50'>
			<div className='relative'>
				<h1 className='text-white text-3xl font-[700]'>Logo</h1>
			</div>
			<div
				className={
					!open
						? "flex items-center justify-between w-[70%] xl:w-[75%] lg:hidden"
						: "flex flex-col fixed left-0 top-0 p-10 w-72 bg-black h-screen border-r border-[#4b48486e] rounded-lg z-50"
				}>
				<nav
					className={!open ? "flex space-x-8" : "flex flex-col space-y-8"}>
					{navigate.map(list => (
						<a
							className='text-white text-base font-[600]'
							key={list}
							href='#'>
							{list}
						</a>
					))}
				</nav>
				<div
					className={
						!open
							? "flex space-x-5"
							: "flex flex-col space-y-3 mt-5 items-start"
					}>
					<Button type='btn-border'>Sign In</Button>
					<Button type='btn-bg'>Sign up</Button>
				</div>
				<span
					onClick={() => isOpen(false)}
					className='hidden lg:block absolute top-0 right-0 p-4'>
					<RxCross2 className='w-8 h-8 cursor-pointer hover:rotate-180 duration-300 ease-in' />
				</span>
			</div>
			<div onClick={() => isOpen(!open)} className='hidden lg:block'>
				<RxHamburgerMenu className='w-8 h-8' />
			</div>
		</header>
	)
}

export default Navbar

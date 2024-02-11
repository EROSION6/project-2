import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { Left } from './Left'
import styles from './Navbar.module.scss'
const navigate = ['Buy / Sell', 'Grow', 'Markets', 'Business', 'Support']

const Navbar = () => {
	const [open, isOpen] = useState(false)

	useEffect(() => {
		const menuScrollBody = () => {
			open
				? (document.body.style.overflow = 'hidden')
				: (document.body.style.overflow = 'auto')
		}

		menuScrollBody()

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [open])

	return (
		<motion.header
			initial={{ top: -100 }}
			animate={{ top: 0 }}
			transition={{ duration: 0.2, ease: 'linear' }}
			className='w-[1440px] mx-auto xl2:w-full flex text-white justify-between p-6 items-center relative z-50'
		>
			<div className='relative'>
				<h2 className='flex items-center gap-2 text-2xl font-[600] text-white'>
					<img
						src='data:image/png;base64,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'
						alt='logo'
					/>
					Crypto
				</h2>
			</div>
			<div
				className={`flex items-center justify-between w-[70%] lg:flex-col lg:fixed left-0 top-0 p-10 lg:w-48 lg:bg-black lg:h-screen lg:border-r border-[#4b48486e] lg:rounded-lg z-50 transition-all duration-300 ease-linear ${
					open ? 'left-0' : '-left-full'
				}`}
			>
				<nav className='flex space-x-8 lg:flex-col lg:space-y-8 lg:space-x-0'>
					{navigate.map(list => (
						<Link
							className={`text-white text-base font-[600] ${styles.links}`}
							key={list}
							href='#'
						>
							{list}
						</Link>
					))}
				</nav>
				<div>
					<Left open={open} />
				</div>
				<span
					onClick={() => isOpen(false)}
					className='hidden lg:block absolute top-0 right-0 p-4'
				>
					<RxCross2 className='w-8 h-8 cursor-pointer hover:rotate-180 duration-300 ease-in' />
				</span>
			</div>
			<div onClick={() => isOpen(!open)} className='hidden lg:block'>
				<RxHamburgerMenu className='w-8 h-8' />
			</div>
		</motion.header>
	)
}

export default Navbar

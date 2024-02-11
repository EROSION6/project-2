import { RxHamburgerMenu } from 'react-icons/rx'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import avatar from '../../assets/Ellipse 1.svg'

const HeaderDashboard = ({ open, isOpen }) => {
	const { users } = useSelector(state => state.users)
	const handleOpen = () => {
		isOpen(!open)
	}

	return (
		<div className='w-full p-6'>
			<header className='flex justify-between items-center'>
				<div onClick={handleOpen}>
					<RxHamburgerMenu className='text-white w-7 h-8 cursor-pointer ' />
				</div>
				<div>
					<Link to='profile' className='flex items-center space-x-4'>
						<span className='text-white text-lg font-[500] md:text-sm'>
							{users.email}
						</span>
						<span>
							<img src={avatar} alt='avatar' />
						</span>
					</Link>
				</div>
			</header>
		</div>
	)
}

export default HeaderDashboard

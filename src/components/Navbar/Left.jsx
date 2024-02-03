import { Button } from "../../UI/Button"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import avatar from "../../assets/Ellipse 1.svg"

export const Left = ({ open }) => {
	const { users } = useSelector(state => state.users)

	return (
		<>
			{users ? (
				<div>
					<Link
						to='dashboard/profile'
						className='flex items-center space-x-5 sm:mt-5'>
						<span>
							<img
								src={avatar}
								alt='avatar'
								className='w-10 h-10 rounded-lg '
							/>
						</span>
						<h4 className='text-white text-xl font-[600] sm:text-base'>
							{users && users.email ? users.email : "Alex"}
						</h4>
					</Link>
				</div>
			) : (
				<div
					className={
						!open
							? "flex space-x-5"
							: "flex flex-col space-y-3 mt-5 items-start"
					}>
					<Button variant='btn-border'>
						<Link to='register'>Sign In</Link>
					</Button>
					<Button variant='btn-bg'>
						<Link to='register'>Sign up</Link>
					</Button>
				</div>
			)}
		</>
	)
}

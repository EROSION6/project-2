import { Link } from "react-router-dom"
import { Button } from "./Button"
import { useSelector } from "react-redux"

export const Title = ({
	variant,
	title,
	info,
	btnTitle,
	addStylesTitle,
	addStylesInfo,
	btnIcon,
}) => {
	const { users } = useSelector(state => state.users)
	return (
		<div className='flex flex-col justify-center w-full text-center items-center px-6 relative z-10'>
			<h1 className={`text-white font-[900] ${addStylesTitle}`}>
				{title}
			</h1>
			<p
				className={`text-[#898CA9] text-base font-[800] mt-4 ${addStylesInfo}`}>
				{info}
			</p>
			<Button variant={variant} styles='px-12 py-4 mt-8 sm:mt-4'>
				<Link
					className='flex items-center gap-1'
					to={users ? "dashboard/dashboard" : "register"}>
					{btnTitle} {btnIcon}
				</Link>
			</Button>
		</div>
	)
}

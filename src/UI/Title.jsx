import { Button } from "./Button"

export const Title = ({
	type,
	title,
	info,
	btnTitle,
	addStylesTitle,
	addStylesInfo,
	btnIcon,
}) => {
	return (
		<div className='flex flex-col justify-center w-full text-center items-center px-6 relative z-50'>
			<h1 className={`text-white font-[900] ${addStylesTitle}`}>
				{title}
			</h1>
			<p
				className={`text-[#898CA9] text-base font-[800] mt-4 ${addStylesInfo}`}>
				{info}
			</p>
			<Button type={type} styles='px-12 py-4 mt-8 sm:mt-4'>
				{btnTitle} {btnIcon}
			</Button>
		</div>
	)
}

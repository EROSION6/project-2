import { useState } from "react"

export const Left = () => {
	const [active, setActive] = useState(0)

	const navigateCompanyFooter = [
		"About",
		"Careers",
		"Press",
		"News",
		"Match",
	]

	return (
		<div>
			<h4 className='text-[#898ca9] text-base font-[700]'>Company</h4>
			<ul className='flex flex-col space-y-4'>
				{navigateCompanyFooter.map((link, i) => (
					<li
						onClick={() => setActive(i)}
						className={
							active === i
								? "text-white text-base font-[400] mt-3 cursor-pointer translate-x-1 duration-500 ease-out"
								: "text-[#898ca9] text-base font-[400] mt-3 cursor-pointer"
						}
						href='#'
						key={link}>
						{link}
					</li>
				))}
			</ul>
		</div>
	)
}

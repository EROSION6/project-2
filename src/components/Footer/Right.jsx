import { useState } from "react"

export const Right = () => {
	const [activeRight, setActiveRight] = useState(0)

	const navigateFooter = [
		"CoinFlip Privacy Policy",
		"CoinFlip Biometrics Privacy Policy",
		"CoinFlip Financial Privacy Notice",
		"CoinFlip Terms of Service",
		"CoinFlip Trade Desk Terms of Service",
	]
	return (
		<div className='text-[#898ca9] text-base font-[700]'>
			<h4>Privacy Policy and Terms of Service</h4>
			<ul className='flex flex-col space-y-4'>
				{navigateFooter.map((links, i) => (
					<li
						onClick={() => setActiveRight(i)}
						className={
							activeRight === i
								? "text-white text-base font-[400] mt-3 cursor-pointer translate-x-1 duration-500 ease-out"
								: "text-[#898ca9] text-base font-[400] mt-3 cursor-pointer"
						}
						href='#'
						key={links}>
						{links}
					</li>
				))}
			</ul>
		</div>
	)
}

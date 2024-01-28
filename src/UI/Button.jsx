import classNames from "classnames"

export const Button = ({ variant, styles, children, ...props }) => {
	const typesBtn = classNames({
		"bg-gradient-to-r from-[#18C8FF] to-[#933FFE] hover:bg-gradient-to-bl focus:ring-4 focus:ring-[#18C8FF] dark:focus:ring-[#933FFE] px-6 py-3 text-white text-base font-[800] rounded-xl":
			variant === "btn-bg",
		"text-[#B982FF] text-base font-[600] flex items-center gap-1 outline-none border-none":
			variant === "btn-not-bg",
		"px-6 py-3 border border-white text-white text-base font-[900] rounded-xl":
			variant === "btn-border",
	})

	return (
		<button {...props} className={`${typesBtn} ${styles}`}>
			{children}
		</button>
	)
}

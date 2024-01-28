import classNames from "classnames"

export const Input = ({ styles, variant, ...props }) => {
	const styleInput = classNames({
		"px-5 py-4 rounded-lg border outline-none bg-transparent border-gray-400 text-gray-400 text-base":
			variant === "input-black",
      
		"px-5 py-4 rounded-lg border-none outline-none bg-[#16161E] w-[578px] text-gray-400 sm:w-full":
			variant === "input-blue",
	})

	return <input {...props} className={`${styleInput} ${styles}`} />
}

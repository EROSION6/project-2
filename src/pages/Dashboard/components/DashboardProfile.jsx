import { useState } from "react"
import { Button } from "../../../UI/Button"
import styles from "../../../media.module.scss"
import avatar from "../../../assets/Ellipse 1.svg"
import { Forms } from "../../../UI/Forms"

const DashboardProfile = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [btcAddress, setBtcAddress] = useState("")
	const [etnAddress, setEtnAddress] = useState("")

	const onChangeEmail = e => setEmail(e.target.value)
	const onChangePassword = e => setPassword(e.target.value)
	const onChangeBtc = e => setBtcAddress(e.target.value)
	const onChangeEnt = e => setEtnAddress(e.target.value)

	const formsObject = [
		{ title: "Email", value: email, onChange: onChangeEmail },
		{ title: "Password", value: password, onChange: onChangePassword },
		{ title: "BTC Address", value: btcAddress, onChange: onChangeBtc },
		{ title: "ETH Address", value: etnAddress, onChange: onChangeEnt },
	]

	return (
		<>
			<div
				className={`w-[45rem] h-[50rem] rounded-2xl bg-[#1C1C1C] bg-opacity-40 bg-fil lg:w-full lg:h-[40rem] px-6 ${styles.bgfilters} md:px-3`}>
				<form className='w-x-sm mx-auto relative z-20 px-6 flex items-center justify-around h-full sm:flex flex-col sm:w-full md:px-0 md:justify-between py-5'>
					<div className='flex w-full items-center space-x-5'>
						<span>
							<img
								src={avatar}
								alt='avatar'
								className='w-20 h-20 rounded-lg lg:w-12 lg:h-12'
							/>
						</span>
						<h4 className='text-white text-2xl font-[600]'>Evano</h4>
					</div>
					<div className='w-full'>
						{formsObject.map(form => (
							<Forms key={form.title} {...form} />
						))}
					</div>
					<Button variant='btn-bg' styles='w-full'>
						Save
					</Button>
				</form>
			</div>
		</>
	)
}

export default DashboardProfile

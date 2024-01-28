import { FaArrowRight } from "react-icons/fa"
import { Title } from "../UI/Title"
import styles from "../media.module.scss"

const SliceHistory = () => {
	return (
		<div className='mt-52 relative'>
			<Title
				title='Buy and sell with the lowest fees in the industry'
				info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sit amet'
				addStylesTitle={`text-6xl w-[75%] xl:w-[95%] md:text-2xl ${styles.titleSection}`}
				addStylesInfo={`lg:text-sm w-[50%] xl:w-[75%] ${styles.infoSection}`}
				btnTitle={`Learn More`}
				btnIcon={<FaArrowRight />}
				type='btn-not-bg'
			/>
			<img
				src='https://shinobi-crypto.vercel.app/static/media/bg-img.faa7accb366050d20bce.png'
				alt='loping'
				className='absolute top-0 left-0 ml-[-230px] xl2:ml-0'
			/>
		</div>
	)
}

export default SliceHistory

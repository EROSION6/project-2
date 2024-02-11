import { motion } from 'framer-motion'
import { Title } from '../UI/index'
import star2 from '../assets/star-imgstar2.svg'
import styles from '../media.module.scss'
import { cards } from '../pages/Home/data'
import Card from './Card'

const SectionInfo1 = () => {
	return (
		<section className='relative'>
			<div className='w-full h-screen relative flex justify-center flex-col items-center gap-10 md:justify-center md:h-[40vh]'>
				<img src={star2} alt='star' className='absolute left-0' />
				<motion.div
					initial={{ y: -500 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.4, ease: 'linear' }}
				>
					<Title
						title='We make crypto clear and simple'
						addStylesTitle={`font-[900] text-8xl xl:text-6xl text-center w-[90%] ${styles.title}`}
						variant='btn-bg'
						btnTitle='Get Started'
					/>
				</motion.div>
			</div>
			<div className='flex gap-5 justify-center px-3  md:flex-col'>
				{cards.map(card => (
					<Card key={card.title} {...card} />
				))}
			</div>
		</section>
	)
}

export default SectionInfo1

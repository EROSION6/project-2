import { Title } from "../../UI/index"
import Platform from "../../components/Platform"
import styles from "../../media.module.scss"
import star1 from "../../assets/star-img.svg"
import SliceHistory from "../../components/SliceHistory"
import Table from "../../components/Table"
import SecureContainer from "../../components/SecureContainer"
import SectionInfo1 from "../../components/SectionInfo1"
import ContentHomeFooter from "./components/ContentHomeFooter"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const Home = () => {
	return (
		<>
			<Navbar />
			<main className='w-[1440px] mx-auto xl2:w-full'>
				<img
					src='https://shinobi-crypto.vercel.app/static/media/circlescircles.f8cbe5ded2e7b7ddaebf7e83b8ef1633.svg'
					alt='shinobi'
					className='absolute top-0 '
				/>
				<SectionInfo1 />
				<section className='mt-56 md:mt-32 relative'>
					<Title
						title='A crypto mining platform that invest in you'
						info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio suscipit, in illum sunt libero.'
						btnTitle='Get Started'
						variant='btn-bg'
						addStylesTitle={`text-6xl w-[65%] xl:w-[95%] md:text-2xl ${styles.titleSection}`}
						addStylesInfo={`lg:text-sm w-[35%] xl:w-[75%] ${styles.infoSection}`}
					/>
					<img
						src={star1}
						alt='star'
						className='absolute right-0 z-10 cursor-pointer hover:rotate-180 duration-500 ease-in-out '
					/>
					<img
						src='https://shinobi-crypto.vercel.app/static/media/Looper-3.78efcca0415e906a0672.png'
						alt='lomo-crypto'
						className='absolute top-0 right-0 mr-[-200px] xl2:mr-0'
					/>
					<Platform />
					<SliceHistory />
					<Table />
					<SecureContainer />
				</section>
				<ContentHomeFooter />
			</main>
			<Footer />
		</>
	)
}

export default Home

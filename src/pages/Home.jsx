import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero'
import Tri from '../components/Home/Tri'
import Visimisi from '../components/Home/Visimisi'
import Peran from '../components/Home/Peran'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Hero />
                <Peran />
                <Tri />
                <Visimisi />
            </div>
            <Footer />
        </main>
    )
}

export default Home

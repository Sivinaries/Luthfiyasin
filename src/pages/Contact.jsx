import Footer from '../components/Footer'
import Form from '../components/Contact/Form'

function Contact() {
    return (
        <main className='flex flex-col'>
            <div className='w-full mx-auto'>
                <Form />
            </div>
            <Footer />
        </main>
    )
}

export default Contact
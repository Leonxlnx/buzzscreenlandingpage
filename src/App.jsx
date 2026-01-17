import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Steps from './components/Steps'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Background from './components/Background'

function App() {
    return (
        <div className="app font-sans bg-[#0E0E0F] min-h-screen text-white selection:bg-brand/30">
            <Background />
            <Navbar />
            <main>
                <Hero />
                <Logos />
                <Steps />
                <Features />
                <Testimonials />
                <Pricing />
                <CTA />
                <FAQ />
            </main>
            <Footer />
        </div>
    )
}

export default App

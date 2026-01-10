import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Features from './components/Features'
import EditSection from './components/EditSection'
import Communication from './components/Communication'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FAQ from './components/FAQ'

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Steps />
                <Features />
                <EditSection />
                <Communication />
                <CTA />
                <FAQ />
            </main>
            <Footer />
        </div>
    )
}

export default App

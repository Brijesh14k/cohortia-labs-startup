
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Features from "../components/Features"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

const HomePage = () => {
  return (

    <div className="bg-black min-h-screen">

      <Navbar />

      <main>

        <Hero />

        <Services />

        <Features />

        <Stats />

        <Testimonials />

        <Footer />

      </main>

    </div>
  )
}

export default HomePage
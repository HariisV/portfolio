import { useContext, useEffect } from 'react'
import AOS from 'aos'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
// import OtherProjects from './components/OtherProjects/OtherProjects'
import Skills from './components/Skills/Skills'
import Reviews from './components/Reviews/Reviews'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import 'aos/dist/aos.css' // Import stylesheet
import './App.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    }) // Initialize AOS
  }, []) // Run only once after component mount

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        {/* <OtherProjects /> */}
        <Skills />
        <Reviews />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

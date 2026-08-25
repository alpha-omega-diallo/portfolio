import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <section id="experience" className="flex min-h-screen items-center justify-center">
          <p className="text-slate-400 dark:text-slate-600">Section Expériences &amp; Formations — à venir (Étape 8)</p>
        </section>
        <section id="projects" className="flex min-h-screen items-center justify-center">
          <p className="text-slate-400 dark:text-slate-600">Section Projets &amp; Certifications — à venir (Étape 9)</p>
        </section>
        <section id="contact" className="flex min-h-screen items-center justify-center">
          <p className="text-slate-400 dark:text-slate-600">Section CV &amp; Contact — à venir (Étape 10)</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section id="hero" className="flex min-h-screen items-center justify-center">
          <p className="text-slate-400 dark:text-slate-600">Section Hero — à venir (Étape 5)</p>
        </section>
        <section id="about" className="flex min-h-screen items-center justify-center">
          <p className="text-slate-400 dark:text-slate-600">Section À propos — à venir (Étape 6)</p>
        </section>
        <section id="skills" className="flex min-h-screen items-center justify-center">
          <p className="text-slate-400 dark:text-slate-600">Section Compétences — à venir (Étape 7)</p>
        </section>
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

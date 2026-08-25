import Reveal from '../common/Reveal'
import { ChevronDownIcon, GithubIcon, LinkedinIcon, MailIcon } from '../common/icons'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/alpha-omega-diallo', Icon: GithubIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:dmamadoualpha915@gmail.com', Icon: MailIcon },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center sm:px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-400/30 via-purple-400/20 to-transparent blur-3xl dark:from-blue-500/20 dark:via-purple-500/10"
      />

      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Bonjour, je suis
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Mamadou Alpha Diallo
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-4 text-lg font-medium text-slate-600 sm:text-xl dark:text-slate-300">
          Étudiant en informatique · Développeur et passionné par la cybersécurité
        </p>
      </Reveal>

      <Reveal delay={300}>
        <p className="mx-auto mt-6 max-w-xl text-base text-slate-500 dark:text-slate-400">
          Je conçois des projets web et logiciels avec un intérêt particulier pour la sécurité informatique,
          l&apos;architecture logicielle et le développement sécurisé.
          <span className="mt-1 block text-xs text-slate-400 dark:text-slate-500">
            (texte à personnaliser à l&apos;étape 6)
          </span>
        </p>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-transform hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
          >
            Me contacter
          </a>
        </div>
      </Reveal>

      <Reveal delay={500}>
        <div className="mt-8 flex items-center justify-center gap-5">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </Reveal>

      <a
        href="#about"
        aria-label="Défiler vers la section À propos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 dark:text-slate-600"
      >
        <ChevronDownIcon className="h-6 w-6" />
      </a>
    </section>
  )
}

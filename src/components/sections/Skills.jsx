import Reveal from '../common/Reveal'
import { CodeIcon, CpuIcon, GitBranchIcon, GlobeIcon, PuzzleIcon } from '../common/icons'

const SKILL_GROUPS = [
  {
    title: 'Bas niveau & architecture',
    Icon: CpuIcon,
    skills: ['C', 'C++', 'RISC-V', 'Y86'],
  },
  {
    title: 'Programmation générale',
    Icon: CodeIcon,
    skills: ['Python', 'Java'],
  },
  {
    title: 'Développement web',
    Icon: GlobeIcon,
    skills: ['JavaScript', 'HTML5', 'Tailwind CSS', 'React', 'Vite'],
  },
  {
    title: 'Logique & fonctionnel',
    Icon: PuzzleIcon,
    skills: ['Prolog', 'OCaml'],
  },
  {
    title: 'Outils & workflow',
    Icon: GitBranchIcon,
    skills: ['Git', 'GitHub', 'GitHub Flow', 'npm'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Compétences
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Langages & technologies
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map(({ title, Icon, skills }, index) => (
          <Reveal key={title} delay={index * 100}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

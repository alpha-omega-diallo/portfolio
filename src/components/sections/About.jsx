import Reveal from '../common/Reveal'
import { GraduationCapIcon, MapPinIcon, TargetIcon } from '../common/icons'

const INFO_ITEMS = [
  {
    Icon: GraduationCapIcon,
    label: 'Formation',
    value: 'Licence Informatique — Université de Bordeaux (Sciences et Technologies)',
  },
  {
    Icon: TargetIcon,
    label: 'Recherche',
    value: 'Une alternance en cybersécurité',
  },
  {
    Icon: MapPinIcon,
    label: 'Localisation',
    value: 'Bordeaux, France',
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
          À propos
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Qui suis-je ?
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-5 md:items-center">
        <Reveal direction="right" className="md:col-span-2">
          <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 text-4xl font-bold text-white shadow-lg md:h-56 md:w-56">
            MAD
          </div>
        </Reveal>

        <Reveal direction="left" delay={100} className="md:col-span-3">
          <div className="space-y-4 text-slate-600 dark:text-slate-300">
            <p>
              Actuellement étudiant en{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                Licence Informatique à l&apos;Université de Bordeaux
              </strong>{' '}
              (Collège Sciences et Technologies), je m&apos;intéresse tout particulièrement à la
              sécurité informatique.
            </p>
            <p>
              Je suis aujourd&apos;hui à la recherche d&apos;une{' '}
              <strong className="font-semibold text-slate-900 dark:text-white">
                alternance en cybersécurité
              </strong>{' '}
              afin de fluidifier mon apprentissage : allier la théorie vue en cours à une pratique
              concrète en entreprise, et accélérer ma montée en compétences sur le terrain.
            </p>
            <p>
              Curieux et rigoureux, j&apos;aime comprendre le fonctionnement des systèmes en
              profondeur — de l&apos;architecture logicielle à la sécurité des réseaux — et je
              continue à renforcer mes compétences à travers des projets personnels et des
              certifications.
            </p>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-1">
            {INFO_ITEMS.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-slate-700 dark:text-slate-200">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

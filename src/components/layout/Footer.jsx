const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/alpha-omega-diallo' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: 'mailto:dmamadoualpha915@gmail.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:justify-between sm:px-6">
        <p>© {year} Mamadou Alpha Diallo. Tous droits réservés.</p>
        <ul className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

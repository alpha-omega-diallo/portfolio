import { useInView } from '../../hooks/useInView'

const DIRECTIONS = {
  up: 'translate-y-6',
  down: '-translate-y-6',
  left: 'translate-x-6',
  right: '-translate-x-6',
  none: '',
}

export default function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  className = '',
}) {
  const { ref, isInView } = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? 'translate-x-0 translate-y-0 opacity-100' : `opacity-0 ${DIRECTIONS[direction]}`
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}

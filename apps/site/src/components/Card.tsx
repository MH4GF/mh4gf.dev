import Datetime from './Datetime'

interface Frontmatter {
  title: string
  date: string
  description: string
}

export interface Props {
  href?: string
  frontmatter: Frontmatter
  secHeading?: boolean
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, date, description } = frontmatter
  return (
    <li className="my-6">
      <a
        href={href}
        className="text-skin-accent inline-block text-lg font-medium decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 className="text-lg font-medium decoration-dashed hover:underline">{title}</h2>
        ) : (
          <h3 className="text-lg font-medium decoration-dashed hover:underline">{title}</h3>
        )}
      </a>
      <Datetime datetime={date} />
      <p>{description}</p>
    </li>
  )
}

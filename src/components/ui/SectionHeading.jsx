import { classNames } from '../../utilities/classNames.js'

function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <div className={classNames('section-heading', className)}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h1 className="section-heading__title">{title}</h1>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}

export default SectionHeading

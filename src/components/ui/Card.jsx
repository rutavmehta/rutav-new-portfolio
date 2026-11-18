import { classNames } from '../../utilities/classNames.js'

function Card({ children, className = '', ...props }) {
  return <article className={classNames('card', className)} {...props}>{children}</article>
}

export default Card

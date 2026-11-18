import { Link } from 'react-router-dom'
import { classNames } from '../../utilities/classNames.js'

function Button({ children, className = '', to, variant = 'primary', ...props }) {
  const classes = classNames('button', `button--${variant}`, className)

  if (to) {
    return <Link className={classes} to={to} {...props}>{children}</Link>
  }

  return <button className={classes} {...props}>{children}</button>
}

export default Button

import { classNames } from '../../utilities/classNames.js'

function PageContainer({ children, className = '' }) {
  return <main className={classNames('page-container', className)}>{children}</main>
}

export default PageContainer

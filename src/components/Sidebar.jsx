import { BriefcaseBusiness, GitBranch, Menu, Moon, Sun, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import profilePhoto from '../assets/RRM_Updated_Pic.jpg'
import { navigationItems } from '../data/navigation.js'
import { useTheme } from '../hooks/useTheme.js'
import './Sidebar.css'

function Sidebar({
  isOpen,
  onClose,
  onToggle,
  menuButtonRef,
  firstNavigationLinkRef,
  navigationRef,
}) {
  const { theme, toggleTheme } = useTheme()
  const ThemeIcon = theme === 'light' ? Moon : Sun

  function handleNavigationKeyDown(event) {
    if (!isOpen) return

    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
      return
    }

    if (event.key !== 'Tab') return

    const focusableElements = navigationRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    )
    if (!focusableElements?.length) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  return (
    <>
      <button
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        className={`mobile-menu-toggle${isOpen ? ' mobile-menu-toggle--open' : ''}`}
        onClick={onToggle}
        ref={menuButtonRef}
        type="button"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {isOpen && <button aria-label="Dismiss navigation drawer" className="sidebar-backdrop" onClick={onClose} type="button" />}
      <aside
        aria-label="Primary navigation"
        aria-labelledby="profile-name"
        aria-modal={isOpen ? 'true' : undefined}
        className={`sidebar${isOpen ? ' sidebar--open' : ''}`}
        id="primary-navigation"
        onKeyDown={handleNavigationKeyDown}
        ref={navigationRef}
        role={isOpen ? 'dialog' : undefined}
      >
        <div className="profile">
          <img
            alt="Rutav Mehta – Profile Photograph"
            className="profile__photo"
            src={profilePhoto}
          />
          <div className="profile__identity">
            <p className="profile__name" id="profile-name">Rutav Ritesh Mehta</p>
            <p className="profile__subtitle">AI &amp; Data Science Student</p>
          </div>
        </div>

        <div className="sidebar__section-label">PORTFOLIO</div>
        <nav aria-label="Portfolio pages" className="sidebar__navigation">
          {navigationItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
              end={path === '/'}
              key={path}
              onClick={onClose}
              ref={path === '/' ? firstNavigationLinkRef : undefined}
              to={path}
            >
              <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar__footer">
          <button
            aria-pressed={theme === 'dark'}
            className="theme-toggle"
            onClick={toggleTheme}
            type="button"
          >
            <ThemeIcon aria-hidden="true" size={17} />
            <span className="theme-toggle__label">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
            <span aria-hidden="true" className={`theme-toggle__switch${theme === 'dark' ? ' theme-toggle__switch--on' : ''}`}>
              <span />
            </span>
          </button>
          <div className="sidebar__socials" aria-label="Social links">
            <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
              <BriefcaseBusiness aria-hidden="true" size={16} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/" rel="noreferrer" target="_blank">
              <GitBranch aria-hidden="true" size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

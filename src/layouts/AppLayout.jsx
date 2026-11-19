import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useLocation, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import './AppLayout.css'

const currentYear = new Date().getFullYear()

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const location = useLocation()
  const menuButtonRef = useRef(null)
  const navigationRef = useRef(null)
  const wasSidebarOpen = useRef(false)

  useEffect(() => {
    if (!isSidebarOpen && wasSidebarOpen.current) {
      menuButtonRef.current?.focus()
    }
    wasSidebarOpen.current = isSidebarOpen
  }, [isSidebarOpen])

  useEffect(() => {
    if (!isSidebarOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isSidebarOpen])

  useEffect(() => {
    if (!isSidebarOpen) return undefined

    function handleEscape(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isSidebarOpen])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 761px)')
    const closeOnDesktop = (event) => {
      if (event.matches) setIsSidebarOpen(false)
    }

    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  function toggleSidebar() {
    setIsSidebarOpen((open) => !open)
  }

  return (
    <div className="app-shell">
      <Sidebar
        isOpen={isSidebarOpen}
        menuButtonRef={menuButtonRef}
        navigationRef={navigationRef}
        onClose={() => setIsSidebarOpen(false)}
        onToggle={toggleSidebar}
      />
      <div
        aria-hidden={isSidebarOpen ? 'true' : undefined}
        className="app-shell__main"
        inert={isSidebarOpen}
      >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          key={location.pathname}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.24, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
        <footer className="site-footer">
          <span>© {currentYear} Rutav Ritesh Mehta</span>
        </footer>
      </div>
    </div>
  )
}

export default AppLayout

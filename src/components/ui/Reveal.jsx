import { motion, useReducedMotion } from 'framer-motion'

function Reveal({ as = 'div', children, className = '', delay = 0, ...props }) {
  const shouldReduceMotion = useReducedMotion()
  const MotionElement = as === 'section' ? motion.section : motion.div

  return (
    <MotionElement
      {...props}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.14 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </MotionElement>
  )
}

export default Reveal

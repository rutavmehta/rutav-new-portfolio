import {
  Award,
  BriefcaseBusiness,
  ContactRound,
  FolderKanban,
  GraduationCap,
  House,
  Medal,
  UserRound,
  Wrench,
} from 'lucide-react'

export const navigationItems = [
  { label: 'Home', path: '/', icon: House },
  { label: 'About', path: '/about', icon: UserRound },
  { label: 'Education', path: '/education', icon: GraduationCap },
  { label: 'Skills', path: '/skills', icon: Wrench },
  { label: 'Projects', path: '/projects', icon: FolderKanban },
  { label: 'Experience', path: '/experience', icon: BriefcaseBusiness },
  { label: 'Achievements', path: '/achievements', icon: Medal },
  { label: 'Certifications', path: '/certifications', icon: Award },
  { label: 'Contact', path: '/contact', icon: ContactRound },
]

export const pageContent = {
  about: {
    eyebrow: 'The person behind the work',
    title: 'About',
    description: 'A place for a thoughtful introduction, personal values, and the perspective that shapes this portfolio.',
    note: 'About details will live here.',
  },
  education: {
    eyebrow: 'Learning & foundations',
    title: 'Education',
    description: 'A clear overview of academic background, focused study, and continued learning.',
    note: 'Education details will live here.',
  },
  skills: {
    eyebrow: 'Tools & capabilities',
    title: 'Skills',
    description: 'A considered snapshot of the tools, techniques, and strengths brought to each project.',
    note: 'Skills will be added here.',
  },
  projects: {
    eyebrow: 'Selected work',
    title: 'Projects',
    description: 'A home for selected projects, with room for context, process, and the details behind each result.',
    note: 'Project case studies will live here.',
  },
  experience: {
    eyebrow: 'Work & collaboration',
    title: 'Experience',
    description: 'A concise timeline of roles, responsibilities, and meaningful work across teams.',
    note: 'Experience details will live here.',
  },
  achievements: {
    eyebrow: 'Recognition',
    title: 'Achievements',
    description: 'A space for milestones and recognition that add context to the work.',
    note: 'Achievements will live here.',
  },
  certifications: {
    eyebrow: 'Professional development',
    title: 'Certifications',
    description: 'A record of relevant credentials and structured learning.',
    note: 'Certifications will live here.',
  },
  contact: {
    eyebrow: 'Start a conversation',
    title: 'Contact',
    description: 'A simple place to share contact details and make it easy to get in touch.',
    note: 'Contact details will live here.',
  },
}

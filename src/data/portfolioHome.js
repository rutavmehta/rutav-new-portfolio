import {
  BatteryCharging,
  BrainCircuit,
  BriefcaseBusiness,
  ClipboardList,
  Code2,
  Database,
  FileCode2,
  KeyRound,
  Lightbulb,
  Presentation,
  Siren,
  UsersRound,
} from 'lucide-react'

export const professionalInterests = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Exploring applied machine learning for prediction, decision support, and intelligent tools.',
    icon: BrainCircuit,
  },
  {
    title: 'Software Development',
    description: 'Building clear, maintainable software around practical problems and thoughtful user experiences.',
    icon: Code2,
  },
  {
    title: 'Data Engineering',
    description: 'Connecting data, services, and models through well-structured systems and reliable workflows.',
    icon: Database,
  },
  {
    title: 'Problem Solving',
    description: 'Breaking complex requirements into focused steps and iterating toward useful solutions.',
    icon: Lightbulb,
  },
]

export const selectedProjects = [
  {
    title: 'Nexcell EV Battery SOH Predictor',
    category: 'AI / MACHINE LEARNING',
    description: 'An AI/ML-powered system that predicts Electric Vehicle battery State of Health using battery parameters, with an XGBoost model served through FastAPI and AWS EC2.',
    icon: BatteryCharging,
    tone: 'battery',
    technologies: ['XGBoost', 'FastAPI', 'AWS EC2'],
    objectives: [
      'Predict battery State of Health from battery parameters.',
      'Serve XGBoost predictions through FastAPI on AWS EC2.',
    ],
  },
  {
    title: 'English → SQL Converter',
    category: 'NATURAL LANGUAGE',
    description: 'A natural-language-to-SQL application powered by Gemini API that converts plain-English questions into executable SQL queries.',
    icon: FileCode2,
    tone: 'query',
    technologies: ['Gemini API', 'Natural language', 'SQL'],
    objectives: [
      'Convert plain-English questions into SQL queries.',
      'Use Gemini API to support the natural-language conversion.',
    ],
  },
  {
    title: 'Emergency Response Simulator',
    category: 'SIMULATION',
    description: 'A desktop simulation application for urban emergency dispatch, vehicle routing and priority-based incident management.',
    icon: Siren,
    tone: 'response',
    technologies: ['Dispatch', 'Vehicle routing', 'Incident priority'],
    objectives: [
      'Simulate urban emergency dispatch and vehicle routing.',
      'Represent priority-based incident management.',
    ],
  },
  {
    title: 'Digital Subscriptions & Licence Vault',
    category: 'DIGITAL ORGANIZATION',
    description: 'A centralized web application for managing digital subscriptions, software licences and shared family-plan seats.',
    icon: KeyRound,
    tone: 'vault',
    technologies: ['Subscriptions', 'Software licences', 'Shared seats'],
    objectives: [
      'Centralize digital subscription and software licence records.',
      'Manage shared seats across family plans.',
    ],
  },
]

export const recentActivity = [
  {
    title: 'INCUBEX 2026',
    organization: 'October 2026',
    role: 'Documentation & Finance Head',
    description: 'Event Documentation & Report, Finance & Inventory, Registration Desk Lead and Venue Team.',
    icon: ClipboardList,
  },
  {
    title: 'Ignisia 24-Hour National-Level AI Hackathon',
    organization: 'April 2026',
    role: 'Committee Member',
    description: '',
    icon: UsersRound,
  },
  {
    title: 'Innovision 2026',
    organization: 'February 2026',
    role: 'Project Exhibition',
    description: '',
    icon: Presentation,
  },
  {
    title: 'Junior Engineer Internship',
    organization: 'Ybranium Technologies · June–August 2025',
    role: '',
    description: '',
    icon: BriefcaseBusiness,
  },
]

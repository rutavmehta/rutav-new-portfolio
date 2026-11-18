import { useState } from 'react'
import {
  Activity,
  BatteryCharging,
  BrainCircuit,
  CalendarDays,
  ChevronDown,
  Code2,
  KeyRound,
  LockKeyhole,
  Satellite,
  Ship,
  Siren,
  ShieldCheck,
} from 'lucide-react'
import Card from '../components/ui/Card.jsx'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import './Projects.css'

const projects = [
  {
    name: 'English → SQL Converter',
    icon: Code2,
    description: 'A natural-language-to-SQL application powered by the Gemini API that converts plain-English requests into executable SQL queries.',
    objectives: [
      'Convert natural-language requests into executable SQL queries.',
      'Integrate the Gemini API for query generation.',
      'Simplify interaction with relational databases.',
      'Bridge the gap between human language and database querying.',
    ],
  },
  {
    name: 'Attendance Tracker',
    icon: CalendarDays,
    description: 'A Streamlit-based tool for daily and weekly attendance tracking and visualisation, using NumPy, Pandas, and Scikit-learn for backend analytics.',
    objectives: [
      'Simplify attendance recording and management.',
      'Maintain organised attendance records.',
      'Visualise attendance patterns.',
      'Identify useful trends through data analysis.',
    ],
  },
  {
    name: 'Secure Password Manager',
    icon: LockKeyhole,
    description: 'A multi-user password management application featuring encrypted credential storage, password generation, strength validation, search, and categories.',
    objectives: [
      'Store user credentials securely.',
      'Generate strong passwords and evaluate password strength.',
      'Organise credentials into categories.',
      'Support secure multi-user access.',
    ],
  },
  {
    name: 'IoT Device Monitoring & Alert System',
    icon: Activity,
    description: 'An IoT monitoring solution developed during my two-month internship at Ybranium Technologies, focused on real-time device monitoring, automated alerts, and data logging for industrial applications.',
    objectives: [
      'Monitor connected devices in real time.',
      'Detect abnormal device conditions.',
      'Trigger alerts based on defined thresholds.',
      'Maintain device data logs.',
    ],
  },
  {
    name: 'Nexcell EV Battery SOH Predictor',
    icon: BatteryCharging,
    description: 'A machine-learning application that predicts electric vehicle battery State of Health (SOH) from current, voltage, temperature, and impedance data, using XGBoost, FastAPI, and AWS EC2.',
    objectives: [
      'Predict electric vehicle battery State of Health.',
      'Apply machine learning to battery-related data.',
      'Develop an XGBoost-based prediction model.',
      'Serve predictions through FastAPI and AWS EC2.',
    ],
  },
  {
    name: 'Mental Health Monitoring System',
    icon: BrainCircuit,
    description: 'A non-diagnostic machine-learning and deep-learning system explored during the XFair Hackathon 2025 Ideathon, using CNN-based behavioural pattern analysis related to mental well-being.',
    objectives: [
      'Analyse behavioural data for relevant patterns.',
      'Explore machine learning and CNN-based approaches.',
      'Flag patterns that may require further attention.',
      'Explore technology-assisted mental health awareness.',
    ],
  },
  {
    name: 'AI Smart Helmet for Hazard Detection',
    icon: ShieldCheck,
    description: 'A computer-vision-based smart helmet concept for real-time workplace hazard detection, explored at HackMIT 2025 Ideathon, where I also volunteered.',
    objectives: [
      'Explore real-time workplace hazard detection.',
      'Identify potentially unsafe situations.',
      'Apply computer vision to safety monitoring.',
      'Explore AI-assisted industrial worker safety.',
    ],
  },
  {
    name: 'Krishisat AI',
    icon: Satellite,
    description: 'A cloud-native satellite analytics platform for crop mapping and eight-day field water-deficit forecasts to support precision irrigation.',
    objectives: [
      'Map crop species using satellite-based analysis.',
      'Forecast field water deficits over an eight-day period.',
      'Support precision irrigation planning.',
      'Improve agricultural water management.',
    ],
  },
  {
    name: 'ShipWise',
    icon: Ship,
    description: 'An AI-based maritime decision-support system for bulk coking coal vessel chartering, designed to help avoid costly port demurrage.',
    objectives: [
      'Optimise bulk vessel chartering decisions.',
      'Analyse relevant maritime and port information.',
      'Support the prediction and reduction of demurrage.',
      'Improve maritime logistics decision-making.',
    ],
  },
  {
    name: 'Emergency Response Simulator',
    icon: Siren,
    description: 'A desktop-based simulation system for urban emergency dispatch, vehicle routing, and priority-based incident management.',
    objectives: [
      'Simulate emergency dispatch operations.',
      'Manage incidents based on priority.',
      'Support efficient vehicle routing and dispatch.',
      'Visualise emergency response scenarios.',
    ],
  },
  {
    name: 'Digital Subscriptions & Licence Vault',
    icon: KeyRound,
    description: 'A centralised web application for managing digital subscriptions, software licence keys, renewal information, and shared family-plan seats.',
    objectives: [
      'Centralise subscription and licence management.',
      'Track renewal dates and expenses.',
      'Organise software licence keys and shared seats.',
      'Provide a unified management dashboard.',
    ],
  },
]

function ProjectCard({ project, index }) {
  const [objectivesOpen, setObjectivesOpen] = useState(false)
  const Icon = project.icon
  const projectNumber = String(index + 1).padStart(2, '0')
  const titleId = `project-title-${projectNumber}`
  const objectivesId = `project-objectives-${projectNumber}`
  const entryClass = index === 0 ? 'project-entry project-entry--featured' : 'project-entry'
  const cardClass = index === 0 ? 'portfolio-project portfolio-project--featured' : 'portfolio-project'

  return (
    <Reveal className={entryClass} delay={index * 0.035}>
      <Card aria-labelledby={titleId} className={cardClass}>
        <div className="portfolio-project__main">
          <div className="portfolio-project__top">
            <span className="portfolio-project__icon"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /></span>
            <span aria-hidden="true" className="portfolio-project__number">{projectNumber}</span>
          </div>
          <h2 className="portfolio-project__title" id={titleId}>{project.name}</h2>
          <p className="portfolio-project__description">{project.description}</p>
        </div>
        <div className="portfolio-project__objectives">
          <button
            aria-controls={objectivesId}
            aria-label={`${objectivesOpen ? 'Hide' : 'View'} objectives for ${project.name}`}
            aria-expanded={objectivesOpen}
            className="portfolio-project__toggle"
            onClick={() => setObjectivesOpen((open) => !open)}
            type="button"
          >
            <span>{objectivesOpen ? 'Hide Objectives' : 'View Objectives'}</span>
            <ChevronDown aria-hidden="true" size={16} />
          </button>
          <ul
            aria-label={`${project.name} objectives`}
            className="portfolio-project__list"
            hidden={!objectivesOpen}
            id={objectivesId}
          >
            {project.objectives.map((objective) => <li key={objective}>{objective}</li>)}
          </ul>
        </div>
      </Card>
    </Reveal>
  )
}

function Projects() {
  return (
    <PageContainer className="projects-page">
      <Reveal
        aria-labelledby="projects-title"
        as="section"
        className="projects-intro"
      >
        <div className="projects-intro__copy">
          <p className="projects-eyebrow">SELECTED WORK</p>
          <h1 className="projects-intro__title" id="projects-title">Selected Projects</h1>
          <p className="projects-intro__description">
            Across academic, personal, and collaborative work, I explore how software and AI can address practical problems.
          </p>
        </div>
        <aside aria-label="Themes across the project collection" className="projects-intro__themes">
          <p>AREAS OF EXPLORATION</p>
          <span>Software development</span>
          <span>Artificial intelligence</span>
          <span>Practical problem-solving</span>
        </aside>
      </Reveal>

      <section aria-label="Project portfolio" className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.name} project={project} />
        ))}
      </section>
    </PageContainer>
  )
}

export default Projects

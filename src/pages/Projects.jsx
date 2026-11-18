import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Card from '../components/ui/Card.jsx'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import './Projects.css'

const projects = [
  {
    name: 'English → SQL Converter',
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
    description: 'A Streamlit-based attendance management system for recording, viewing, and visualising daily and weekly attendance information.',
    objectives: [
      'Simplify attendance recording and management.',
      'Maintain organised attendance records.',
      'Visualise attendance patterns.',
      'Identify useful trends through data analysis.',
    ],
  },
  {
    name: 'Secure Password Manager',
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
    description: 'An AI/ML-based application that predicts the State of Health (SOH) of electric vehicle batteries using parameters such as current, voltage, temperature, and impedance.',
    objectives: [
      'Predict electric vehicle battery State of Health.',
      'Apply machine learning to battery-related data.',
      'Develop an XGBoost-based prediction model.',
      'Serve predictions through FastAPI and AWS EC2.',
    ],
  },
  {
    name: 'Mental Health Monitoring System',
    description: 'A machine learning and deep learning-based system explored during the X-Fair Hackathon 2025 Ideathon to analyse behavioural data and identify patterns potentially associated with mental well-being.',
    objectives: [
      'Analyse behavioural data for relevant patterns.',
      'Explore machine learning and CNN-based approaches.',
      'Flag patterns that may require further attention.',
      'Explore technology-assisted mental health awareness.',
    ],
  },
  {
    name: 'AI Smart Helmet for Hazard Detection',
    description: 'An AI-based smart helmet concept explored during HackMIT 2025, focused on real-time workplace hazard detection using computer vision.',
    objectives: [
      'Explore real-time workplace hazard detection.',
      'Identify potentially unsafe situations.',
      'Apply computer vision to safety monitoring.',
      'Explore AI-assisted industrial worker safety.',
    ],
  },
  {
    name: 'Krishisat AI',
    description: 'A cloud-native satellite analytics platform designed to map crop species and forecast eight-day field water deficits to support precision canal irrigation.',
    objectives: [
      'Map crop species using satellite-based analysis.',
      'Forecast field water deficits over an eight-day period.',
      'Support precision irrigation planning.',
      'Improve agricultural water management.',
    ],
  },
  {
    name: 'ShipWise',
    description: 'An AI-powered maritime decision-support platform designed to optimise bulk coking coal vessel chartering and help prevent costly port demurrage.',
    objectives: [
      'Optimise bulk vessel chartering decisions.',
      'Analyse relevant maritime and port information.',
      'Support the prediction and reduction of demurrage.',
      'Improve maritime logistics decision-making.',
    ],
  },
  {
    name: 'Emergency Response Simulator',
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
  const projectNumber = String(index + 1).padStart(2, '0')
  const titleId = `project-title-${projectNumber}`
  const objectivesId = `project-objectives-${projectNumber}`

  return (
    <Reveal className="project-entry" delay={index * 0.035}>
      <Card aria-labelledby={titleId} className="portfolio-project">
        <span aria-hidden="true" className="portfolio-project__number">{projectNumber}</span>
        <h2 className="portfolio-project__title" id={titleId}>{project.name}</h2>
        <p className="portfolio-project__description">{project.description}</p>
        <div className="portfolio-project__objectives">
          <button
            aria-controls={objectivesId}
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
        <p className="projects-eyebrow">SELECTED WORK</p>
        <h1 className="projects-intro__title" id="projects-title">Selected Projects</h1>
        <p className="projects-intro__description">
          A collection of academic, personal, and collaborative projects through which I explore software development, artificial intelligence, machine learning, and practical problem-solving.
        </p>
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

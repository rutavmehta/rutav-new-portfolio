import { BookOpen, BrainCircuit, Code2, Database, Globe, Layers3, Wrench } from 'lucide-react'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import './Skills.css'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C', 'C++', 'Python', 'Java'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers3,
    skills: ['FastAPI', 'Flask', 'NumPy', 'Pandas', 'Scikit-learn', 'Streamlit'],
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    skills: ['Visual Studio Code', 'GitHub', 'Google Colab', 'Jupyter Notebook'],
  },
  {
    title: 'Core Concepts',
    icon: BrainCircuit,
    skills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'DBMS',
      'Operating Systems',
      'Machine Learning',
      'Artificial Intelligence',
      'Computer Networks',
    ],
  },
]

function Skills() {
  return (
    <PageContainer className="skills-page">
      <Reveal
        aria-labelledby="skills-title"
        as="section"
        className="skills-intro"
      >
        <div className="skills-intro__copy">
          <p className="skills-eyebrow">A GROWING TOOLKIT</p>
          <h1 className="skills-intro__title" id="skills-title">Technical Skills</h1>
          <p className="skills-intro__description">
            I am continuously developing my technical knowledge through coursework, projects, and practical experience.
          </p>
        </div>
        <div aria-label="Current learning stage: Developing Proficiency" className="skills-stage">
          <span className="skills-stage__icon"><BookOpen aria-hidden="true" size={18} strokeWidth={1.7} /></span>
          <div>
            <p>Current learning stage</p>
            <span>Developing Proficiency</span>
          </div>
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="skill-areas-title"
        as="section"
        className="skills-section"
      >
        <div className="skills-section__heading">
          <div>
            <p className="skills-eyebrow">LANGUAGES, TOOLS &amp; CONCEPTS</p>
            <h2 className="skills-section__title" id="skill-areas-title">Areas of practice</h2>
          </div>
          <p className="skills-section__aside">
            A considered collection of technologies and fundamentals I continue to build on.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map(({ title, icon: Icon, skills }, index) => (
            <Reveal
              className="skills-card-reveal"
              delay={index * 0.045}
              key={title}
            >
              <article className="skills-card">
                <div className="skills-card__heading">
                  <span className="skills-card__icon"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /></span>
                  <div className="skills-card__title">
                    <span aria-hidden="true" className="skills-card__index">0{index + 1}</span>
                    <h3>{title}</h3>
                  </div>
                </div>
                <ul aria-label={`${title} skills`} className="skills-card__list">
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </PageContainer>
  )
}

export default Skills

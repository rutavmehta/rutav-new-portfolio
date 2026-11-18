import {
  BrainCircuit,
  CalendarDays,
  Code2,
  GraduationCap,
  MapPin,
  Network,
  School,
} from 'lucide-react'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import './Education.css'

const stages = [
  {
    label: 'STAGE 1',
    name: 'Diploma',
    degree: 'Diploma in Computer Science and Engineering (Artificial Intelligence and Data Science)',
    duration: '2023–2026',
    resultLabel: 'Final CGPA',
    result: '7.90',
  },
  {
    label: 'STAGE 2',
    name: 'B.Tech',
    degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence and Data Science)',
    duration: '2023–2029',
    resultLabel: 'Current CGPA',
    result: '7.90',
    status: 'Second Year, Third Semester',
  },
]

const highlights = [
  {
    label: 'Programme',
    value: 'Integrated six-year pathway',
    icon: Network,
  },
  {
    label: 'Discipline',
    value: 'Computer Science and Engineering',
    icon: Code2,
  },
  {
    label: 'Specialization',
    value: 'Artificial Intelligence and Data Science',
    icon: BrainCircuit,
  },
  {
    label: 'Current CGPA',
    value: '7.90',
    icon: GraduationCap,
  },
]

function Education() {
  return (
    <PageContainer className="education-page">
      <Reveal
        aria-labelledby="education-title"
        as="section"
        className="education-intro"
      >
        <div className="education-intro__copy">
          <p className="education-eyebrow">EDUCATION / 01</p>
          <h1 className="education-intro__title" id="education-title">My Academic Journey</h1>
          <p className="education-intro__description">
            An integrated academic journey focused on building a strong foundation in computer science, artificial intelligence and data science.
          </p>
        </div>
        <div aria-hidden="true" className="education-intro__mark">
          <GraduationCap size={78} strokeWidth={0.85} />
          <span>2023 — 2029</span>
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="pathway-title"
        as="section"
        className="education-section education-pathway"
      >
        <div className="education-section__heading">
          <div>
            <p className="education-eyebrow">ONE CONNECTED PROGRAMME</p>
            <h2 className="education-section__title" id="pathway-title">Integrated academic pathway</h2>
          </div>
          <p className="education-section__aside">
            Two academic stages within one six-year Diploma + B.Tech programme.
          </p>
        </div>

        <div className="education-programme">
          <div className="education-programme__header">
            <div className="education-programme__institution">
              <span className="education-programme__icon">
                <School aria-hidden="true" size={18} strokeWidth={1.7} />
              </span>
              <div>
                <p>MIT WORLD PEACE UNIVERSITY</p>
                <span>Pune</span>
              </div>
            </div>
            <div aria-label="Integrated programme from 2023 to 2029" className="education-programme__span">
              <span>2023</span>
              <span aria-hidden="true" className="education-programme__line" />
              <span>EXPECTED COMPLETION <strong>2029</strong></span>
            </div>
          </div>

          <div className="education-stages">
            {stages.map(({ label, name, degree, duration, resultLabel, result, status }, index) => (
              <Reveal
                className={`education-stage education-stage--${index + 1}`}
                delay={index * 0.08}
                key={name}
              >
                <div className="education-stage__top">
                  <span className="education-stage__label">{label}</span>
                  <span aria-hidden="true" className="education-stage__number">0{index + 1}</span>
                </div>
                <h3>{name}</h3>
                <p className="education-stage__degree">{degree}</p>
                <div className="education-stage__meta">
                  <span><CalendarDays aria-hidden="true" size={14} /> {duration}</span>
                  <span><MapPin aria-hidden="true" size={14} /> MIT World Peace University, Pune</span>
                </div>
                {status && (
                  <div className="education-stage__status">
                    <span>Current academic status</span>
                    <strong>{status}</strong>
                  </div>
                )}
                <div className="education-stage__result">
                  <span>{resultLabel}</span>
                  <strong>{result}</strong>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="education-programme__note">
            Both stages are part of the same integrated programme, beginning in 2023 and expected to conclude in 2029.
          </p>
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="school-title"
        as="section"
        className="education-section education-school"
      >
        <div className="education-section__heading">
          <div>
            <p className="education-eyebrow">BEFORE UNIVERSITY</p>
            <h2 className="education-section__title" id="school-title">School education</h2>
          </div>
        </div>

        <article className="school-record">
          <div className="school-record__identity">
            <span className="school-record__icon"><School aria-hidden="true" size={20} strokeWidth={1.6} /></span>
            <div>
              <p className="school-record__eyebrow">NAVRACHANA INTERNATIONAL SCHOOL</p>
              <h3>Vadodara</h3>
            </div>
          </div>
          <div className="school-record__details">
            <div><span>Board</span><strong>CBSE</strong></div>
            <div><span>Qualification</span><strong>Class 10</strong></div>
            <div><span>Passing year</span><strong>2023</strong></div>
            <div className="school-record__result"><span>Result</span><strong>77%</strong></div>
          </div>
        </article>
      </Reveal>

      <Reveal
        aria-labelledby="highlights-title"
        as="section"
        className="education-section education-highlights"
      >
        <div className="education-section__heading">
          <div>
            <p className="education-eyebrow">THE ACADEMIC SNAPSHOT</p>
            <h2 className="education-section__title" id="highlights-title">Academic highlights</h2>
          </div>
        </div>

        <div className="education-highlights__list">
          {highlights.map(({ label, value, icon: Icon }, index) => (
            <article className="education-highlight" key={label}>
              <span className="education-highlight__index">0{index + 1}</span>
              <span className="education-highlight__icon"><Icon aria-hidden="true" size={18} strokeWidth={1.7} /></span>
              <div>
                <p>{label}</p>
                <h3>{value}</h3>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </PageContainer>
  )
}

export default Education

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
    label: 'DIPLOMA',
    name: 'Diploma',
    degree: 'Diploma in Computer Science and Engineering (Artificial Intelligence and Data Science)',
    duration: '2023–2026',
    resultLabel: 'Final CGPA',
    result: '7.90',
  },
  {
    label: 'B.TECH',
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
          <p className="education-eyebrow">EDUCATION</p>
          <h1 className="education-intro__title" id="education-title">
            My Academic Journey
          </h1>
          <p className="education-intro__description">
            An integrated Diploma + B.Tech pathway at MIT World Peace University,
            bringing six years of computer science, AI and data science study
            together from 2023 to 2029.
          </p>
        </div>
        <div aria-hidden="true" className="education-intro__mark">
          <GraduationCap size={43} strokeWidth={1.35} />
          <span>2023 <i /> 2029</span>
        </div>
      </Reveal>

      <section aria-label="Academic record" className="education-bento">
        <Reveal
          aria-labelledby="pathway-title"
          as="article"
          className="education-card education-journey"
        >
          <div className="education-card__heading">
            <div>
              <p className="education-eyebrow">ONE INTEGRATED SIX-YEAR PATHWAY</p>
              <h2 id="pathway-title">A connected academic journey</h2>
            </div>
            <span aria-hidden="true" className="education-card__index">01</span>
          </div>

          <div className="education-journey__institution">
            <span className="education-icon">
              <School aria-hidden="true" size={18} strokeWidth={1.6} />
            </span>
            <div>
              <p>MIT World Peace University</p>
              <span>Pune</span>
            </div>
            <span className="education-journey__programme">Diploma + B.Tech</span>
          </div>

          <ol aria-label="Integrated programme milestones" className="education-timeline">
            <li>
              <span aria-hidden="true" className="education-timeline__dot" />
              <strong>2023</strong>
              <span>Pathway begins</span>
            </li>
            <li>
              <span aria-hidden="true" className="education-timeline__dot" />
              <strong>2026</strong>
              <span>Diploma concludes</span>
            </li>
            <li>
              <span aria-hidden="true" className="education-timeline__dot" />
              <strong>2029</strong>
              <span>Expected B.Tech graduation</span>
            </li>
          </ol>

          <div className="education-stages">
            {stages.map(({ label, name, degree, duration, resultLabel, result, status }, index) => (
              <section
                aria-label={`${name} stage`}
                className={`education-stage education-stage--${index + 1}`}
                key={name}
              >
                <div className="education-stage__top">
                  <span>{label}</span>
                  <span aria-hidden="true">0{index + 1}</span>
                </div>
                <h3>{name}</h3>
                <p className="education-stage__degree">{degree}</p>
                <div className="education-stage__meta">
                  <span><CalendarDays aria-hidden="true" size={14} />{duration}</span>
                  <span><MapPin aria-hidden="true" size={14} />MIT World Peace University, Pune</span>
                </div>
                {status && (
                  <p className="education-stage__status">
                    <span>Current academic status</span>
                    <strong>{status}</strong>
                  </p>
                )}
                <div className="education-stage__result">
                  <span>{resultLabel}</span>
                  <strong>{result}</strong>
                </div>
              </section>
            ))}
          </div>
        </Reveal>

        <Reveal
          aria-labelledby="performance-title"
          as="article"
          className="education-card education-performance"
          delay={0.06}
        >
          <div className="education-card__heading">
            <div>
              <p className="education-eyebrow">ACADEMIC RECORD</p>
              <h2 id="performance-title">Academic performance</h2>
            </div>
            <span aria-hidden="true" className="education-card__index">02</span>
          </div>

          <div className="education-performance__items">
            <div className="education-performance__item">
              <span>Diploma · Final CGPA</span>
              <strong>7.90</strong>
            </div>
            <div className="education-performance__item">
              <span>B.Tech · Current CGPA</span>
              <strong>7.90</strong>
            </div>
            <div className="education-performance__programme">
              <span>Integrated programme</span>
              <strong>2023–2029</strong>
            </div>
          </div>
        </Reveal>

        <Reveal
          aria-labelledby="school-title"
          as="article"
          className="education-card education-school"
          delay={0.12}
        >
          <div className="education-card__heading">
            <div>
              <p className="education-eyebrow">BEFORE UNIVERSITY</p>
              <h2 id="school-title">School education</h2>
            </div>
            <span aria-hidden="true" className="education-card__index">03</span>
          </div>

          <div className="education-school__identity">
            <span className="education-icon">
              <School aria-hidden="true" size={18} strokeWidth={1.6} />
            </span>
            <div>
              <h3>Navrachana International School</h3>
              <p>Vadodara <span aria-hidden="true">·</span> CBSE</p>
            </div>
          </div>
          <div className="education-school__result">
            <div>
              <span>Class 10</span>
              <strong>Completed in 2023</strong>
            </div>
            <strong className="education-school__score">77%</strong>
          </div>
        </Reveal>

        <Reveal
          aria-labelledby="highlights-title"
          as="article"
          className="education-card education-highlights"
          delay={0.18}
        >
          <div className="education-card__heading">
            <div>
              <p className="education-eyebrow">THE ACADEMIC SNAPSHOT</p>
              <h2 id="highlights-title">Academic focus</h2>
            </div>
            <span aria-hidden="true" className="education-card__index">04</span>
          </div>

          <div className="education-highlights__list">
            {highlights.map(({ label, value, icon: Icon }) => (
              <div className="education-highlight" key={label}>
                <span className="education-highlight__icon">
                  <Icon aria-hidden="true" size={17} strokeWidth={1.6} />
                </span>
                <div>
                  <p>{label}</p>
                  <h3>{value}</h3>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </PageContainer>
  )
}

export default Education

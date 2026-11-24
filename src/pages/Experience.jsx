import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  MapPin,
  Music2,
  UsersRound,
} from 'lucide-react'
import Card from '../components/ui/Card.jsx'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import './Experience.css'

const leadershipRoles = ['Treasurer', 'Documentation Department Head']

const eventResponsibilities = [
  'Event Documentation & Report',
  'Finance & Inventory',
  'Registration Desk Lead',
  'Venue Team',
]

const tablaDetails = [
  'Practising Tabla since 2014.',
  'Started learning at Navrachana International School, Vadodara.',
  'More than 10 years of consistent practice.',
]

function Experience() {
  return (
    <PageContainer className="experience-page">
      <Reveal
        aria-labelledby="experience-title"
        as="section"
        className="experience-intro"
      >
        <div className="experience-intro__copy">
          <p className="experience-eyebrow">PROFESSIONAL &amp; PERSONAL GROWTH</p>
          <h1 className="experience-intro__title" id="experience-title">Experience &amp; Activities</h1>
          <p className="experience-intro__description">
            A record of engineering-team collaboration, campus responsibilities, and a long-standing personal practice.
          </p>
        </div>
        <aside aria-label="Experience areas" className="experience-intro__areas">
          <p>THREE THREADS</p>
          <span><strong>01</strong> Industry experience</span>
          <span><strong>02</strong> Campus leadership</span>
          <span><strong>03</strong> Personal practice</span>
        </aside>
      </Reveal>

      <Reveal
        aria-labelledby="professional-title"
        as="section"
        className="experience-section experience-professional"
      >
        <div className="experience-section__heading">
          <div>
            <p className="experience-eyebrow">INDUSTRY EXPOSURE</p>
            <h2 className="experience-section__title" id="professional-title">Professional experience</h2>
          </div>
        </div>

        <div className="experience-linked">
          <Reveal className="experience-linked__internship" delay={0.04}>
            <Card className="internship-card">
              <div className="internship-card__top">
                <span className="experience-icon"><BriefcaseBusiness aria-hidden="true" size={19} strokeWidth={1.7} /></span>
                <span className="experience-card__index">PROFESSIONAL EXPERIENCE</span>
              </div>
              <h3>Junior Engineer</h3>
              <p className="internship-card__organisation">Ybranium Technologies</p>
              <div className="internship-card__meta">
                <span><MapPin aria-hidden="true" size={14} /> Anand, Gujarat</span>
                <span><CalendarDays aria-hidden="true" size={14} /> June 2025 – August 2025</span>
                <span><Clock3 aria-hidden="true" size={14} /> 2 months</span>
              </div>
              <p className="internship-card__description">
                Worked collaboratively with the engineering team on projects.
              </p>
            </Card>
          </Reveal>

          <div aria-hidden="true" className="experience-linked__connector">
            <span />
            <ChevronRight size={17} strokeWidth={1.8} />
          </div>

          <Reveal className="experience-linked__project" delay={0.1}>
            <Card className="related-project-card">
              <div className="related-project-card__top">
                <span className="experience-icon experience-icon--soft"><Building2 aria-hidden="true" size={19} strokeWidth={1.7} /></span>
                <span className="experience-card__index">ASSOCIATED PROJECT</span>
              </div>
              <h3>IoT Device Monitoring &amp; Alert System</h3>
              <p>
                An IoT-based solution focused on real-time device monitoring, automated alerts, and data logging for industrial applications.
              </p>
            </Card>
          </Reveal>
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="involvement-title"
        as="section"
        className="experience-section experience-involvement"
      >
        <div className="experience-section__heading">
          <div>
            <p className="experience-eyebrow">CAMPUS &amp; COMMUNITY</p>
            <h2 className="experience-section__title" id="involvement-title">Leadership &amp; university involvement</h2>
          </div>
        </div>

        <Reveal className="leadership-entry" delay={0.04}>
          <Card className="leadership-card">
            <div className="leadership-card__identity">
              <span className="experience-icon"><UsersRound aria-hidden="true" size={20} strokeWidth={1.7} /></span>
              <div>
                <p className="experience-card__index">UNIVERSITY INVOLVEMENT</p>
                <h3>Ignisia <span>| AI &amp; Innovation Club</span></h3>
                <p className="leadership-card__institution">MIT World Peace University, Pune</p>
              </div>
            </div>
            <div className="leadership-card__content">
              <p className="leadership-card__roles-label">LEADERSHIP POSITIONS</p>
              <div aria-label="Leadership roles" className="leadership-role-list">
                {leadershipRoles.map((role, index) => (
                  <div className="leadership-role" key={role}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <h4>{role}</h4>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </Reveal>

      <Reveal
        aria-labelledby="event-title"
        as="section"
        className="experience-section experience-event"
      >
        <div className="experience-section__heading">
          <div>
            <p className="experience-eyebrow">EVENT INVOLVEMENT</p>
            <h2 className="experience-section__title" id="event-title">Event experience</h2>
          </div>
        </div>

        <Reveal className="event-entry" delay={0.04}>
          <Card className="event-card">
            <div className="event-card__main">
              <div className="event-card__top">
                <span className="experience-icon"><FileText aria-hidden="true" size={19} strokeWidth={1.7} /></span>
                <span className="experience-card__index">EVENT EXPERIENCE</span>
              </div>
              <h3>INCUBEX 2026</h3>
              <div className="event-card__meta">
                <span><Building2 aria-hidden="true" size={14} /> Organised under Ignisia Club, MIT-WPU</span>
                <span><CalendarDays aria-hidden="true" size={14} /> 21 October 2026</span>
              </div>
              <div className="event-card__role">
                <span>ROLE</span>
                <strong>Documentation &amp; Finance Head</strong>
              </div>
            </div>
            <div className="event-card__responsibilities">
              <p className="experience-card__index">EVENT RESPONSIBILITIES</p>
              <ul aria-label="INCUBEX 2026 responsibilities" className="event-card__responsibility-list">
                {eventResponsibilities.map((responsibility, index) => (
                  <li key={responsibility}>
                    <span aria-hidden="true">0{index + 1}</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </Reveal>

      <Reveal
        aria-labelledby="beyond-title"
        as="section"
        className="experience-section experience-beyond"
      >
        <div className="experience-section__heading">
          <div>
            <p className="experience-eyebrow">BEYOND TECHNOLOGY</p>
            <h2 className="experience-section__title" id="beyond-title">A practice beyond academics</h2>
          </div>
        </div>

        <Reveal className="tabla-entry" delay={0.04}>
          <Card className="tabla-card">
            <div className="tabla-card__year" aria-hidden="true">
              <Music2 size={26} strokeWidth={1.5} />
              <span>2014</span>
            </div>
            <div className="tabla-card__content">
              <p className="experience-card__index">MUSIC &amp; TABLA</p>
              <h3>Tabla — A Journey Since 2014</h3>
              <p className="tabla-card__description">
                Alongside technology, I have continued practising Tabla since 2014. This long-term interest represents an important part of my journey beyond academics.
              </p>
              <ul aria-label="Tabla journey details" className="tabla-card__details">
                {tablaDetails.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <p className="tabla-card__qualities">
                Sustained practice has helped develop discipline, consistency, and dedication.
              </p>
            </div>
          </Card>
        </Reveal>
      </Reveal>
    </PageContainer>
  )
}

export default Experience

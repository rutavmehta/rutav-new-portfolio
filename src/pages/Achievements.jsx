import {
  Award,
  Building2,
  CalendarDays,
  FileCheck2,
  GraduationCap,
  MapPin,
  Presentation,
  UsersRound,
} from 'lucide-react'
import Card from '../components/ui/Card.jsx'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import './Achievements.css'

const achievements = [
  {
    title: 'IGNISIA 24-HOUR NATIONAL-LEVEL AI HACKATHON',
    icon: Award,
    featured: true,
    institution: 'MIT World Peace University, Pune',
    role: 'Committee Member',
    date: 'April 2026',
    recognition: 'Certificate of Appreciation',
    description: 'Contributed as a committee member to the organisation of the 24-hour national-level AI hackathon conducted under Ignisia at MIT-WPU.',
  },
  {
    title: 'YBRANIUM TECHNOLOGIES — INTERNSHIP',
    icon: Building2,
    organisation: 'Ybranium Technologies',
    location: 'Anand, Gujarat',
    role: 'Junior Engineer',
    date: 'June–August 2025',
    dateLabel: 'Duration',
    description: 'Completed a two-month internship involving collaborative engineering work and project development, including the IoT Device Monitoring & Alert System.',
  },
  {
    title: 'INNOVISION 2026',
    icon: Presentation,
    institution: 'MIT-WPU, Department of Polytechnic & Skill Development',
    date: 'February 2026',
    recognition: 'Project Exhibition Participation',
    description: "Participated in Innovision 2026, a project exhibition organised by MIT-WPU's Department of Polytechnic & Skill Development.",
  },
  {
    title: 'ACADEMIC PERFORMANCE',
    icon: GraduationCap,
    institution: 'MIT World Peace University, Pune',
    achievement: 'CGPA 7.90/10',
    description: 'Academic performance during my integrated Diploma and B.Tech journey in Computer Science and Engineering (Artificial Intelligence and Data Science).',
  },
  {
    title: 'BHARATIYA ANTARIKSH HACKATHON 2026',
    icon: FileCheck2,
    organisation: 'ISRO / Hack2skill',
    date: '2026',
    dateLabel: 'Year',
    recognition: 'Idea Successfully Submitted',
    description: 'Successfully submitted an idea for the Bharatiya Antariksh Hackathon 2026.',
  },
  {
    title: 'IGNISIA CLUB LEADERSHIP',
    icon: UsersRound,
    organisation: 'Ignisia | AI & Innovation Club',
    institution: 'MIT-WPU, Pune',
    roles: ['Treasurer', 'Documentation Department Head'],
    description: 'Contributed to university club activities through finance-related responsibilities and documentation work.',
  },
]

function AchievementCard({ achievement, index }) {
  const {
    title,
    icon: Icon,
    featured,
    institution,
    organisation,
    location,
    role,
    date,
    dateLabel = 'Date',
    recognition,
    achievement: academicAchievement,
    roles,
    description,
  } = achievement

  return (
    <Reveal
      className={`achievement-entry${featured ? ' achievement-entry--featured' : ''}`}
      delay={index * 0.045}
    >
      <Card className={`achievement-card${featured ? ' achievement-card--featured' : ''}`}>
        <div className="achievement-card__identity">
          <span aria-hidden="true" className="achievement-card__icon">
            <Icon size={featured ? 22 : 19} strokeWidth={1.7} />
          </span>
          <span className="achievement-card__number">0{index + 1}</span>
        </div>

        <div className="achievement-card__content">
          <h2 className="achievement-card__title">{title}</h2>
          <div className="achievement-card__meta">
            {organisation && (
              <span><Building2 aria-hidden="true" size={14} />{organisation}</span>
            )}
            {institution && (
              <span><Building2 aria-hidden="true" size={14} />{institution}</span>
            )}
            {location && (
              <span><MapPin aria-hidden="true" size={14} />{location}</span>
            )}
            {date && (
              <span><CalendarDays aria-hidden="true" size={14} />{dateLabel}: {date}</span>
            )}
          </div>
          <p className="achievement-card__description">{description}</p>

          {(role || recognition || academicAchievement || roles) && (
            <div className="achievement-card__details">
              {role && <span className="achievement-card__label">{role}</span>}
              {recognition && <span className="achievement-card__label">{recognition}</span>}
              {academicAchievement && (
                <span className="achievement-card__label achievement-card__label--result">
                  {academicAchievement}
                </span>
              )}
              {roles?.map((clubRole) => (
                <span className="achievement-card__label" key={clubRole}>{clubRole}</span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Reveal>
  )
}

function Achievements() {
  return (
    <PageContainer className="achievements-page">
      <Reveal
        aria-labelledby="achievements-title"
        as="section"
        className="achievements-intro"
      >
        <div className="achievements-intro__copy">
          <p className="achievements-eyebrow">MILESTONES &amp; RECOGNITION</p>
          <h1 className="achievements-intro__title" id="achievements-title">
            Achievements &amp; Recognition
          </h1>
          <p className="achievements-intro__description">
            A collection of milestones, recognitions, academic accomplishments, and experiences that reflect my learning journey and involvement in technology.
          </p>
        </div>
        <div aria-hidden="true" className="achievements-intro__mark">
          <Award size={66} strokeWidth={0.9} />
          <span>LEARNING IN PRACTICE</span>
        </div>
      </Reveal>

      <section aria-label="Achievements and recognition" className="achievements-grid">
        {achievements.map((achievement, index) => (
          <AchievementCard
            achievement={achievement}
            index={index}
            key={achievement.title}
          />
        ))}
      </section>
    </PageContainer>
  )
}

export default Achievements

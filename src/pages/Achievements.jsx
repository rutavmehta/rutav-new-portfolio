import {
  Award,
  Building2,
  CalendarDays,
  Clock3,
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
    title: 'Ignisia 24-Hour National-Level AI Hackathon',
    category: 'Hackathon service',
    icon: Award,
    featured: true,
    institution: 'MIT-WPU',
    location: 'Pune',
    role: 'Committee Member',
    date: 'April 2026',
    recognition: 'Certificate of Appreciation',
    description: 'Contributed to the event as a committee member.',
  },
  {
    title: 'Ybranium Technologies Internship',
    category: 'Professional experience',
    icon: Building2,
    organisation: 'Ybranium Technologies',
    location: 'Anand, Gujarat',
    role: 'Junior Engineer',
    date: 'June–August 2025',
    duration: '2 months',
    project: 'IoT Device Monitoring & Alert System',
    description: 'Collaborative engineering and project development.',
  },
  {
    title: 'Innovision 2026',
    category: 'Project exhibition',
    icon: Presentation,
    institution: 'MIT-WPU Department of Polytechnic & Skill Development',
    date: 'February 2026',
    description: 'Project exhibition participation.',
  },
  {
    title: 'Academic Performance',
    category: 'Academic',
    icon: GraduationCap,
    institution: 'MIT-WPU',
    programme: 'Integrated Diploma + B.Tech CSE (AI & DS)',
    achievement: 'CGPA: 7.90/10',
    description: 'Academic performance in the integrated programme.',
  },
  {
    title: 'Bharatiya Antariksh Hackathon 2026',
    category: 'Hackathon submission',
    icon: FileCheck2,
    organisation: 'ISRO / Hack2skill',
    date: '2026',
    description: 'Successfully submitted an idea.',
  },
  {
    title: 'Ignisia Club Leadership',
    category: 'Leadership',
    icon: UsersRound,
    organisation: 'Ignisia',
    institution: 'MIT-WPU',
    roles: ['Treasurer', 'Documentation Department Head'],
    description: 'Leadership roles within the Ignisia club.',
  },
]

function AchievementCard({ achievement, index }) {
  const {
    title,
    category,
    icon: Icon,
    featured,
    institution,
    organisation,
    location,
    role,
    date,
    duration,
    recognition,
    achievement: academicAchievement,
    programme,
    project,
    roles,
    description,
  } = achievement

  return (
    <Reveal
      className={`achievement-entry${featured ? ' achievement-entry--featured' : ''}`}
      delay={index * 0.045}
    >
      <Card className={`achievement-card${featured ? ' achievement-card--featured' : ''}`}>
        <div className="achievement-card__header">
          <span aria-hidden="true" className="achievement-card__icon">
            <Icon size={featured ? 23 : 19} strokeWidth={1.65} />
          </span>
          <p className="achievement-card__category">{category}</p>
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
              <span><CalendarDays aria-hidden="true" size={14} />{date}</span>
            )}
            {duration && (
              <span><Clock3 aria-hidden="true" size={14} />{duration}</span>
            )}
          </div>
          {programme && <p className="achievement-card__programme">{programme}</p>}
          <p className="achievement-card__description">{description}</p>

          {(role || recognition || academicAchievement || project || roles) && (
            <div className="achievement-card__details">
              {role && <span className="achievement-card__label">{role}</span>}
              {recognition && <span className="achievement-card__label">{recognition}</span>}
              {academicAchievement && (
                <span className="achievement-card__label achievement-card__label--result">
                  {academicAchievement}
                </span>
              )}
              {project && (
                <span className="achievement-card__project">
                  <span>Associated project</span>
                  {project}
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
          <p className="achievements-eyebrow">A record of curiosity and contribution</p>
          <h1 className="achievements-intro__title" id="achievements-title">
            Achievements<span aria-hidden="true">.</span>
          </h1>
          <p className="achievements-intro__description">
            A considered collection of academic, technical, and extracurricular milestones shaped by learning, collaboration, and community.
          </p>
        </div>
        <div aria-hidden="true" className="achievements-intro__mark">
          <Award size={68} strokeWidth={0.85} />
          <span>SELECTED MILESTONES</span>
        </div>
      </Reveal>

      <section aria-label="Achievements and recognition" className="achievements-section">
        <div className="achievements-section__heading">
          <h2>Milestones</h2>
          <span aria-hidden="true" />
        </div>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <AchievementCard
              achievement={achievement}
              index={index}
              key={achievement.title}
            />
          ))}
        </div>
      </section>
    </PageContainer>
  )
}

export default Achievements

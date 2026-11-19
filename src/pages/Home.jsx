import { ArrowDownToLine, ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import profilePhoto from '../assets/RRM_Updated_Pic.jpg'
import { professionalInterests, recentActivity, selectedProjects } from '../data/portfolioHome.js'
import './Home.css'

function Home() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <PageContainer className="home-page">
      <Reveal
        aria-labelledby="home-title"
        as="section"
        className="portfolio-hero"
      >
        <div className="portfolio-hero__copy">
          <p className="home-eyebrow">AI · SOFTWARE · DATA</p>
          <h1 className="portfolio-hero__name" id="home-title">
            <span className="portfolio-hero__first-name">Rutav Ritesh</span>
            <span>Mehta</span>
          </h1>
          <p className="portfolio-hero__role">
            <strong>B.Tech CSE (AI &amp; DS) Student</strong>
            <span>Aspiring AI &amp; Software Developer</span>
          </p>
          <p className="portfolio-hero__introduction">
            I enjoy exploring technology, developing practical solutions, and building software that connects artificial intelligence, data and real-world applications.
          </p>
          <div className="availability-badge">
            <span aria-hidden="true" className="availability-badge__dot" />
            Open to Internships &amp; Collaboration
          </div>
          <div className="portfolio-hero__actions">
            <Button to="/projects">
              Explore My Work <ArrowUpRight aria-hidden="true" size={16} />
            </Button>
            <Button className="portfolio-hero__contact-button" to="/contact" variant="text">
              Get In Touch <ArrowRight aria-hidden="true" size={16} />
            </Button>
            <Button
              aria-label="Resume PDF will be added later"
              className="resume-button"
              disabled
              title="Resume PDF will be added later"
              type="button"
              variant="text"
            >
              <ArrowDownToLine aria-hidden="true" size={15} />
              Resume <span className="resume-button__note">PDF soon</span>
            </Button>
          </div>
        </div>

        <Reveal className="portfolio-hero__portrait" delay={0.12}>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="portrait-frame"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          >
            <img
              alt="Rutav Mehta – Profile Photograph"
              className="portrait-frame__image"
              src={profilePhoto}
            />
            <div aria-hidden="true" className="portrait-frame__shade" />
            <div aria-hidden="true" className="portrait-frame__corner" />
            <div className="portrait-frame__caption">
              <span>PROFILE PHOTOGRAPH</span>
              <span>RUTAV MEHTA</span>
            </div>
            <div aria-hidden="true" className="portrait-frame__index">01</div>
          </motion.div>
        </Reveal>
      </Reveal>

      <Reveal
        aria-labelledby="interests-title"
        as="section"
        className="home-section interests-section"
      >
        <div className="home-section__heading">
          <div>
            <p className="home-eyebrow">WHAT DRAWS MY CURIOSITY</p>
            <h2 className="home-section__title" id="interests-title">Professional interests</h2>
          </div>
          <p className="home-section__aside">Ideas that connect intelligent systems with useful software.</p>
        </div>
        <div className="interest-grid">
          {professionalInterests.map(({ title, description, icon: Icon }, index) => (
            <Card className="interest-item" key={title}>
              <span className="interest-item__number">0{index + 1}</span>
              <span className="interest-item__icon"><Icon aria-hidden="true" size={20} strokeWidth={1.7} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span aria-hidden="true" className="interest-item__rule" />
            </Card>
          ))}
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="projects-title"
        as="section"
        className="home-section projects-section"
      >
        <div className="home-section__heading">
          <div>
            <p className="home-eyebrow">SELECTED WORK</p>
            <h2 className="home-section__title" id="projects-title">Selected projects</h2>
          </div>
          <p className="home-section__aside">A selection spanning AI, software, and systems.</p>
        </div>

        <div className="project-grid">
          {selectedProjects.map(({ title, category, description, icon: Icon, tone, technologies, objectives }, index) => (
            <Reveal
              className={`project-entry project-entry--${tone}`}
              delay={index * 0.045}
              key={title}
            >
              <Card className={`project-card project-card--${tone}`}>
                <div className="project-card__top">
                  <span className="project-card__number">0{index + 1}</span>
                  <span className="project-card__category">{category}</span>
                  <span className="project-card__icon"><Icon aria-hidden="true" size={20} strokeWidth={1.7} /></span>
                </div>
                <h3>{title}</h3>
                <p className="project-card__description">{description}</p>
                <ul aria-label="Project focus areas" className="project-card__tags">
                  {technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <details className="project-objectives">
                  <summary>
                    <span>View Objectives</span>
                    <ChevronDown aria-hidden="true" size={16} />
                  </summary>
                  <ul>
                    {objectives.map((objective) => <li key={objective}>{objective}</li>)}
                  </ul>
                </details>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="projects-section__link">
          <Button to="/projects" variant="text">
            View all projects <ArrowRight aria-hidden="true" size={16} />
          </Button>
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="activity-title"
        as="section"
        className="home-section activity-section"
      >
        <div className="home-section__heading">
          <div>
            <p className="home-eyebrow">RECENT ACTIVITY</p>
            <h2 className="home-section__title" id="activity-title">Learning by taking part</h2>
          </div>
          <p className="home-section__aside">Internship, events, and project exhibition.</p>
        </div>

        <div className="activity-timeline">
          {recentActivity.map(({ title, organization, role, description, icon: Icon }, index) => (
            <article className="activity-item" key={title}>
              <div className="activity-item__content">
                <div className="activity-item__meta">
                  <span className="activity-item__index">0{index + 1}</span>
                  <span className="activity-item__date">{organization}</span>
                  <span className="activity-item__icon"><Icon aria-hidden="true" size={17} strokeWidth={1.7} /></span>
                </div>
                <h3>{title}</h3>
                {role && <p className="activity-item__role">{role}</p>}
                {description && <p className="activity-item__description">{description}</p>}
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="contact-cta-title"
        as="section"
        className="contact-cta-section"
      >
        <div className="contact-cta">
          <div className="contact-cta__ornament" aria-hidden="true">R.</div>
          <div className="contact-cta__copy">
            <p className="home-eyebrow">LET’S CONNECT</p>
            <h2 id="contact-cta-title">Good work starts with a conversation.</h2>
            <p>I’m open to thoughtful conversations around internships, collaboration, and ideas worth building.</p>
          </div>
          <div className="contact-cta__actions">
            <Button to="/contact">
              Get In Touch <ArrowUpRight aria-hidden="true" size={16} />
            </Button>
            <Button className="contact-cta__text-link" to="/contact" variant="text">
              Contact page
            </Button>
          </div>
        </div>
      </Reveal>
    </PageContainer>
  )
}

export default Home

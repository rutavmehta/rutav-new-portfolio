import { BrainCircuit, Code2, Database, Download, Eye, GraduationCap, Lightbulb, Music2, UsersRound } from 'lucide-react'
import Card from '../components/ui/Card.jsx'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import './About.css'

const cvUrl = `${import.meta.env.BASE_URL}documents/Rutav_Ritesh_Mehta_Updated_CV.pdf`

const interests = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Exploring intelligent systems and learning methods that can make useful applications more capable.',
    icon: BrainCircuit,
  },
  {
    title: 'Software Development',
    description: 'Turning ideas into practical software through thoughtful development and clear problem-solving.',
    icon: Code2,
  },
  {
    title: 'Data Engineering',
    description: 'Understanding the systems and workflows that help make data-driven applications possible.',
    icon: Database,
  },
  {
    title: 'Practical Problem Solving',
    description: 'Breaking challenges into considered, workable steps and building solutions around real needs.',
    icon: Lightbulb,
  },
]

const journeySteps = [
  {
    title: 'An integrated academic journey',
    description: 'Pursuing an integrated Diploma + B.Tech in Computer Science and Engineering at MIT World Peace University.',
    icon: GraduationCap,
  },
  {
    title: 'A growing interest in software',
    description: 'Developing an interest in programming and software development, and in how technology can be put to practical use.',
    icon: Code2,
  },
  {
    title: 'Exploring intelligent, data-driven systems',
    description: 'Learning about artificial intelligence, machine learning, and applications shaped by data.',
    icon: BrainCircuit,
  },
  {
    title: 'Learning through projects',
    description: 'Building experience through practical academic and industry projects, alongside collaborative problem-solving.',
    icon: UsersRound,
  },
]

const qualities = ['Curious', 'Adaptable', 'Reliable', 'Collaborative', 'Practical', 'Focused']

function About() {
  return (
    <PageContainer className="about-page">
      <section aria-labelledby="about-title" className="about-intro">
        <Reveal className="about-intro__copy">
          <p className="about-eyebrow">ABOUT RUTAV</p>
          <h1 className="about-intro__title" id="about-title">
            A little about <span>me.</span>
          </h1>
          <div className="about-intro__body">
            <p className="about-intro__lead">
              I am a Computer Science and Engineering student specializing in Artificial Intelligence and Data Science at MIT World Peace University, Pune.
            </p>
            <p>
              I enjoy exploring technology, developing practical solutions, and working on projects that bring together software development, artificial intelligence, machine learning, and data-driven systems.
            </p>
            <p>
              Through academic projects, hackathons, and industry experience, I have been continuously developing my technical abilities while gaining practical exposure to collaborative problem-solving and project development.
            </p>
          </div>
        </Reveal>

        <Reveal className="about-portrait" delay={0.12}>
          <figure className="about-portrait__frame">
            <div className="about-portrait__visual">
              <svg
                aria-labelledby="about-technology-title about-technology-description"
                className="about-portrait__artwork"
                role="img"
                viewBox="0 0 480 560"
              >
                <title id="about-technology-title">Abstract AI and data-science network</title>
                <desc id="about-technology-description">
                  A calm, interconnected neural network with softly illuminated nodes, data paths, and geometric layers.
                </desc>
                <defs>
                  <pattern height="32" id="about-grid" patternUnits="userSpaceOnUse" width="32">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="var(--color-border)" strokeOpacity="0.35" strokeWidth="0.7" />
                  </pattern>
                  <radialGradient cx="50%" cy="47%" id="about-core-glow" r="52%">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="about-line-glow" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-text-faint)" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.62" />
                    <stop offset="100%" stopColor="var(--color-text-faint)" stopOpacity="0.18" />
                  </linearGradient>
                  <filter height="300%" id="about-node-glow" width="300%" x="-100%" y="-100%">
                    <feGaussianBlur result="blur" stdDeviation="3" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect fill="url(#about-grid)" height="560" width="480" />
                <ellipse cx="240" cy="266" fill="url(#about-core-glow)" rx="216" ry="226" />

                <g fill="none" stroke="var(--color-border-strong)" strokeOpacity="0.48">
                  <circle cx="240" cy="266" r="166" strokeDasharray="2 11" />
                  <circle cx="240" cy="266" r="132" strokeOpacity="0.34" />
                  <path d="M54 266h372M240 78v376" strokeDasharray="1 9" />
                  <path d="m93 143 294 246M387 143 93 389" strokeOpacity="0.22" />
                </g>

                <g fill="none" stroke="url(#about-line-glow)" strokeLinecap="round" strokeWidth="1.25">
                  <path d="m240 266-90-91m90 91 89-92m-89 92 112-7m-112 7-92 83m92-83 70 91m-70-91-12 139m-90-236 44-50m46 50 9-91m80 0-35 90m35-90 54 74m-10 97 66 66m-66-66-7 113m-48-22 55 22m-55-22-64 69m-8-69-67 70m-25-153-63 63m63-63-75-7" />
                  <path d="m150 175 74-18m15 18-68 92m158-93-68 92m68-92 44 66m-156 0 70 91m-70-91-25 66m95 25 64 22m-64-22-70 47" strokeOpacity="0.58" />
                </g>

                <g fill="none" stroke="var(--color-accent-border)" strokeWidth="0.8">
                  <path d="M240 207 299 241l-8 68-60 35-61-35-5-69 66-33Z" />
                  <path d="m240 226 41 24-5 47-37 23-43-23-3-47 47-24Z" strokeOpacity="0.62" />
                  <path d="m127 118 22-22 22 22-22 22-22-22Zm181 320 17-17 17 17-17 17-17-17Z" strokeOpacity="0.7" />
                </g>

                <g fill="var(--color-surface)" stroke="var(--color-text-faint)" strokeWidth="1">
                  <circle cx="150" cy="175" r="5" />
                  <circle cx="329" cy="174" r="5" />
                  <circle cx="352" cy="259" r="4" />
                  <circle cx="148" cy="349" r="4" />
                  <circle cx="310" cy="357" r="5" />
                  <circle cx="228" cy="405" r="4" />
                  <circle cx="174" cy="85" r="3" />
                  <circle cx="375" cy="333" r="3" />
                  <circle cx="82" cy="342" r="3" />
                </g>

                <g filter="url(#about-node-glow)">
                  <circle cx="240" cy="266" fill="var(--color-accent-soft)" r="18" />
                  <circle cx="240" cy="266" fill="var(--color-surface)" r="7" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <circle cx="224" cy="157" fill="var(--color-accent)" r="3.5" />
                  <circle cx="384" cy="326" fill="var(--color-accent)" r="3" />
                  <circle cx="84" cy="259" fill="var(--color-accent)" r="3" />
                </g>

                <g fill="none" stroke="var(--color-accent)" strokeLinecap="round" strokeOpacity="0.66" strokeWidth="1">
                  <path d="M67 454h72m-52 10h52m195-10h78m-58 10h58" />
                  <path d="M67 454h21m246 0h22" strokeDasharray="2 5" />
                </g>
                <g fill="var(--color-text-muted)" fontFamily="var(--font-body)" fontSize="8" letterSpacing="2">
                  <text x="67" y="443">SIGNAL / 01</text>
                  <text textAnchor="end" x="413" y="443">NODE / 09</text>
                </g>
              </svg>
            </div>
            <span aria-hidden="true" className="about-portrait__shade" />
            <span aria-hidden="true" className="about-portrait__index">01</span>
            <figcaption className="about-portrait__caption">
              <span>PROFILE PHOTOGRAPH</span>
              <span>RUTAV MEHTA</span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <Reveal
        aria-labelledby="resume-title"
        as="section"
        className="about-section about-resume"
      >
        <div className="about-resume__copy">
          <p className="about-eyebrow">CURRICULUM VITAE</p>
          <h2 className="about-section__title" id="resume-title">My Resume</h2>
          <p className="about-resume__description">
            Explore my academic background, technical skills, projects and professional experience.
          </p>
        </div>
        <div aria-label="CV actions" className="about-resume__actions" role="group">
          <a
            aria-label="View CV PDF in a new tab"
            className="button button--primary"
            href={cvUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Eye aria-hidden="true" size={16} />
            View CV
          </a>
          <a
            aria-label="Download CV as Rutav_Ritesh_Mehta_CV.pdf"
            className="button about-resume__download"
            download="Rutav_Ritesh_Mehta_CV.pdf"
            href={cvUrl}
          >
            <Download aria-hidden="true" size={16} />
            Download CV
          </a>
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="journey-title"
        as="section"
        className="about-section about-journey"
      >
        <div className="about-section__heading">
          <div>
            <p className="about-eyebrow">LEARNING, BUILDING, EXPLORING</p>
            <h2 className="about-section__title" id="journey-title">My journey</h2>
          </div>
          <p className="about-section__aside">
            A path shaped by study, curiosity, and learning through practice.
          </p>
        </div>

        <div className="journey-layout">
          <div className="journey-note">
            <span aria-hidden="true" className="journey-note__mark">R.</span>
            <p className="journey-note__label">THE THREAD THROUGH IT ALL</p>
            <p className="journey-note__text">
              Connecting what I learn with what I can make, one project and one new idea at a time.
            </p>
          </div>
          <div className="journey-list">
            {journeySteps.map(({ title, description, icon: Icon }, index) => (
              <article className="journey-step" key={title}>
                <span aria-hidden="true" className="journey-step__number">0{index + 1}</span>
                <span className="journey-step__icon"><Icon aria-hidden="true" size={18} strokeWidth={1.7} /></span>
                <div className="journey-step__copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="interests-title"
        as="section"
        className="about-section about-interests"
      >
        <div className="about-section__heading">
          <div>
            <p className="about-eyebrow">WHERE MY CURIOSITY LEADS</p>
            <h2 className="about-section__title" id="interests-title">Areas of interest</h2>
          </div>
          <p className="about-section__aside">
            Different disciplines, with a shared focus on useful technology.
          </p>
        </div>

        <div className="about-interest-grid">
          {interests.map(({ title, description, icon: Icon }, index) => (
            <Reveal
              className="about-interest-entry"
              delay={index * 0.045}
              key={title}
            >
              <Card className="about-interest">
                <div className="about-interest__top">
                  <span className="about-interest__number">0{index + 1}</span>
                  <span className="about-interest__icon"><Icon aria-hidden="true" size={20} strokeWidth={1.7} /></span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span aria-hidden="true" className="about-interest__rule" />
              </Card>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="beyond-title"
        as="section"
        className="about-section about-beyond"
      >
        <div className="about-section__heading">
          <div>
            <p className="about-eyebrow">A FEW THINGS BEYOND THE SCREEN</p>
            <h2 className="about-section__title" id="beyond-title">Beyond technology</h2>
          </div>
          <p className="about-section__aside">
            Community and a long-standing practice are also part of my story.
          </p>
        </div>

        <div className="beyond-layout">
          <Reveal className="beyond-entry beyond-entry--club">
            <Card className="beyond-club">
              <div className="beyond-club__top">
                <span className="beyond-club__icon"><BrainCircuit aria-hidden="true" size={20} strokeWidth={1.7} /></span>
                <span className="beyond-club__index">01 / COMMUNITY</span>
              </div>
              <p className="beyond-club__eyebrow">MIT WORLD PEACE UNIVERSITY</p>
              <h3>IGNISIA <span>AI &amp; Innovation Club</span></h3>
              <div className="beyond-club__roles">
                <p><span>Treasurer</span><span>Documentation Department Head</span></p>
              </div>
            </Card>
          </Reveal>

          <Reveal className="beyond-entry beyond-entry--music" delay={0.08}>
            <Card className="beyond-music">
              <div className="beyond-music__header">
                <span className="beyond-music__icon"><Music2 aria-hidden="true" size={19} strokeWidth={1.7} /></span>
                <span className="beyond-music__index">02 / PRACTICE</span>
              </div>
              <div className="beyond-music__content">
                <p className="beyond-music__eyebrow">MUSIC &amp; TABLA</p>
                <h3>A practice built over time.</h3>
                <p>
                  Practising Tabla since 2014, beginning at Navrachana International School, Vadodara. The long-term commitment has highlighted the value of dedication, discipline, and consistency.
                </p>
              </div>
              <span aria-hidden="true" className="beyond-music__year">2014</span>
            </Card>
          </Reveal>
        </div>
      </Reveal>

      <Reveal
        aria-labelledby="approach-title"
        as="section"
        className="about-section about-approach"
      >
        <div className="about-section__heading">
          <div>
            <p className="about-eyebrow">HOW I LIKE TO WORK</p>
            <h2 className="about-section__title" id="approach-title">My approach</h2>
          </div>
        </div>

        <div className="approach-layout">
          <ul aria-label="Personal qualities" className="approach-qualities">
            {qualities.map((quality, index) => (
              <li key={quality}>
                <span aria-hidden="true">0{index + 1}</span>
                {quality}
              </li>
            ))}
          </ul>
          <div className="approach-note">
            <span aria-hidden="true" className="approach-note__rule" />
            <p className="approach-note__label">ALWAYS IN PROGRESS</p>
            <p className="approach-note__text">
              I believe in continuous learning, meaningful collaboration, and building technology that addresses real-world challenges.
            </p>
          </div>
        </div>
      </Reveal>
    </PageContainer>
  )
}

export default About

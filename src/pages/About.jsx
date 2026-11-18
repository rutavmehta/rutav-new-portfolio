import { BrainCircuit, Code2, Database, GraduationCap, Lightbulb, Music2, UsersRound } from 'lucide-react'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import profilePhotoPlaceholder from '../assets/profile-photo-placeholder.svg'
import './About.css'

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
            <p>
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

        <Reveal className="about-portrait" delay={0.1}>
          <div className="about-portrait__frame">
            <span aria-hidden="true" className="about-portrait__index">01</span>
            <img
              alt="Replaceable profile photograph placeholder"
              className="about-portrait__image"
              src={profilePhotoPlaceholder}
            />
            <div className="about-portrait__caption">
              <span>PROFILE PHOTOGRAPH</span>
              <span>REPLACEABLE ASSET</span>
            </div>
          </div>
        </Reveal>
      </section>

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
                <div>
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
            <article className="about-interest" key={title}>
              <div className="about-interest__top">
                <span className="about-interest__number">0{index + 1}</span>
                <span className="about-interest__icon"><Icon aria-hidden="true" size={19} strokeWidth={1.7} /></span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
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
          <article className="beyond-club">
            <div className="beyond-club__top">
              <span className="beyond-club__icon"><BrainCircuit aria-hidden="true" size={20} strokeWidth={1.7} /></span>
              <span className="beyond-club__index">01 / COMMUNITY</span>
            </div>
            <p className="beyond-club__eyebrow">MIT WORLD PEACE UNIVERSITY</p>
            <h3>IGNISIA <span>AI &amp; Innovation Club</span></h3>
            <div className="beyond-club__roles">
              <p><span>Treasurer</span><span>Documentation Department Head</span></p>
            </div>
          </article>

          <article className="beyond-music">
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
          </article>
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
                <span>0{index + 1}</span>
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

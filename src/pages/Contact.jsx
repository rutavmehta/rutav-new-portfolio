import { useState } from 'react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import Card from '../components/ui/Card.jsx'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import './Contact.css'

const recipientEmail = 'imrutav@gmail.com'

const initialFormValues = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

function validateForm(values) {
  const errors = {}

  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  if (!values.message.trim()) errors.message = 'Please enter a message.'

  return errors
}

function ContactInformationCard({ icon: Icon, label, value, href, action, className = '' }) {
  return (
    <Card className={`contact-information-card ${className}`}>
      <div className="contact-information-card__heading">
        <span className="contact-icon">
          <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
        </span>
        <span className="contact-information-card__label">{label}</span>
      </div>
      <p className="contact-information-card__value">{value}</p>
      {href ? (
        <a className="contact-information-card__action" href={href}>
          {action}
          <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      ) : (
        <span className="contact-information-card__note">Based in Pune</span>
      )}
    </Card>
  )
}

function Contact() {
  const [values, setValues] = useState(initialFormValues)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const errors = validateForm(values)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setFeedback(null)
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)

    const validationErrors = validateForm(values)
    if (Object.keys(validationErrors).length > 0) {
      setFeedback({
        type: 'error',
        message: 'Please correct the highlighted fields before continuing.',
      })
      return
    }

    const subject = values.subject.trim()
    const body = [
      `Name: ${values.fullName.trim()}`,
      `Email: ${values.email.trim()}`,
      '',
      values.message.trim(),
    ].join('\n')
    const mailto = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setFeedback({
      type: 'success',
      message: 'Your email application should open with a prefilled message. Review it and send it from your email application.',
    })
    window.location.href = mailto
  }

  const fieldError = (name) => (touched[name] || submitted) ? errors[name] : ''

  return (
    <PageContainer className="contact-page">
      <Reveal
        aria-labelledby="contact-title"
        as="section"
        className="contact-intro"
      >
        <div className="contact-intro__copy">
          <p className="contact-eyebrow">A GOOD CONVERSATION STARTS HERE</p>
          <h1 className="contact-intro__title" id="contact-title">Let&apos;s Connect</h1>
          <p className="contact-intro__description">
            I&apos;m always open to meaningful conversations, exciting opportunities and collaborations. Feel free to reach out.
          </p>
          <div className="contact-availability">
            <span aria-hidden="true" className="contact-availability__dot" />
            Open to Internships &amp; Collaboration
          </div>
        </div>
        <span aria-hidden="true" className="contact-intro__mark">R.</span>
      </Reveal>

      <div className="contact-layout">
        <div className="contact-details">
          <Reveal
            aria-labelledby="contact-information-title"
            as="section"
            className="contact-section"
          >
            <div className="contact-section__heading">
              <p className="contact-eyebrow">GET IN TOUCH</p>
              <h2 id="contact-information-title">Contact information</h2>
            </div>
            <div className="contact-information-grid">
              <ContactInformationCard
                action="Send an email"
                href={`mailto:${recipientEmail}`}
                icon={Mail}
                label="Email"
                value={recipientEmail}
              />
              <ContactInformationCard
                action="Call this number"
                href="tel:+918799609360"
                icon={Phone}
                label="Phone"
                value="+91-8799609360"
              />
              <ContactInformationCard
                className="contact-information-card--location"
                icon={MapPin}
                label="Location"
                value="Pune, Maharashtra, India"
              />
            </div>
          </Reveal>

          <Reveal
            aria-labelledby="social-title"
            as="section"
            className="contact-section contact-social-section"
            delay={0.04}
          >
            <div className="contact-section__heading">
              <p className="contact-eyebrow">FIND ME ONLINE</p>
              <h2 id="social-title">Social profiles</h2>
            </div>
            <div className="contact-social-grid">
              <Card className="contact-social-card">
                <a
                  aria-label="Open Rutav's LinkedIn profile in a new tab"
                  href="https://linkedin.com/in/rutavmehta"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="contact-icon"><BriefcaseBusiness aria-hidden="true" size={18} strokeWidth={1.7} /></span>
                  <span className="contact-social-card__copy">
                    <strong>LinkedIn</strong>
                    <span>Professional profile</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="contact-social-card__arrow" size={15} />
                </a>
              </Card>
              <Card className="contact-social-card">
                <a
                  aria-label="Open Rutav's GitHub profile in a new tab"
                  href="https://github.com/rutavmehta"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="contact-icon"><Code2 aria-hidden="true" size={18} strokeWidth={1.7} /></span>
                  <span className="contact-social-card__copy">
                    <strong>GitHub</strong>
                    <span>Code and projects</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="contact-social-card__arrow" size={15} />
                </a>
              </Card>
            </div>
          </Reveal>
        </div>

        <Reveal
          aria-labelledby="message-form-title"
          as="section"
          className="contact-form-section"
          delay={0.07}
        >
          <Card className="contact-form-card">
            <div className="contact-form-card__heading">
              <span className="contact-icon contact-icon--large">
                <Send aria-hidden="true" size={19} strokeWidth={1.7} />
              </span>
              <div>
                <p className="contact-eyebrow">SEND A NOTE</p>
                <h2 id="message-form-title">Start a conversation</h2>
                <p>Share a little about what you have in mind.</p>
              </div>
            </div>

            <form className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="contact-form__fields">
                <div className={`contact-field${fieldError('fullName') ? ' contact-field--invalid' : ''}`}>
                  <label htmlFor="contact-full-name">Full Name <span aria-hidden="true">*</span></label>
                  <input
                    autoComplete="name"
                    id="contact-full-name"
                    name="fullName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-describedby={fieldError('fullName') ? 'contact-full-name-error' : undefined}
                    aria-invalid={Boolean(fieldError('fullName'))}
                    required
                    value={values.fullName}
                  />
                  {fieldError('fullName') && (
                    <span className="contact-field__error" id="contact-full-name-error" role="alert">
                      {fieldError('fullName')}
                    </span>
                  )}
                </div>

                <div className={`contact-field${fieldError('email') ? ' contact-field--invalid' : ''}`}>
                  <label htmlFor="contact-email">Email Address <span aria-hidden="true">*</span></label>
                  <input
                    autoComplete="email"
                    id="contact-email"
                    inputMode="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-describedby={fieldError('email') ? 'contact-email-error' : undefined}
                    aria-invalid={Boolean(fieldError('email'))}
                    required
                    type="email"
                    value={values.email}
                  />
                  {fieldError('email') && (
                    <span className="contact-field__error" id="contact-email-error" role="alert">
                      {fieldError('email')}
                    </span>
                  )}
                </div>

                <div className={`contact-field contact-field--full${fieldError('subject') ? ' contact-field--invalid' : ''}`}>
                  <label htmlFor="contact-subject">Subject <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-subject"
                    name="subject"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-describedby={fieldError('subject') ? 'contact-subject-error' : undefined}
                    aria-invalid={Boolean(fieldError('subject'))}
                    required
                    value={values.subject}
                  />
                  {fieldError('subject') && (
                    <span className="contact-field__error" id="contact-subject-error" role="alert">
                      {fieldError('subject')}
                    </span>
                  )}
                </div>

                <div className={`contact-field contact-field--full${fieldError('message') ? ' contact-field--invalid' : ''}`}>
                  <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="contact-message"
                    name="message"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-describedby={`${fieldError('message') ? 'contact-message-error ' : ''}contact-message-count`}
                    aria-invalid={Boolean(fieldError('message'))}
                    required
                    rows="6"
                    value={values.message}
                  />
                  <div className="contact-field__footer">
                    {fieldError('message') ? (
                      <span className="contact-field__error" id="contact-message-error" role="alert">
                        {fieldError('message')}
                      </span>
                    ) : <span aria-hidden="true" />}
                    <span aria-live="polite" className="contact-field__counter" id="contact-message-count">
                      {values.message.length} characters
                    </span>
                  </div>
                </div>
              </div>

              {feedback && (
                <div
                  className={`contact-feedback contact-feedback--${feedback.type}`}
                  role={feedback.type === 'error' ? 'alert' : 'status'}
                >
                  <p>{feedback.message}</p>
                  {feedback.type === 'success' && (
                    <p className="contact-feedback__alternative">
                      If your email application doesn&apos;t open, email{' '}
                      <a href={`mailto:${recipientEmail}`}>{recipientEmail}</a> directly.
                    </p>
                  )}
                </div>
              )}

              <button className="contact-submit" type="submit">
                <Send aria-hidden="true" size={15} />
                Send Message
                <ArrowUpRight aria-hidden="true" size={15} />
              </button>
              <p className="contact-form__note">
                This form opens your email application; it does not send or store messages on this website.
              </p>
            </form>
          </Card>
        </Reveal>
      </div>

      <Reveal
        aria-label="Closing note"
        as="section"
        className="contact-closing"
      >
        <div className="contact-closing__rule" />
        <p>Have an idea, opportunity or project in mind? I&apos;d be happy to hear from you.</p>
        <a href={`mailto:${recipientEmail}`}>
          Get in touch <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </Reveal>
    </PageContainer>
  )
}

export default Contact

import { useEffect, useRef, useState } from 'react'
import {
  Award,
  Building2,
  CalendarDays,
  Download,
  Eye,
  FileText,
  MapPin,
  X,
} from 'lucide-react'
import antarikshHackathonCertificate from '../assets/certificates/antariksh-hackathon.jpeg'
import ignisiaHackathonCertificate from '../assets/certificates/ignisia-hackathon.jpeg'
import internshipCertificate from '../assets/certificates/internship.png'
import innovisionCertificate from '../assets/certificates/innovision.png'
import javaCourseCertificate from '../assets/certificates/java-course.png'
import powerBiCertificate from '../assets/certificates/power-bi.png'
import pythonWorkshopCertificate from '../assets/certificates/python-workshop.png'
import xfairHackathonCertificate from '../assets/certificates/xfair-hackathon.jpeg'
import Card from '../components/ui/Card.jsx'
import PageContainer from '../components/ui/PageContainer.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import './Certifications.css'

const certificates = [
  {
    id: 'iot-device-monitoring-internship',
    title: 'IoT Device Monitoring & Alert System',
    certificateType: 'Internship Certificate',
    organisation: 'Ybranium Technologies',
    location: 'Anand, Gujarat',
    duration: 'June–August 2025',
    issueDate: '8 August 2025',
    category: 'Internship',
    image: internshipCertificate,
    details: [],
  },
  {
    id: 'innovision-2026-exhibition',
    title: 'Innovision 2026 Project Exhibition',
    certificateType: 'Participation Certificate',
    organisation: 'MIT-WPU – Department of Polytechnic & Skill Development',
    date: '13 February 2026',
    dateLabel: 'Date',
    category: 'Events & Participation',
    image: innovisionCertificate,
    details: [],
  },
  {
    id: 'python-using-ai-workshop',
    title: 'Python Using AI Workshop',
    certificateType: 'Workshop Certificate',
    organisation: 'AI For Techies – Aditya Kachave',
    issueDate: '20 July 2025',
    category: 'Workshops',
    image: pythonWorkshopCertificate,
    details: [],
  },
  {
    id: 'ignisia-ai-hackathon',
    title: 'Ignisia 24-Hour National-Level AI Hackathon',
    certificateType: 'Certificate of Appreciation',
    organisation: 'MIT-WPU – Department of Polytechnic & Skill Development and Department of Computer Engineering & Technology',
    category: 'Hackathons',
    image: ignisiaHackathonCertificate,
    details: [],
  },
  {
    id: 'x-fair-hackathon-ideathon',
    title: 'X-Fair Hackathon 2025 – Ideathon',
    certificateType: 'Participation Certificate',
    organisation: 'MIT-WPU – Department of Computer Science & Applications',
    date: '7–8 November 2025',
    dateLabel: 'Dates',
    category: 'Hackathons',
    image: xfairHackathonCertificate,
    details: [],
  },
  {
    id: 'power-bi-for-beginners',
    title: 'Power BI for Beginners',
    certificateType: 'Course Completion Certificate',
    organisation: 'Microsoft · Simplilearn SkillUP',
    issueDate: '3 November 2025',
    category: 'Courses',
    image: powerBiCertificate,
    details: ['Certificate Code: 9303401'],
  },
  {
    id: 'java-course-fundamentals',
    title: 'Java Course – Mastering the Fundamentals',
    certificateType: 'Certificate of Excellence',
    organisation: 'Scaler Topics',
    issueDate: '5 November 2025',
    category: 'Courses',
    image: javaCourseCertificate,
    details: ['86 Tutorials · 12 Modules · 9 Challenges'],
  },
  {
    id: 'bharatiya-antariksh-hackathon',
    title: 'Bharatiya Antariksh Hackathon 2026',
    certificateType: 'Certificate of Participation',
    organisation: 'ISRO · Powered by Hack2skill',
    category: 'Hackathons',
    image: antarikshHackathonCertificate,
    details: ['Certificate ID: 2026H2S06BAH-P29713'],
  },
]

const categories = [
  'All',
  'Internship',
  'Events & Participation',
  'Workshops',
  'Hackathons',
  'Courses',
]

function CertificateImage({ certificate, imageLoaded, onLoad, onError, large = false }) {
  return (
    <div className={`certificate-preview${large ? ' certificate-preview--large' : ''}`}>
      {certificate.image && (
        <img
          alt={imageLoaded ? `${certificate.title} certificate` : ''}
          aria-hidden={!imageLoaded}
          className="certificate-preview__image"
          onError={onError}
          onLoad={onLoad}
          src={certificate.image}
        />
      )}
      {!imageLoaded && (
        <div className="certificate-preview__placeholder">
          <span className="certificate-preview__placeholder-icon">
            <FileText aria-hidden="true" size={large ? 30 : 25} strokeWidth={1.4} />
          </span>
          <span>Certificate image coming soon</span>
        </div>
      )}
    </div>
  )
}

function getCertificateFilename(certificate) {
  const name = certificate.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  const extension = certificate.image
    .split(/[?#]/, 1)[0]
    .match(/\.(jpg|jpeg|png)$/i)?.[1]?.toLowerCase() || 'jpg'

  return `${name}.${extension}`
}

function CertificateCard({
  certificate,
  index,
  imageLoaded,
  onImageLoad,
  onImageError,
  onView,
}) {
  return (
    <Reveal className="certificate-entry" delay={index * 0.035}>
      <Card className="certificate-card">
        <CertificateImage
          certificate={certificate}
          imageLoaded={imageLoaded}
          onError={onImageError}
          onLoad={onImageLoad}
        />

        <div className="certificate-card__body">
          <div className="certificate-card__topline">
            <span className="certificate-card__type">{certificate.certificateType}</span>
            <span className="certificate-card__category">{certificate.category}</span>
          </div>
          <h2 className="certificate-card__title">{certificate.title}</h2>
          <p className="certificate-card__organisation">
            <Building2 aria-hidden="true" size={14} />
            <span>{certificate.organisation}</span>
          </p>
          <div className="certificate-card__metadata">
            {certificate.location && (
              <span><MapPin aria-hidden="true" size={14} />{certificate.location}</span>
            )}
            {certificate.duration && (
              <span><CalendarDays aria-hidden="true" size={14} />Duration: {certificate.duration}</span>
            )}
            {(certificate.issueDate || certificate.date) && (
              <span>
                <CalendarDays aria-hidden="true" size={14} />
                {certificate.dateLabel || 'Issue date'}: {certificate.issueDate || certificate.date}
              </span>
            )}
          </div>
          {certificate.details.length > 0 && (
            <ul className="certificate-card__details">
              {certificate.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          )}
          <div className="certificate-card__actions">
            <button
              className="certificate-button certificate-button--primary"
              onClick={onView}
              type="button"
            >
              <Eye aria-hidden="true" size={15} />
              View Certificate
            </button>
            {imageLoaded && (
              <a
                className="certificate-button certificate-button--secondary"
                download={getCertificateFilename(certificate)}
                href={certificate.image}
              >
                <Download aria-hidden="true" size={15} />
                Download
              </a>
            )}
          </div>
        </div>
      </Card>
    </Reveal>
  )
}

function CertificateModal({
  certificate,
  imageLoaded,
  onImageLoad,
  onImageError,
  onClose,
  modalRef,
  closeButtonRef,
}) {
  return (
    <div
      className="certificate-modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        aria-labelledby="certificate-modal-title"
        aria-modal="true"
        className="certificate-modal"
        ref={modalRef}
        role="dialog"
        tabIndex="-1"
      >
        <div className="certificate-modal__header">
          <p className="certificates-eyebrow">CERTIFICATE PREVIEW</p>
          <button
            aria-label="Close certificate preview"
            className="certificate-modal__close"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <X aria-hidden="true" size={19} />
          </button>
        </div>

        <div className="certificate-modal__content">
          <CertificateImage
            certificate={certificate}
            imageLoaded={imageLoaded}
            large
            onError={onImageError}
            onLoad={onImageLoad}
          />
          <div className="certificate-modal__details">
            <span className="certificate-card__category">{certificate.category}</span>
            <h2 id="certificate-modal-title">{certificate.title}</h2>
            <p className="certificate-modal__organisation">
              <Building2 aria-hidden="true" size={15} />
              <span>{certificate.organisation}</span>
            </p>
            {certificate.certificateType && (
              <p className="certificate-modal__type">{certificate.certificateType}</p>
            )}
            <div className="certificate-modal__metadata">
              {certificate.location && (
                <span><MapPin aria-hidden="true" size={15} />{certificate.location}</span>
              )}
              {certificate.duration && (
                <span><CalendarDays aria-hidden="true" size={15} />Duration: {certificate.duration}</span>
              )}
              {(certificate.issueDate || certificate.date) && (
                <span>
                  <CalendarDays aria-hidden="true" size={15} />
                  {certificate.dateLabel || 'Issue date'}: {certificate.issueDate || certificate.date}
                </span>
              )}
            </div>
            {certificate.details.length > 0 && (
              <ul className="certificate-modal__extra-details">
                {certificate.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            )}
            {imageLoaded && (
              <a
                className="certificate-button certificate-button--primary certificate-modal__download"
                download={getCertificateFilename(certificate)}
                href={certificate.image}
              >
                <Download aria-hidden="true" size={15} />
                Download Certificate
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [imageStates, setImageStates] = useState({})
  const modalRef = useRef(null)
  const closeButtonRef = useRef(null)
  const openerRef = useRef(null)

  const updateImageState = (id, status) => {
    setImageStates((current) => (
      current[id] === status ? current : { ...current, [id]: status }
    ))
  }

  useEffect(() => {
    if (!selectedCertificate) return undefined

    const previousBodyOverflow = document.body.style.overflow
    const previousDocumentOverflow = document.documentElement.style.overflow
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setSelectedCertificate(null)
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = modalRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      )
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousDocumentOverflow
      openerRef.current?.focus()
    }
  }, [selectedCertificate])

  const filteredCertificates = activeCategory === 'All'
    ? certificates
    : certificates.filter((certificate) => certificate.category === activeCategory)

  const openCertificate = (certificate, event) => {
    openerRef.current = event.currentTarget
    setSelectedCertificate(certificate)
  }

  return (
    <PageContainer className="certifications-page">
      <Reveal
        aria-labelledby="certifications-title"
        as="section"
        className="certifications-intro"
      >
        <div className="certifications-intro__copy">
          <p className="certificates-eyebrow">CONTINUOUS LEARNING</p>
          <h1 className="certifications-intro__title" id="certifications-title">Certifications</h1>
          <p className="certifications-intro__description">
            A collection of certifications, workshops, courses and participation recognitions reflecting my continuous learning and development.
          </p>
        </div>
        <div
          aria-label={`${certificates.length} certificates currently added`}
          className="certifications-count"
        >
          <span className="certifications-count__icon">
            <Award aria-hidden="true" size={20} strokeWidth={1.6} />
          </span>
          <span className="certifications-count__number">
            {String(certificates.length).padStart(2, '0')}
          </span>
          <span className="certifications-count__label">Certificates added</span>
        </div>
      </Reveal>

      <section aria-label="Certificate filters" className="certificates-filters">
        <p className="certificates-filters__label">BROWSE BY CATEGORY</p>
        <div aria-label="Filter certificates by category" className="certificates-filters__list" role="group">
          {categories.map((category) => (
            <button
              aria-pressed={activeCategory === category}
              className={`certificates-filter${activeCategory === category ? ' certificates-filter--active' : ''}`}
              key={category}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section
        aria-label={`${activeCategory === 'All' ? 'All' : activeCategory} certificates`}
        className="certificates-grid"
      >
        {filteredCertificates.map((certificate, index) => (
          <CertificateCard
            certificate={certificate}
            imageLoaded={imageStates[certificate.id] === 'loaded'}
            index={index}
            key={certificate.id}
            onImageError={() => updateImageState(certificate.id, 'failed')}
            onImageLoad={() => updateImageState(certificate.id, 'loaded')}
            onView={(event) => openCertificate(certificate, event)}
          />
        ))}
      </section>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          closeButtonRef={closeButtonRef}
          imageLoaded={imageStates[selectedCertificate.id] === 'loaded'}
          modalRef={modalRef}
          onClose={() => setSelectedCertificate(null)}
          onImageError={() => updateImageState(selectedCertificate.id, 'failed')}
          onImageLoad={() => updateImageState(selectedCertificate.id, 'loaded')}
        />
      )}
    </PageContainer>
  )
}

export default Certifications

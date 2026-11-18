import { ArrowUpRight } from 'lucide-react'
import Card from '../ui/Card.jsx'
import PageContainer from '../ui/PageContainer.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { pageContent } from '../../data/navigation.js'

function ContentPage({ page }) {
  const content = pageContent[page]

  return (
    <PageContainer>
      <SectionHeading
        description={content.description}
        eyebrow={content.eyebrow}
        title={content.title}
      />
      <Card className="placeholder-card">
        <span className="placeholder-card__index">01</span>
        <div>
          <p className="placeholder-card__label">A NOTE FOR LATER</p>
          <h2>{content.note}</h2>
          <p>Structure is in place. Add your own details when you are ready.</p>
        </div>
        <ArrowUpRight aria-hidden="true" className="placeholder-card__icon" size={19} />
      </Card>
    </PageContainer>
  )
}

export default ContentPage

import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import ImageBlock from '../helpers/ImageBlock'
import ParagraphBlock from '../helpers/ParagraphBlock'
import GetData from '../helpers/GetData'
import ValueToJSX from '../helpers/ValueToJSX'
import SocialShare from '../components/SocialShare'
import Download from '../components/Download'
const HeaderContent = GetData('page-header')

export default function PageHeader(props) {
  const { title, source } = props
  const taiwan_graphic =
    window.innerWidth > 480
      ? 'https://res.cloudinary.com/csisideaslab/image/upload/v1560872950/southbound/taiwan-dots_large.png'
      : 'https://res.cloudinary.com/csisideaslab/image/upload/v1560872950/southbound/taiwan-dots_small.png'

  return (
    <React.Fragment key="page-header">
      <section className="page-header__content">
        <div className="page-header__content-wrapper">
          <img
            className="page-header__content-graphic"
            src={taiwan_graphic}
            alt="Decorative Taiwan Graphic"
          />

          <div
            className="h1 page-header__content-site"
            itemProp="name headline"
          >
            <span>{HeaderContent.hero.supertitle}</span>
            <span>{HeaderContent.hero.title}</span>
          </div>

          <h1
            className="h1 page-header__content-title"
            itemProp="name headline"
          >
            <span>{HeaderContent.hero.supertitle}</span>
            <span>{title}</span>
          </h1>

          <div className="page-header__content-details">
            <div className="page-header__content-subtitle">
              <span>{HeaderContent.hero.subtitle}</span>
            </div>
            <div className="page-header__content-date">
              {HeaderContent.hero.published}
            </div>

            <div className="page-header__content-date">
              {HeaderContent.hero.updated}
            </div>
          </div>
        </div>
      </section>
      <section className="page-header__highlights">
        <section className="jump-links">
          <ReactMarkdown
            escapeHtml={false}
            unwrapDisallowed={true}
            source={source || ''}
            renderers={{
              image: ImageBlock,
              paragraph: ParagraphBlock
            }}
          />
        </section>

        <section className="actions">
          <Download content={ValueToJSX(HeaderContent.download)} />
          <SocialShare location="header" />
        </section>
      </section>
    </React.Fragment>
  )
}

import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import ImageBlock from '../helpers/ImageBlock'
import ParagraphBlock from '../helpers/ParagraphBlock'
import GetData from '../helpers/GetData'
import ValueToJSX from '../helpers/ValueToJSX'
import SocialShare from '../components/SocialShare'

export default function PageHeader(source, title) {
  const HeaderContent = GetData('header')

  return (
    <React.Fragment key="page-header">
      <section className="page-header__content">
        <div className="page-header__content-wrapper">
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
          <a href="@" className="download">
            {ValueToJSX(HeaderContent.download)}
          </a>
          <SocialShare location="header" />
        </section>
      </section>
    </React.Fragment>
  )
}

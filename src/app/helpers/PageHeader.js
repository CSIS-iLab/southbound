import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import ImageBlock from './ImageBlock'
import ParagraphBlock from '../helpers/ParagraphBlock'
import GetData from '../helpers/GetData'
import ValueToJSX from '../helpers/ValueToJSX'
import SocialShare from '../components/SocialShare'

export default function PageHeader(source, className, key) {
  const HeaderContent = GetData('header')

  return (
    <section id="page-header">
      <ReactMarkdown
        escapeHtml={false}
        unwrapDisallowed={true}
        key={key || ''}
        className={className || ''}
        source={source || ''}
        renderers={{
          image: ImageBlock,
          paragraph: ParagraphBlock
        }}
      />

      <section id="actions">
        <div class="download"> {ValueToJSX(HeaderContent.download)}</div>
        <SocialShare location="header" />
      </section>
    </section>
  )
}

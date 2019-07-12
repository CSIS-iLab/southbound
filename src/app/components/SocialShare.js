import React from 'react'

export default class SocialShare extends React.Component {
  render() {
    return (
      <ul className="share">
        <li>
          <a
            className="share-icon icon-facebook"
            href={`https://www.facebook.com/sharer.php?u=${
              window.location.href
            }`}
            rel="noopener noreferrer"
            target="_blank"
            title="Share on Facebook"
          >
            <span className="visually-hidden">Share on Facebook</span>
          </a>
        </li>
        <li>
          <a
            className="share-icon icon-twitter"
            href={`https://twitter.com/intent/tweet?url=${
              window.location.href
            }&amp;via=CSIS&amp;related=CSIS`}
            rel="noopener noreferrer"
            target="_blank"
            title="Share on Twitter"
          >
            <span className="visually-hidden">Share on Twitter</span>
          </a>
        </li>
        <li>
          <a
            className="share-icon icon-linkedin"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${
              window.location.href
            }&summary=The New Southbound Policy&source=CSIS`}
            rel="noopener noreferrer"
            target="_blank"
            title="Share on Linkedin"
          >
            <span className="visually-hidden">Share on Linkedin</span>
          </a>
        </li>
        <li>
          <i
            tabIndex="0"
            className="share-icon icon-email"
            href={`mailto:chinapower@csis.org?subject=${document.title}`}
            title="Email"
          >
            <span className="visually-hidden">Email</span>
          </i>
        </li>
        <li>
          <i
            tabIndex="0"
            className="share-icon icon-print"
            onClick={() => window.print()}
          >
            <span className="visually-hidden">Share on Facebook</span>
          </i>
        </li>
      </ul>
    )
  }
}

import React from 'react'

export default class SocialShare extends React.Component {
  render() {
    const { job, location } = this.props

    return (
      <ul className="share">
        <li>
          <a
            className="icon icon-facebook"
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
            className="icon icon-twitter"
            href={`https://twitter.com/intent/tweet?text=Winning at the WTO&amp;url=${
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
          <i
            tabIndex="0"
            className="icon icon-email"
            href={`mailto:?subject=${'x'}&amp;body=${window.location.href}`}
            title="Email"
          >
            <span className="visually-hidden">Email</span>
          </i>
        </li>
        <li>
          <i
            tabIndex="0"
            className="icon icon-printer"
            onClick={() => window.print()}
          >
            <span className="visually-hidden">Share on Facebook</span>
          </i>
        </li>
      </ul>
    )
  }
}

import React from 'react'
import GetData from '../helpers/GetData'
import ValueToJSX from '../helpers/ValueToJSX'
import Download from '../components/Download'
import { ReactComponent as Logo } from '../../assets/images/csis_logo-long.svg'

export default class Footer extends React.Component {
  render() {
    const FooterContent = GetData('footer')

    return (
      <footer className="site-footer">
        <div className="wrapper">
          <section className="site-footer__description">
            <a
              href="https://www.csis.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="csis-link"
            >
              <Logo
                className="csis-link__logo"
                alt="Center for Strategic and International Studies"
                title="Center for Strategic and International Studies"
              />
            </a>
            <div className="site-footer__description-details">
              {ValueToJSX(FooterContent.description[0])}
            </div>
            <div className="site-footer__description-social">
              {ValueToJSX(FooterContent.follow[0])}
              <ul className="share">
                <li>
                  <a
                    href="https://www.facebook.com/CSIS.org/"
                    className="share-icon icon-facebook"
                  >
                    <span className="visually-hidden">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/CSIS"
                    className="share-icon icon-twitter"
                  >
                    <span className="visually-hidden">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/csis"
                    className="share-icon icon-linkedin"
                  >
                    <span className="visually-hidden">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCr5jq6MC_VCe1c5ciIZtk_w"
                    className="share-icon icon-youtube"
                  >
                    <span className="visually-hidden">Youtube</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/csis/?hl=en"
                    className="share-icon icon-instagram"
                  >
                    <span className="visually-hidden">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="site-footer__report">
            <div className="site-footer__report-image">
              <img
                src={FooterContent.southbound.cover}
                alt="The New Southbound Policy Report Cover"
                title="Download The New Southbound Policy Report"
              />
            </div>
            <div className="site-footer__report-details">
              <div className="site-footer__report-details-title">
                {Object.keys(FooterContent.southbound.report).map(key => {
                  return ValueToJSX(FooterContent.southbound.report[key], key)
                })}
              </div>

              <div
                className="site-footer__report-details-authors"
                itemProp="author"
                itemScope
                itemType="http://schema.org/Person"
              >
                {Object.keys(FooterContent.southbound.authors).map(key => {
                  return ValueToJSX(FooterContent.southbound.authors[key], key)
                })}
              </div>
              <div className="site-footer__report-details-info">
                {Object.keys(FooterContent.southbound.info).map(key => {
                  return ValueToJSX(FooterContent.southbound.info[key], key)
                })}
              </div>

              <Download
                content={ValueToJSX(FooterContent.southbound.download)}
              />
            </div>
          </section>
        </div>
        <div className="wrapper">
          <section
            className="site-footer__copyright"
            itemProp="publisher"
            itemScope
            itemType="http://schema.org/Organization"
          >
            {ValueToJSX(FooterContent.copyright[0])}
          </section>
          <section className="site-footer__copyclear " />
        </div>
      </footer>
    )
  }
}

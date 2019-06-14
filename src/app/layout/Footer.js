import React from 'react'
import GetData from '../helpers/GetData'
import ValueToJSX from '../helpers/ValueToJSX'
import logo from '../../assets/images/csis_logo-long.svg'

export default class Footer extends React.Component {
  render() {
    const FooterContent = GetData('footer')
    const { siteStructure } = this.props

    return (
      <footer className="site-footer">
        <section className="site-footer__description">
          <a
            href="https://www.csis.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="csis-link"
          >
            <img 
              src={logo} 
              className="csis-logo"  
              alt="Center for Strategic and International Studies"
              title="Center for Strategic and   International Studies" 
            />
          </a>
          
          <div className="site-footer__description-details">
            {ValueToJSX(FooterContent.description[0])}
          </div>

          <h5 className="faded-half">Follow Us</h5>
          <ul className="site-footer__description-social">
            <li>
              <a
                href="https://www.facebook.com/CSIS.org/"
                className="icon icon-facebook"
              >
                <span className="visually-hidden">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/CSIS" className="icon icon-twitter">
                <span className="visually-hidden">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/csis"
                className="icon icon-linkedin"
              >
                <span className="visually-hidden">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCr5jq6MC_VCe1c5ciIZtk_w"
                className="icon icon-youtube"
              >
                <span className="visually-hidden">Youtube</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/csis/?hl=en"
                className="icon icon-instagram"
              >
                <span className="visually-hidden">Instagram</span>
              </a>
            </li>
          </ul>
        </section>

        <section className="site-footer__copyright">
          {ValueToJSX(FooterContent.copyright[0])}
        </section>

        <section className="site-footer__report">
          <div>
            {Object.keys(FooterContent.southbound.report).map(key => {
              return ValueToJSX(FooterContent.southbound.report[key], null, key)
            })}
          </div>

          <div>
            {Object.keys(FooterContent.southbound.authors).map(key => {
              return ValueToJSX(FooterContent.southbound.authors[key], null, key)
            })}
          </div>
          <div>
            {Object.keys(FooterContent.southbound.info).map(key => {
              return ValueToJSX(FooterContent.southbound.info[key], null, key)
            })}
          </div>
          <div>
            {ValueToJSX(FooterContent.southbound.download)}
          </div>
        </section>
      </footer>
    )
  }
}

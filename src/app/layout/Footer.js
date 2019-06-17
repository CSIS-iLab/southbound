import React from 'react'
import GetData from '../helpers/GetData'
import ValueToJSX from '../helpers/ValueToJSX'
import logo from '../../assets/images/csis_logo-long.svg'
import southboundReport from '../../assets/images/southbound-cover.png'

export default class Footer extends React.Component {
  render() {
    const FooterContent = GetData('footer')
    const { siteStructure } = this.props

    return (
      <footer className="site-footer">
        <div className="breakpoint">
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

            <div className="site-footer__description-social">
              <h5 className="faded-half">Follow Us</h5>
              <ul className="share">
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
            </div>
          </section>

          <section className="site-footer__description--copyright faded-half">
            {ValueToJSX(FooterContent.copyright[0])}
          </section>
        </div>

        <section className="site-footer__report">
          <div className="site-footer__report-image">
            <a
              href="https://www.csis.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="csis-link"
            >
              <img 
                src={southboundReport} 
                className="csis-logo"  
                alt="Center for Strategic and International Studies"
                title="Center for Strategic and   International Studies" 
              />
            </a>
          </div>
          <div className="site-footer__report-details">
            <div className='site-footer__report-details-title'>
              {Object.keys(FooterContent.southbound.report).map(key => {
                return ValueToJSX(FooterContent.southbound.report[key], null, key)
              })}
            </div>

            <div className="site-footer__report-details-authors">
              {Object.keys(FooterContent.southbound.authors).map(key => {
                return ValueToJSX(FooterContent.southbound.authors[key],null, key)
              })}
            </div>
            <div className="site-footer__report-details-info">
              {Object.keys(FooterContent.southbound.info).map(key => {
                return ValueToJSX(FooterContent.southbound.info[key],   null, key)
              })}
            </div>
            <div className='site-footer__report-details-download'>
              <li>{ValueToJSX(FooterContent.southbound.download)}</li>
            </div>
          </div>
        </section>
      </footer>
    )
  }
}

import React from 'react'

export default function FindInReport(props) {
  const { page } = props
  let isMobile
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true
  }

  let pdfURL =
    'https://csis-prod.s3.amazonaws.com/s3fs-public/publication/180613_Glaser_NewSouthboundPolicy_Web.pdf?AcoayLFliB9_iAvbmYvP_jM27mEXw5xL'

  let pdfSuffix = isMobile ? `#${page.replace(/=/, '')}` : `#${page}`

  return (
    <a href={pdfURL + pdfSuffix} className="icon-report">
      Find in Report
    </a>
  )
}
